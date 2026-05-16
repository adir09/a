# 💸 How You Get Paid: The Money Flow

Since you haven't touched anything yet, here is exactly how SoloCTO is set up to put money in your pocket.

## 1. The Customer Journey
1. **The Click:** A founder sees your post on Reddit/Twitter and clicks your link (e.g., `solocto.vercel.app`).
2. **The Pitch:** They read your landing page, see the **$100 Strategy Deep Dive**, and see your **Success Stories**.
3. **The Urgency:** The pulsing **Flash Sale** banner tells them they get a bonus if they act in the next 4 hours.
4. **The Action:** They click the **"Book Now"** button.

## 2. The Transaction (The Technical Part)
1. **Checkout:** Clicking "Book Now" sends them to a secure **Stripe Checkout** page.
2. **Payment:** They enter their credit card/Apple Pay/Google Pay details.
3. **Success:** Once the payment is processed, they are redirected to your `/success` page, which tells them to wait for your email.

## 3. How the Money Reaches You
SoloCTO uses **Stripe**, the industry standard for online payments.
1. **Your Stripe Account:** The money ($100 minus Stripe's ~3% fee) goes into your Stripe Balance immediately.
2. **Notification:** You get an email from Stripe saying *"You just received a payment of $100!"*
3. **Payout:** Depending on your Stripe settings, the money is automatically transferred (payout) to your **linked bank account** (usually daily or weekly).

## 4. Current "Demo Mode" Warning ⚠️
**Important:** Because you haven't added your secret API keys yet, the "Book Now" button is currently in **Demo Mode**.
- **What happens now:** It redirects to the `/success` page automatically without asking for a credit card.
- **Why:** This is so you can see the full flow before you "go live."
- **To get REAL money:** You must follow the steps in `LAUNCH_CHECKLIST.md` (creating next) to put your real Stripe keys into the project.

## 5. Summary
You don't need to build anything else. You just need to:
1. Create a Stripe account.
2. Copy two "Keys" into your settings.
3. Start posting the links from `MARKETING.md`.
