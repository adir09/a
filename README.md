# SoloCTO MVP - Your Path to the First $100

SoloCTO is a professional landing page and payment flow designed to help technical consultants sell "Strategy Deep Dive" sessions to solo founders.

This MVP is built to be fast, modern, and ready for your first customer.

## 🚀 The Product

- **Service:** 60-minute 1-on-1 Technical Strategy Session.
- **Price Point:** $100 USD.
- **Value Proposition:** Helping solo founders avoid technical debt and pick the right stack.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Payments:** [Stripe Checkout](https://stripe.com/payments/checkout)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🏃 Local Setup

1. **Clone the repository.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Create a `.env.local` file in the root and add your Stripe keys:
   ```env
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```
   *Note: If no keys are provided, the "Book Now" button will redirect to a demo success page.*
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000).

## 🚢 Deployment

The easiest way to deploy this is with **Vercel**:

1. Push your code to GitHub.
2. Import the project into Vercel.
3. Add the `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_BASE_URL` (your production URL) to the Vercel environment variables.
4. Deploy!

## 🧪 Verification Steps

1. **Homepage:** Verify all sections (Hero, Benefits, How it Works, Testimonials, FAQ, Pricing) are visible.
2. **Payment Flow:**
   - Click "Book Now" in the pricing section.
   - If keys are set: You should be redirected to Stripe Checkout.
   - If keys are missing: You will be redirected to the `/success` page (Demo Mode).
3. **Responsive Design:** Check the site on mobile and desktop views.

## 📈 Earning Your First $100

1. **Customize:** Update the copy in `src/app/page.tsx` with your specific expertise.
2. **Stripe:** Set up a real Stripe account and replace the test keys.
3. **Share:** Post your link on Twitter/X, Indie Hackers, or Reddit (r/startup) targeting solo founders.
4. **Deliver:** Once someone pays, you'll get an email. Reach out to them to schedule the call!

---

**Built with ⚡ by Jules**
