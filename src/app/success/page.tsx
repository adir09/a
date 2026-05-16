import { CheckCircle, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-green-100 rounded-full">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
        <p className="text-slate-600 mb-8">
          Your booking for the <strong>Technical Strategy Deep Dive</strong> has been confirmed. You&apos;re one step closer to scaling your startup.
        </p>

        <div className="bg-blue-50 p-6 rounded-xl mb-8 text-left">
          <h2 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5" /> Next Steps:
          </h2>
          <ul className="space-y-3 text-sm text-blue-800">
            <li>1. Check your email for the calendar invitation.</li>
            <li>2. Complete the pre-call questionnaire (sent to email).</li>
            <li>3. Have your current architecture or code ready to share.</li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
