// import { NextApiRequest, NextApiResponse } from 'next'
// import Stripe from 'stripe'

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).end('Method Not Allowed')
//   }

//   try {
//     const session = await stripe.checkout.sessions.create({
//       mode: 'subscription',
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price: 'price_1RTAp1EAH6kUKFIDbxqE5vzy',
//           quantity: 1,
//         },
//       ],
//       success_url: `${req.headers.origin}/stripe-success`,
//       cancel_url: `${req.headers.origin}/stripe-cancel`,
//     })

//     return res.status(200).json({ url: session.url })
//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({ error: 'Something went wrong' })
//   }
// }



import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed')
  }

  try {
    // ✅ 1. Supabase 로그인 유저 토큰 검증
    const token = req.headers.authorization?.replace('Bearer ', '')
    if (!token) {
      return res.status(401).json({ error: 'Missing authorization token' })
    }

    const { data: authData, error: authError } = await supabase.auth.getUser(token)
    if (authError || !authData?.user) {
      return res.status(401).json({ error: 'Invalid user session' })
    }

    const user = authData.user
    if (!user.email) {
      return res.status(400).json({ error: 'Missing user email' })
    }

    // ✅ 2. Stripe Checkout 세션 생성
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!, // Stripe Price ID
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/stripe-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/stripe-cancel`,
      customer_email: user.email,
      metadata: {
        user_id: user.id, // ✅ Webhook에서 유저 식별용
      },
    })

    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Stripe session error:', err)
    return res.status(500).json({ error: 'Something went wrong' })
  }
}