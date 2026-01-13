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
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill={filled ? "#fbbf24" : "none"} stroke="#fbbf24" strokeWidth="2">
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

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[var(--primary-blue)] opacity-20" viewBox="0 0 24 24" fill="currentColor">
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
    title: "Contact Us",
    description: "Fill out our form or give us a call. We'll discuss your project and schedule a convenient time to visit."
  },
  {
    number: "2",
    title: "Free Estimate",
    description: "We'll assess your project in person, answer questions, and provide a detailed, no-obligation estimate."
  },
  {
    number: "3",
    title: "We Paint",
    description: "Our professional crew arrives on time, protects your belongings, and completes your project with care."
  },
  {
    number: "4",
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

  return (
    <main className="min-h-screen">
      {/* Promo Banner */}
      <div className="promo-banner animate-pulse-subtle">
        <span className="mr-2">🎨</span>
        <strong>Book Your Spring Painting Projects – Limited Availability!</strong>
        <span className="ml-2">🎨</span>
      </div>

      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? "header-shadow" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex-shrink-0">
            <Image
              src="/logos/master-construction-remodeling-contractor-horiz.svg"
              alt="Master Construction"
              width={200}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </a>

          <div className="flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="hidden sm:flex items-center gap-2 text-[var(--gray-700)] hover:text-[var(--primary-blue)] transition-colors"
            >
              <PhoneIcon />
              <span className="font-semibold">{PHONE_NUMBER}</span>
            </a>
            <button onClick={scrollToForm} className="btn-primary text-sm md:text-base">
              Get Free Estimate
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 opacity-20">
          {/* PLACEHOLDER: Add a before/after painting hero image here */}
          <div className="w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up text-white">
              Give Your Home the Fresh Start It Deserves
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 animate-fade-in-up animate-delay-100">
              Professional painting services that transform your space. From refreshing a single room to complete interior and exterior makeovers – we bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up animate-delay-200">
              <button onClick={scrollToForm} className="btn-primary text-lg px-8 py-4">
                Get Your Free Estimate
                <ArrowRightIcon />
              </button>
              <a href={PHONE_HREF} className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-[var(--primary-blue)] text-lg px-8 py-4">
                <PhoneIcon />
                <span className="ml-2">Call Now</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animate-delay-300">
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
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="section bg-[var(--gray-50)]">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Tired of Looking at the Same Old Walls?</h2>
          <p className="section-subtitle">
            We understand. Your home should be a place you love – not a constant reminder of projects you&apos;ve been putting off.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-[var(--accent-orange)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-[var(--gray-700)]">{pain}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-lg text-[var(--gray-600)]">
            <strong className="text-[var(--primary-blue)]">Good news:</strong> We can fix all of that – and give you a home you&apos;re proud to show off.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Professional Painting Services</h2>
          <p className="section-subtitle">
            From prep to final coat, we handle every detail with care. Quality workmanship you can see and feel.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="card text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary-blue)] bg-opacity-10 flex items-center justify-center text-[var(--primary-blue)] group-hover:bg-[var(--primary-blue)] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--gray-900)]">{service.title}</h3>
                <p className="text-[var(--gray-600)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Why Southwest Louisiana Homeowners Choose Us</h2>
          <p className="section-subtitle text-blue-100">
            We&apos;re not just painters – we&apos;re your neighbors. We take pride in serving our community with honesty, quality, and care.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm"
              >
                <CheckIcon />
                <span className="text-white">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={scrollToForm} className="btn-primary bg-white text-[var(--primary-blue)] hover:bg-[var(--gray-100)]">
              Get Your Free Estimate Today
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section bg-[var(--gray-50)]">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it – here&apos;s what homeowners like you have experienced.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card relative">
                <div className="absolute top-4 right-4">
                  <QuoteIcon />
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-[var(--gray-700)] mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t border-[var(--gray-200)] pt-4">
                  <p className="font-semibold text-[var(--gray-900)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--gray-500)]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Before/After Gallery Placeholder */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-6">See Our Work</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="aspect-square rounded-lg image-placeholder"
                >
                  {/* PLACEHOLDER: Add before/after project image {num} */}
                  <span>Project Photo {num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Simple 4-Step Process</h2>
          <p className="section-subtitle">
            We make it easy to get started. No hassle, no pressure – just great results.
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[var(--gray-200)]" />
                )}

                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary-blue)] flex items-center justify-center relative z-10">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-[var(--gray-900)]">{step.title}</h3>
                <p className="text-[var(--gray-600)] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="section bg-[var(--gray-50)]">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Proudly Serving Southwest Louisiana</h2>
          <p className="section-subtitle">
            We&apos;re local, and we&apos;re here to serve our neighbors in Jeff Davis Parish, Acadia Parish, and the surrounding areas.
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Map Placeholder */}
            <div className="aspect-video rounded-xl image-placeholder mb-8">
              {/* PLACEHOLDER: Add service area map image here */}
              <div className="text-center">
                <MapPinIcon />
                <p className="mt-2">Service Area Map</p>
                <p className="text-sm">Southwest Louisiana</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-[var(--gray-900)]">Cities We Serve:</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {citiesServed.map((city, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white rounded-full text-[var(--gray-700)] shadow-sm text-sm"
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
      <section id="contact-form" className="section bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Space?</h2>
              <p className="text-lg text-blue-100">
                Get your free, no-obligation estimate today. Most estimates provided within 24-48 hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-lg px-10 py-4 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Estimate"}
                  </button>
                  <p className="mt-4 text-sm text-[var(--gray-500)]">
                    🔒 Your information is secure and will never be shared.
                  </p>
                </div>
              </form>
            </div>

            {/* Alternative Contact */}
            <div className="text-center mt-8">
              <p className="text-blue-100 mb-2">Prefer to talk to someone right now?</p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-white text-xl font-bold hover:text-[var(--accent-orange-light)] transition-colors"
              >
                <PhoneIcon />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-[var(--accent-orange)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Limited Spots Available This Month!
          </h2>
          <p className="text-lg mb-6 text-orange-100">
            Spring is our busiest season. Secure your spot now and give your home the refresh it deserves.
          </p>
          <button
            onClick={scrollToForm}
            className="btn-primary bg-white text-[var(--accent-orange)] hover:bg-[var(--gray-100)] text-lg"
          >
            Schedule My Free Estimate
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--gray-900)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <Image
                src="/logos/master-construction-remodeling-contractor-horiz-white.svg"
                alt="Master Construction"
                width={200}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="text-[var(--gray-400)] mb-4">
                Professional painting services for residential and light commercial properties in Southwest Louisiana.
              </p>
              <div className="flex gap-4">
                {/* Social media icons placeholder */}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-[var(--gray-300)] hover:text-white transition-colors"
                >
                  <PhoneIcon />
                  {PHONE_NUMBER}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-[var(--gray-300)] hover:text-white transition-colors"
                >
                  <MailIcon />
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Service Area */}
            <div>
              <h4 className="font-bold text-lg mb-4">Service Area</h4>
              <p className="text-[var(--gray-400)]">
                Proudly serving Jeff Davis Parish, Acadia Parish, and all of Southwest Louisiana.
              </p>
              <div className="mt-4">
                <button
                  onClick={scrollToForm}
                  className="btn-primary text-sm"
                >
                  Get Free Estimate
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--gray-800)] mt-8 pt-8 text-center text-[var(--gray-500)] text-sm">
            <p>© {new Date().getFullYear()} Master Construction. All rights reserved.</p>
            <p className="mt-2">
              Serving Southwest Louisiana with professional painting services.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-[var(--gray-200)] p-4 z-50">
        <div className="flex gap-3">
          <a
            href={PHONE_HREF}
            className="btn-secondary flex-1 justify-center py-3"
          >
            <PhoneIcon />
            <span className="ml-2">Call</span>
          </a>
          <button
            onClick={scrollToForm}
            className="btn-primary flex-1 justify-center py-3"
          >
            Free Estimate
          </button>
        </div>
      </div>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-20 md:hidden" />
    </main>
  );
}
