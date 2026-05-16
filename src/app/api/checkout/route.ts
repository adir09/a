import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

export async function POST() {
  if (!process.env.STRIPE_SECRET_KEY) {
    // If no Stripe key is provided, we'll redirect to a mock success page for demo purposes
    console.warn("STRIPE_SECRET_KEY is not set. Redirecting to demo success page.");
    return NextResponse.redirect(new URL('/success?demo=true', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'), { status: 303 });
  }

  try {
    if (!stripe) {
      throw new Error("Stripe not initialized");
    }
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Technical Strategy Deep Dive',
              description: '60-minute 1-on-1 strategy call + Action Roadmap PDF',
            },
            unit_amount: 10000, // $100.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/`,
    });

    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
