"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Icons as simple SVG components for fast loading
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill={filled ? "#af9b82" : "none"} stroke="#af9b82" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const PaintBrushIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/>
    <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/>
    <path d="M14.5 17.5 4.5 15"/>
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const PaletteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5"/>
    <circle cx="17.5" cy="10.5" r=".5"/>
    <circle cx="8.5" cy="7.5" r=".5"/>
    <circle cx="6.5" cy="12.5" r=".5"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent opacity-30" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
);

// Constants
const PHONE_NUMBER = "(337) 570-1571";
const PHONE_HREF = "tel:+13375701571";
const EMAIL = "freshpaintprofessionals@gmail.com";
const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/N0HCE1gbacbIezi1DiI4/webhook-trigger/a718900b-6afd-4544-9bd6-c56f1c3aa503";

// Services data
const services = [
  {
    icon: <HomeIcon />,
    title: "Interior Painting",
    description: "Transform your living spaces with expert interior painting. Kitchens, bathrooms, bedrooms, living areas – we do it all with precision and care."
  },
  {
    icon: <PaintBrushIcon />,
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior. We use premium paints that withstand Louisiana's climate while making your home stand out."
  },
  {
    icon: <WrenchIcon />,
    title: "Drywall Repair",
    description: "Dents, dings, holes, and cracks? We repair all sheetrock damage before painting, giving you a flawless, smooth finish every time."
  },
  {
    icon: <LayersIcon />,
    title: "Cabinet Refinishing",
    description: "Give your kitchen or bathroom a fresh look without the cost of replacement. Our cabinet painting transforms dated cabinets beautifully."
  },
  {
    icon: <PaletteIcon />,
    title: "Color Consultation",
    description: "Not sure which colors to choose? Our experts help you select the perfect palette to complement your home and personal style."
  },
  {
    icon: <SparklesIcon />,
    title: "Surface Preparation",
    description: "Proper prep is the secret to lasting results. We thoroughly prepare all surfaces for a professional, long-lasting finish."
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah M.",
    location: "Jennings, LA",
    rating: 5,
    text: "Master Construction transformed our outdated living room into something we're proud to show off. The crew was professional, clean, and finished ahead of schedule. Highly recommend!"
  },
  {
    name: "Robert & Lisa T.",
    location: "Crowley, LA",
    rating: 5,
    text: "We had several drywall repairs needed along with painting. They handled everything seamlessly – one call, one crew, one bill. Our home looks brand new!"
  },
  {
    name: "Michael D.",
    location: "Welsh, LA",
    rating: 5,
    text: "The exterior of our home hadn't been painted in 15 years. The team did an incredible job prepping and painting. Our neighbors keep stopping to compliment us!"
  }
];

// Process steps
const processSteps = [
  {
    number: "1",
    title: "Free Estimate",
    description: "We'll schedule to assess your project in person, answer questions, and provide a detailed, no-obligation estimate. Simply call or fill out the form."
  },
  {
    number: "2",
    title: "We Paint",
    description: "Our professional crew arrives on time, protects your belongings, and completes your project with care."
  },
  {
    number: "3",
    title: "You Love It",
    description: "Walk through your transformed space. We're not done until you're completely satisfied with the results."
  }
];

// Why choose us items
const whyChooseUs = [
  { text: "Local to Southwest Louisiana – we know the climate and homes here" },
  { text: "Free, detailed estimates with no hidden fees" },
  { text: "Clean, professional, and respectful crews" },
  { text: "Premium quality paints and materials" },
  { text: "Drywall and sheetrock repair included – one-stop solution" },
  { text: "100% satisfaction guaranteed on every project" }
];

// Cities served
const citiesServed = [
  "Jennings", "Crowley", "Welsh", "Lake Arthur", "Elton", "Basile",
  "Mermentau", "Estherwood", "Iota", "Church Point", "Rayne"
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectType: "",
    description: "",
    contactMethod: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [heroFormStep, setHeroFormStep] = useState(1);
  const [heroFormData, setHeroFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectType: "",
    description: "",
    contactMethod: ""
  });
  const [isHeroSubmitting, setIsHeroSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to GHL webhook
      const response = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Landing Page",
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = "/thank-you";
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      // Still redirect to thank you page for better UX
      // In production, you might want to show an error message instead
      window.location.href = "/thank-you";
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHeroInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHeroFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsHeroSubmitting(true);

    try {
      const response = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...heroFormData,
          source: "Hero Form",
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      window.location.href = "/thank-you";
    } finally {
      setIsHeroSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Promo Banner */}
      <div className="promo-banner">
        <span>Book Your Spring Painting Projects – Limited Availability</span>
      </div>

      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 py-6 ${
          isScrolled ? "header-shadow" : ""
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="/" className="flex-shrink-0">
            <Image
              src="/logos/master-construction-remodeling-contractor-horiz.svg"
              alt="Master Construction"
              width={200}
              height={50}
              className="h-11 md:h-14 w-auto"
              priority
            />
          </a>

          <div className="flex items-center gap-8">
            <a
              href={PHONE_HREF}
              className="hidden sm:flex items-center gap-2 transition-colors text-xl"
              style={{ color: '#d87716' }}
            >
              <PhoneIcon />
              <span className="font-bold">{PHONE_NUMBER}</span>
            </a>
            <button onClick={scrollToForm} className="btn-primary">
              Get Free Estimate
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/stair-case-staining-lake-charles-la.jpg"
            alt="Master Construction staircase staining in Lake Charles LA"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay - 80% black at top to 10% black at bottom */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 100%)' }}
          />
        </div>

        <div className="w-full mx-auto px-8 md:px-12 lg:px-20 xl:px-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center md:text-left">
              {/* 5-Star Google Reviews Badge */}
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4 animate-fade-in-up">
                <div className="flex text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <span className="text-white text-sm font-medium">5-Star Google Reviews</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up leading-none" style={{ color: 'white' }}>
                Give Your Home the Fresh, Professional Paint It Deserves
              </h1>
              <p className="text-base md:text-lg opacity-90 mb-8 animate-fade-in-up animate-delay-100 leading-relaxed">
                Professional painting services that transform your space. From refreshing a single room to complete interior and exterior makeovers.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 animate-fade-in-up animate-delay-300">
                <div className="trust-badge">
                  <ShieldIcon />
                  <span>Licensed & Insured</span>
                </div>
                <div className="trust-badge">
                  <MapPinIcon />
                  <span>Locally Owned</span>
                </div>
                <div className="trust-badge">
                  <ClockIcon />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Right Side - Multi-Step Form */}
            <div className="rounded-xl p-6 md:p-8 shadow-xl animate-fade-in-up" style={{ backgroundColor: 'rgba(255, 255, 255, 0.92)' }}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-primary">Get Your Free Painting Estimate</h2>
              <p className="text-sm text-gray-500 mb-6">Step {heroFormStep} of 2</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: heroFormStep === 1 ? '50%' : '100%',
                    backgroundColor: 'var(--accent)'
                  }}
                />
              </div>

              <form onSubmit={handleHeroSubmit}>
                {heroFormStep === 1 ? (
                  <div className="space-y-4">
                    {/* Project Type */}
                    <div>
                      <label htmlFor="hero-projectType" className="form-label">
                        Type of Project <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="hero-projectType"
                        name="projectType"
                        required
                        value={heroFormData.projectType}
                        onChange={handleHeroInputChange}
                        className="form-select"
                      >
                        <option value="">Select project type...</option>
                        <option value="interior">Interior Painting</option>
                        <option value="exterior">Exterior Painting</option>
                        <option value="both">Both Interior & Exterior</option>
                        <option value="cabinets">Cabinet Painting</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>

                    {/* Description */}
                    <div>
                      <label htmlFor="hero-description" className="form-label">
                        Tell Us About Your Project (Optional)
                      </label>
                      <textarea
                        id="hero-description"
                        name="description"
                        rows={3}
                        value={heroFormData.description}
                        onChange={handleHeroInputChange}
                        className="form-input resize-none"
                        placeholder="Describe your project, rooms to be painted, color preferences, etc."
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setHeroFormStep(2)}
                      disabled={!heroFormData.projectType}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next Step
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="hero-name" className="form-label">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="hero-name"
                        name="name"
                        required
                        value={heroFormData.name}
                        onChange={handleHeroInputChange}
                        className="form-input"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="hero-phone" className="form-label">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="hero-phone"
                        name="phone"
                        required
                        value={heroFormData.phone}
                        onChange={handleHeroInputChange}
                        className="form-input"
                        placeholder="(337) 555-0123"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="hero-email" className="form-label">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="hero-email"
                        name="email"
                        required
                        value={heroFormData.email}
                        onChange={handleHeroInputChange}
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label htmlFor="hero-address" className="form-label">
                        Address or Zip Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="hero-address"
                        name="address"
                        required
                        value={heroFormData.address}
                        onChange={handleHeroInputChange}
                        className="form-input"
                        placeholder="123 Main St or 70546"
                      />
                    </div>

                    {/* Contact Method */}
                    <div>
                      <label htmlFor="hero-contactMethod" className="form-label">
                        Preferred Contact Method
                      </label>
                      <select
                        id="hero-contactMethod"
                        name="contactMethod"
                        value={heroFormData.contactMethod}
                        onChange={handleHeroInputChange}
                        className="form-select"
                      >
                        <option value="">No preference</option>
                        <option value="phone">Phone Call</option>
                        <option value="text">Text Message</option>
                        <option value="email">Email</option>
                      </select>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setHeroFormStep(1)}
                        className="btn-secondary flex-1"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isHeroSubmitting}
                        className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isHeroSubmitting ? "Submitting..." : "Get Estimate"}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Tired of Looking at the Same Old Walls?</h2>
          <p className="section-subtitle">
            Your home should be a place you love – not a constant reminder of projects you&apos;ve been putting off.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              "Outdated colors that don't match your style anymore",
              "Scuffed, scratched, and worn-out walls",
              "Dents, dings, and nail holes that catch your eye",
              "Peeling or chipping paint on the exterior",
              "Rooms that feel tired, dark, or uninviting",
              "Cabinets that make your kitchen look dated"
            ].map((pain, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 bg-gray-50 rounded-lg"
              >
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-(--gray-600) text-sm">{pain}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-(--gray-600)">
            <strong className="text-primary">Good news:</strong> We can fix all of that.
          </p>
        </div>
      </section>

      {/* Work in Progress Gallery */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative">
            <Image
              src="/images/sanding-stairs-1.jpg"
              alt="Professional sanding stairs"
              width={800}
              height={533}
              className="w-full h-auto"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/painting-cabinets-master-construction-2.jpg"
              alt="Professional cabinet painting"
              width={800}
              height={533}
              className="w-full h-auto"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/sanding-staircase.jpg"
              alt="Sanding staircase railings"
              width={800}
              height={533}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Process Section - How It Works */}
      <section id="process" className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple, straightforward, no hassle.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-gray-200" />
                )}

                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center relative z-10">
                  <span className="text-lg font-semibold text-white">{step.number}</span>
                </div>
                <h3 className="text-base font-semibold mb-2 text-primary">{step.title}</h3>
                <p className="text-(--gray-500) text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            From prep to final coat, we handle every detail with care.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="card text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">{service.title}</h3>
                <p className="text-(--gray-500) text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We&apos;re not just painters – we&apos;re your neighbors, serving our community with quality and care.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border border-gray-100 rounded-lg p-4"
              >
                <CheckIcon />
                <span className="text-(--gray-600) text-sm">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={scrollToForm} className="btn-primary">
              Get Your Free Estimate
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Here&apos;s what homeowners like you have experienced.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card relative">
                <div className="absolute top-6 right-6">
                  <QuoteIcon />
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-(--gray-600) mb-5 text-sm leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-medium text-primary">{testimonial.name}</p>
                  <p className="text-sm text-(--gray-400)">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Before/After Gallery */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-center mb-6 text-primary">See Our Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/master-construction-before-after-bathroom.jpg"
                  alt="Bathroom renovation before and after"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/master-construction-before-after-bathroom-2.jpg"
                  alt="Bathroom transformation before and after"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/master-construction-before-after-bathroom-3.jpg"
                  alt="Bathroom remodel before and after"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Service Area</h2>
          <p className="section-subtitle">
            Serving Jeff Davis Parish, Acadia Parish, and Southwest Louisiana.
          </p>

          <div className="max-w-3xl mx-auto">
            {/* Google Maps Embed */}
            <div className="aspect-video rounded-lg overflow-hidden mb-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d357907.75676063664!2d-93.43347809059959!3d30.366027962629133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a57aef495770d75%3A0x3fd0e96e41fb5041!2sMaster%20Construction%20LLC!5e0!3m2!1sen!2sus!4v1768329700925!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Master Construction Service Area Map"
              />
            </div>

            <div className="text-center">
              <h3 className="text-sm font-medium mb-4 text-(--gray-500) uppercase tracking-wide">Cities We Serve</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {citiesServed.map((city, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-(--gray-600) text-sm border border-gray-100"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section id="contact-form" className="section bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white">Get Your Free Painting Estimate</h2>
              <p className="text-base opacity-80">
                Most estimates provided within 24-48 hours.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="(337) 555-0123"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="form-label">
                      Address or Zip Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="123 Main St or 70546"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="form-label">
                      Type of Project <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select project type...</option>
                      <option value="interior">Interior Painting</option>
                      <option value="exterior">Exterior Painting</option>
                      <option value="both">Both Interior & Exterior</option>
                      <option value="cabinets">Cabinet Painting</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  {/* Contact Method */}
                  <div>
                    <label htmlFor="contactMethod" className="form-label">
                      Preferred Contact Method
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">No preference</option>
                      <option value="phone">Phone Call</option>
                      <option value="text">Text Message</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="form-label">
                    Tell Us About Your Project (Optional)
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-input resize-none"
                    placeholder="Describe your project, rooms to be painted, any repairs needed, color preferences, etc."
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Request Free Estimate"}
                  </button>
                  <p className="mt-4 text-xs text-(--gray-400)">
                    Your information is secure and will never be shared.
                  </p>
                </div>
              </form>
            </div>

            {/* Alternative Contact */}
            <div className="text-center mt-8">
              <p className="opacity-70 mb-2 text-sm">Prefer to talk now?</p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-lg font-medium transition-colors"
                style={{ color: '#d87716' }}
              >
                <PhoneIcon />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-primary">
            Limited Availability This Season
          </h2>
          <p className="text-(--gray-600) mb-6">
            Secure your spot now for your painting project.
          </p>
          <button
            onClick={scrollToForm}
            className="btn-primary"
          >
            Schedule Free Estimate
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Company Info */}
            <div>
              <Image
                src="/logos/master-construction-remodeling-contractor-horiz-white.svg"
                alt="Master Construction"
                width={180}
                height={45}
                className="h-9 w-auto mb-4"
              />
              <p className="text-white/60 text-sm">
                Professional painting services for residential and light commercial properties.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wide mb-4 text-white/80">Contact</h4>
              <div className="space-y-3">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <PhoneIcon />
                  {PHONE_NUMBER}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <MailIcon />
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Service Area */}
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wide mb-4 text-white/80">Service Area</h4>
              <p className="text-white/60 text-sm">
                Jeff Davis Parish, Acadia Parish, and Southwest Louisiana.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} Master Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-100 p-3 z-50">
        <a
          href={PHONE_HREF}
          className="btn-primary w-full justify-center py-4 text-lg font-bold"
          style={{ backgroundColor: '#d87716', color: 'white' }}
        >
          <PhoneIcon />
          <span>Call Now for Free Estimate</span>
        </a>
      </div>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-18 md:hidden" />
    </main>
  );
}
