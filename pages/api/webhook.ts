// pages/api/create-checkout-session.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    // ✅ 1. Authorization 헤더에서 토큰 추출
    const token = req.headers.authorization?.replace('Bearer ', '')
    if (!token) {
      return res.status(401).json({ error: 'Missing access token' })
    }

    // ✅ 2. Supabase에서 유저 인증
    const { data: authData, error: authError } = await supabase.auth.getUser(token)
    if (authError || !authData?.user) {
      return res.status(401).json({ error: 'Unauthorized user' })
    }

    const user = authData.user
    if (!user.email) {
      return res.status(400).json({ error: 'User email is missing' })
    }

    // ✅ 3. Stripe Checkout 세션 생성
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
      customer_email: user.email,
      metadata: {
        user_id: user.id,
      },
    })

    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('❌ Error creating Stripe session:', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}