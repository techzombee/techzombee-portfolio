import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { buffer } from 'micro'
import { createClient } from '@supabase/supabase-js'

export const config = {
  api: {
    bodyParser: false,
  },
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// ✅ Supabase 서비스 역할 키 사용
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed')
  }

  let event: Stripe.Event

  try {
    const rawBody = await buffer(req)
    const signature = req.headers['stripe-signature'] as string

    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (err) {
    console.error('❌ Webhook signature verification failed.', err)
    return res.status(400).send(`Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
  }

  // ✅ 이벤트 타입 처리
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.metadata?.user_id

    if (!userId) {
      console.error('❌ Missing user_id in session metadata')
      return res.status(400).send('Missing user_id')
    }

    // ✅ 유저 업데이트 예시 (구독 활성화 표시 등)
    const { error } = await supabase
      .from('users')
      .update({ is_pro: true }) // ✅ 'is_pro' 필드 예시. 필요에 따라 수정
      .eq('id', userId)

    if (error) {
      console.error('❌ Supabase update error:', error)
      return res.status(500).send('Database update failed')
    }

    console.log(`✅ Subscription activated for user ${userId}`)
  }

  return res.status(200).json({ received: true })
}