import { ShieldCheck, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function StatusPage() {
  const isSecretKeySet = !!process.env.STRIPE_SECRET_KEY;
  const isBaseUrlSet = !!process.env.NEXT_PUBLIC_BASE_URL;
  const isPublishableKeySet = !!process.env.STRIPE_PUBLISHABLE_KEY;

  const isLive = isSecretKeySet && isBaseUrlSet;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className={`p-6 text-white flex items-center justify-between ${isLive ? 'bg-green-600' : 'bg-amber-500'}`}>
          <h1 className="text-xl font-bold">System Status</h1>
          {isLive ? <CheckCircle /> : <AlertTriangle />}
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">Mode</p>
              <p className="text-sm text-slate-500">How payments are handled</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${isLive ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
              {isLive ? 'Live Mode' : 'Demo Mode'}
            </span>
          </div>

          <hr />

          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Environment Variables</h2>

            <div className="flex items-center justify-between">
              <span className="text-sm">STRIPE_SECRET_KEY</span>
              {isSecretKeySet ? <CheckCircle className="h-5 w-5 text-green-500" /> : <AlertTriangle className="h-5 w-5 text-amber-500" />}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">STRIPE_PUBLISHABLE_KEY</span>
              {isPublishableKeySet ? <CheckCircle className="h-5 w-5 text-green-500" /> : <AlertTriangle className="h-5 w-5 text-amber-500" />}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">NEXT_PUBLIC_BASE_URL</span>
              {isBaseUrlSet ? <CheckCircle className="h-5 w-5 text-green-500" /> : <AlertTriangle className="h-5 w-5 text-amber-500" />}
            </div>
          </div>

          {!isLive && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              <p className="font-bold mb-1">Attention:</p>
              Your app is currently in **Demo Mode**. Users will not be charged. Please check your
              <code className="bg-amber-100 px-1 rounded ml-1">.env.local</code> or Vercel settings.
            </div>
          )}

          <div className="pt-4">
            <Link
              href="/"
              className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
            >
              Go to Home <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
