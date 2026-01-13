import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Master Construction",
  description: "Thank you for your estimate request. We'll be in touch shortly!",
};

// Icons
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

// Constants
const PHONE_NUMBER = "(337) 570-1571";
const PHONE_HREF = "tel:+13375701571";
const EMAIL = "freshpaintprofessionals@gmail.com";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-block">
            <Image
              src="/logos/master-construction-remodeling-contractor-horiz.svg"
              alt="Master Construction"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-md mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <CheckCircleIcon />
          </div>

          {/* Main Message */}
          <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-3 animate-fade-in-up">
            Thank You!
          </h1>
          <p className="text-(--gray-600) mb-10 animate-fade-in-up">
            We&apos;ve received your request and will be in touch soon.
          </p>

          {/* What Happens Next Box */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left animate-fade-in-up">
            <h2 className="text-sm font-medium text-primary mb-5 text-center uppercase tracking-wide">
              What Happens Next
            </h2>

            <div className="space-y-5">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-primary text-sm">We Review Your Request</h3>
                  <p className="text-(--gray-500) text-sm">
                    Our team reviews your project details.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-primary text-sm">We Contact You</h3>
                  <p className="text-(--gray-500) text-sm">
                    Expect a call within <strong>24-48 hours</strong> to schedule your estimate.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-primary text-sm">Free On-Site Estimate</h3>
                  <p className="text-(--gray-500) text-sm">
                    We visit your home and provide a detailed, no-obligation estimate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time Notice */}
          <div className="flex items-center justify-center gap-2 text-(--gray-500) text-sm mb-8 animate-fade-in-up">
            <ClockIcon />
            <p>Response within 24-48 hours</p>
          </div>

          {/* Need Immediate Assistance */}
          <div className="bg-primary text-white rounded-lg p-6 mb-8 animate-fade-in-up">
            <h2 className="text-base font-medium mb-2">Need to talk now?</h2>
            <p className="text-white/70 text-sm mb-4">
              Call us directly.
            </p>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors text-sm"
            >
              <PhoneIcon />
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-3 mb-8 animate-fade-in-up">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
            >
              <PhoneIcon />
              <span className="text-(--gray-600) text-sm">{PHONE_NUMBER}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-2 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
            >
              <MailIcon />
              <span className="text-(--gray-600) text-xs truncate">{EMAIL}</span>
            </a>
          </div>

          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-accent transition-colors animate-fade-in-up"
          >
            <HomeIcon />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/logos/master-construction-remodeling-contractor-horiz-white.svg"
            alt="Master Construction"
            width={140}
            height={35}
            className="h-7 w-auto mx-auto mb-3"
          />
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Master Construction
          </p>
        </div>
      </footer>
    </main>
  );
}
