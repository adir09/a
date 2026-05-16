import { CheckCircle, Zap, Code, Shield, ArrowRight, MessageSquare, Rocket, FileText, Send } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Flash Sale Banner */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm font-bold animate-pulse">
        ⚡ FLASH SALE: Book in the next 4 hours and get a FREE 30-min follow-up session! (Only 2 spots left today)
      </div>
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Zap className="text-blue-600 h-6 w-6" />
          <span>SoloCTO</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/checklist">
            Free Checklist
          </Link>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
            Benefits
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How it Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Personal On-Demand CTO
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl">
                  Stop guessing and start building. Get expert technical strategy and architecture reviews for your startup. Reach your first $100k without technical debt holding you back.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  href="#pricing"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                >
                  Book a Strategy Call
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Trust Section */}
        <section className="w-full py-12 border-y bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 mb-8">
              Helping founders from companies like
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              <span className="text-2xl font-bold">TECHSTARS</span>
              <span className="text-2xl font-bold">Y COMBINATOR</span>
              <span className="text-2xl font-bold">500 GLOBAL</span>
              <span className="text-2xl font-bold">ANTLER</span>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Solo Founders Choose SoloCTO</h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Avoid the common technical pitfalls that kill 90% of early-stage startups.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center p-6 border rounded-xl shadow-sm">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Stack Selection</h3>
                <p className="text-slate-500">Pick the right tools for speed and scalability. Don't overengineer your MVP.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 border rounded-xl shadow-sm">
                <div className="p-3 bg-green-100 rounded-full">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Security & Scale</h3>
                <p className="text-slate-500">Built-in best practices from day one. Scale without rewrites when you hit 10k users.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 border rounded-xl shadow-sm">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Rocket className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Rapid Prototyping</h3>
                <p className="text-slate-500">Go from idea to production in weeks, not months. Lean execution strategy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 text-xl font-bold">1</div>
                <h3 className="text-xl font-bold">Book Your Session</h3>
                <p className="text-slate-400 text-center">Schedule a 60-minute deep dive into your technical roadmap.</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 text-xl font-bold">2</div>
                <h3 className="text-xl font-bold">Technical Audit</h3>
                <p className="text-slate-400 text-center">We review your code, architecture, and deployment strategy together.</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 text-xl font-bold">3</div>
                <h3 className="text-xl font-bold">Actionable Roadmap</h3>
                <p className="text-slate-400 text-center">Receive a clear, step-by-step document on exactly what to build next.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies / Success Stories */}
        <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Success Stories</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col overflow-hidden border rounded-2xl shadow-sm bg-white">
                <div className="p-8">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                    <FileText className="h-5 w-5" /> Case Study: SaaS Migration
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Saving $2,000/mo on Cloud Costs</h3>
                  <p className="text-slate-600 mb-6">
                    A solo founder was using an over-provisioned Kubernetes cluster for a simple CRUD app. We migrated them to a serverless architecture in 60 minutes.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 italic text-slate-500">
                    "The best $100 I ever spent. The ROI was immediate."
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden border rounded-2xl shadow-sm bg-white">
                <div className="p-8">
                  <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                    <FileText className="h-5 w-5" /> Case Study: Launch Speed
                  </div>
                  <h3 className="text-2xl font-bold mb-2">From "Stuck" to "Live" in 7 Days</h3>
                  <p className="text-slate-600 mb-6">
                    A founder spent 3 months debating between React and Vue. After our call, they had a clear roadmap, picked Next.js, and launched their MVP in a week.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 italic text-slate-500">
                    "I stopped overthinking and started shipping."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Founders Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Chen",
                  role: "Founder, EcoStream",
                  quote: "The technical audit saved us months of rework. We were about to build on the wrong stack.",
                },
                {
                  name: "Mark Johnson",
                  role: "CTO, FinFlow",
                  quote: "SoloCTO provided the high-level perspective we needed when we were stuck in the weeds.",
                },
                {
                  name: "Alex Rivera",
                  role: "Solo Founder, SaaSly",
                  quote: "Best $100 I've spent on my business. The roadmap was clear, actionable, and perfect for my budget.",
                },
              ].map((t, i) => (
                <div key={i} className="flex flex-col p-6 bg-white border rounded-xl shadow-sm">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-4">"{t.quote}"</p>
                  <div className="mt-auto">
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h2>
                <p className="max-w-[600px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Expert advice without the executive salary.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-md py-12">
              <div className="flex flex-col p-8 bg-white border-2 border-blue-600 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-bold uppercase tracking-wider rounded-bl-lg">
                  Popular
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold">Technical Strategy Deep Dive</h3>
                  <p className="text-slate-500 mt-2">Perfect for solo founders starting out.</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-bold">$100</span>
                  <span className="text-slate-500">/session</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span>60-minute 1-on-1 strategy call</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span>Architecture review & feedback</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span>Tech stack recommendation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5" />
                    <span>Post-call action roadmap (PDF)</span>
                  </li>
                </ul>
                <form action="/api/checkout" method="POST">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    Book Now <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6 mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What do I need to prepare for the call?",
                  a: "Ideally, have your current codebase, architecture diagrams, or even just a detailed list of features you're planning to build.",
                },
                {
                  q: "I'm not a developer, can you still help?",
                  a: "Absolutely. I specialize in explaining complex technical concepts in plain English to help you make business-first technical decisions.",
                },
                {
                  q: "Do you offer long-term fractional CTO services?",
                  a: "Yes, the Strategy Deep Dive is usually the first step to a longer-term partnership. We can discuss your needs during the call.",
                },
              ].map((faq, i) => (
                <div key={i} className="border-b pb-6">
                  <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Question Widget */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-white border-2 border-blue-600 rounded-2xl shadow-2xl p-6 max-w-[300px]">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" /> Have a quick tech question?
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Not ready for a full call? Drop your question here and I'll reply within 60 mins.
            </p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your email"
                className="w-full text-sm border p-2 rounded-lg"
              />
              <textarea
                placeholder="What are you stuck on?"
                className="w-full text-sm border p-2 rounded-lg h-20"
              ></textarea>
              <button
                type="button"
                className="w-full bg-blue-600 text-white text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-2"
              >
                Send Question <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Have Questions First?</h2>
            <p className="text-blue-100 mb-8 text-lg">Send me a message and let's see if we're a good fit.</p>
            <a
              href="mailto:hello@solocto.io"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 py-2 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-slate-100"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-slate-500">© 2024 SoloCTO. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-slate-500" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-slate-500" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
