import { CheckSquare, ShieldCheck, Zap, Database, Globe, Lock } from "lucide-react";
import Link from "next/link";

export default function ChecklistPage() {
  const categories = [
    {
      title: "Frontend & Performance",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      items: [
        "Images optimized (WebP/AVIF)",
        "Core Web Vitals checked",
        "Mobile-first responsive design",
        "SEO Meta tags and OpenGraph images set"
      ]
    },
    {
      title: "Backend & Security",
      icon: <Lock className="h-6 w-6 text-red-500" />,
      items: [
        "Environment variables secured",
        "API Rate limiting implemented",
        "Database indexing for key queries",
        "Error logging (e.g., Sentry) active"
      ]
    },
    {
      title: "DevOps & Scale",
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      items: [
        "Automated deployment (CI/CD)",
        "SSL Certificate active",
        "Domain and DNS configured",
        "Backup strategy for user data"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">← Back to SoloCTO</Link>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h1 className="text-4xl font-bold mb-4">The Solo Founder's Pre-Launch Technical Checklist</h1>
          <p className="text-slate-600 text-xl mb-12">
            Don't launch with bugs. Use this checklist to ensure your MVP is production-ready.
          </p>

          <div className="space-y-12">
            {categories.map((cat, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-6">
                  {cat.icon}
                  <h2 className="text-2xl font-bold">{cat.title}</h2>
                </div>
                <div className="grid gap-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="h-6 w-6 rounded border-2 border-slate-300 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-blue-600 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Still Not Sure?</h3>
            <p className="mb-8 opacity-90">Get a professional eye on your codebase before you go live.</p>
            <Link
              href="/#pricing"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors inline-block"
            >
              Book a $100 Strategy Deep Dive
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
