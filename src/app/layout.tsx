import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Master Construction | Professional Painting Services in Southwest Louisiana",
  description: "Transform your home with professional interior and exterior painting services. Serving Southwest Louisiana, Jeff Davis Parish, and Acadia Parish. Free estimates!",
  keywords: "painting contractor, house painting, interior painting, exterior painting, Southwest Louisiana, Jeff Davis Parish, Acadia Parish, drywall repair, cabinet painting",
  openGraph: {
    title: "Master Construction | Professional Painting Services",
    description: "Transform your home with professional painting services. Free estimates in Southwest Louisiana.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Master Construction",
              "description": "Professional painting services for residential and light commercial properties in Southwest Louisiana",
              "telephone": "(337) 570-1571",
              "email": "freshpaintprofessionals@gmail.com",
              "areaServed": [
                "Southwest Louisiana",
                "Jeff Davis Parish",
                "Acadia Parish"
              ],
              "serviceType": [
                "Interior Painting",
                "Exterior Painting",
                "Drywall Repair",
                "Cabinet Painting"
              ],
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
