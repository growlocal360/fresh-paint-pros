import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Master Construction",
  description: "Thank you for your estimate request. We'll be in touch shortly!",
};

// Icons
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <main className="min-h-screen bg-[var(--gray-50)]">
      {/* Header */}
      <header className="bg-white shadow-sm">
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
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <CheckCircleIcon />
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--gray-900)] mb-4 animate-fade-in-up">
            Thank You for Your Request!
          </h1>
          <p className="text-lg text-[var(--gray-600)] mb-8 animate-fade-in-up">
            We&apos;ve received your estimate request and we&apos;re excited to help transform your space.
          </p>

          {/* What Happens Next Box */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 text-left animate-fade-in-up">
            <h2 className="text-xl font-bold text-[var(--gray-900)] mb-6 text-center">
              What Happens Next?
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--gray-900)]">We Review Your Request</h3>
                  <p className="text-[var(--gray-600)] text-sm">
                    Our team will review the details you provided about your project.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--gray-900)]">We&apos;ll Contact You</h3>
                  <p className="text-[var(--gray-600)] text-sm">
                    Expect a call or message within <strong>24-48 hours</strong> (usually sooner!) to discuss your project and schedule an on-site estimate.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--primary-blue)] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--gray-900)]">Free On-Site Estimate</h3>
                  <p className="text-[var(--gray-600)] text-sm">
                    We&apos;ll visit your home, assess the project, answer your questions, and provide a detailed, no-obligation estimate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time Notice */}
          <div className="flex items-center justify-center gap-3 bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 animate-fade-in-up">
            <ClockIcon />
            <p className="text-[var(--gray-700)]">
              <strong>Expected Response Time:</strong> Within 24-48 hours
            </p>
          </div>

          {/* Need Immediate Assistance */}
          <div className="bg-[var(--primary-blue)] text-white rounded-2xl p-6 md:p-8 mb-8 animate-fade-in-up">
            <h2 className="text-xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-blue-100 mb-6">
              Can&apos;t wait? Give us a call right now and speak with someone directly.
            </p>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-white text-[var(--primary-blue)] font-bold text-xl px-8 py-4 rounded-lg hover:bg-[var(--gray-100)] transition-colors"
            >
              <PhoneIcon />
              {PHONE_NUMBER}
            </a>

            <p className="text-blue-200 text-sm mt-4">
              Available Monday - Saturday
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 animate-fade-in-up">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <PhoneIcon />
              <span className="text-[var(--gray-700)] font-medium">{PHONE_NUMBER}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-3 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <MailIcon />
              <span className="text-[var(--gray-700)] font-medium text-sm">{EMAIL}</span>
            </a>
          </div>

          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--primary-blue)] font-medium hover:underline animate-fade-in-up"
          >
            <HomeIcon />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--gray-900)] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/logos/master-construction-remodeling-contractor-horiz-white.svg"
            alt="Master Construction"
            width={160}
            height={40}
            className="h-8 w-auto mx-auto mb-4"
          />
          <p className="text-[var(--gray-400)] text-sm">
            Professional painting services for Southwest Louisiana
          </p>
          <p className="text-[var(--gray-500)] text-sm mt-4">
            © {new Date().getFullYear()} Master Construction. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
