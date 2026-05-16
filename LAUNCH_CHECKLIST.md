# 🚀 5-Minute Launch Checklist

The 6-hour timer is running. Follow these 3 steps *right now* to turn "Demo Mode" into "Money Mode."

## Step 1: Get your Stripe Keys (2 Minutes)
1. Go to [Stripe.com](https://stripe.com) and create a free account (or log in).
2. In the Search bar at the top, type **"API Keys"**.
3. You will see two keys:
   - **Publishable key** (starts with `pk_...`)
   - **Secret key** (starts with `sk_...`)

## Step 2: Connect the Keys (1 Minute)
If you are deploying on **Vercel** (recommended for the 6-hour goal):
1. Go to your project dashboard on Vercel.
2. Go to **Settings** > **Environment Variables**.
3. Add these three variables:
   - `STRIPE_SECRET_KEY` = (Your Secret key)
   - `STRIPE_PUBLISHABLE_KEY` = (Your Publishable key)
   - `NEXT_PUBLIC_BASE_URL` = (Your Vercel URL, e.g., `https://solocto.vercel.app`)
4. Re-deploy the project.

## Step 3: Start the Sprint (2 Minutes)
1. Open `SALES_SPRINT.md`.
2. Copy **Script A**.
3. Find a "Co-founder search" post on Reddit or Twitter.
4. Paste the script with your link.

---

### 💡 Pro Tip
Check your email every 30 minutes. When a customer pays, Stripe will notify you. Use that high-energy moment to email them immediately and schedule the call for today!
