"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { useEffect, useState } from "react";
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="aurora"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
  <div id="nav" data-section="nav" aria-label="Navigation">
      <NavbarStyleCentered
      navItems={[
        { name: "About", id: "#about" },
        { name: "Expertise", id: "#expertise" },
        { name: "Works", id: "#works" },
        { name: "Services", id: "#services" },
        { name: "Testimonials", id: "#testimonials" },
        { name: "Pricing", id: "/pricing" },
      ]}
      brandName="IBRIX"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      ariaLabel="Hero section"
      background={{ variant: "gradient-bars" }}
      title="We Build Better Than AI"
      description="Premium digital agency. IBRIX transforms your vision into measurable growth through human-centric engineering."
      tag="PREMIUM DIGITAL GROWTH AGENCY"
      buttons={[
        { text: "EXPLORE WORK", href: "#works" },
        { text: "INITIATE CONTACT", href: "#contact" },
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/financial-analyst-analyzing-stock-market-data_23-2151966699.jpg", imageAlt: "digital agency office technology" },
        { imageSrc: "http://img.b2bpic.net/free-photo/woman-employee-looking-startup-analytics-pc_482257-74478.jpg", imageAlt: "digital agency office technology" },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="120+ Projects Delivered Across 12 Countries"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      ariaLabel="About section"
      useInvertedBackground={true}
      title="Architecting Your Digital Future"
      description={[
        "Philosophy: We believe in human-centric innovation. Every line of code is written with purpose, driven by core principles of transparency, scalability, and measurable excellence."
      ]}
      buttons={[
        { text: "View Profile", href: "https://www.linkedin.com/in/ibrahim-nimer-odeh-a1a52878/" },
        { text: "Contact Me", href: "mailto:ibrahim@ibrix.digital" }
      ]}
    />
  </div>

  <div id="expertise" data-section="expertise">
      <FeatureCardSixteen
        ariaLabel="Expertise section"
        animationType="slide-up"
        textboxLayout="default"
        useInvertedBackground={false}
        title="Areas of Expertise"
        description="Specialized domains where we deliver industry-leading results."
        positiveCard={{ items: ["Full-Stack Engineering", "AI System Integration", "Cloud Native Architecture", "Digital Strategy"] }}
        negativeCard={{ items: ["Core Principles:", "Transparency & Trust", "Scalability by Design", "Measurable Excellence"] }}
      />
  </div>

  <div id="languages" data-section="languages">
      <FeatureCardSixteen
        ariaLabel="Languages section"
        animationType="slide-up"
        textboxLayout="default"
        useInvertedBackground={true}
        title="Technical Fluency"
        description="Global communication and development proficiency."
        positiveCard={{ items: ["TypeScript/JavaScript", "Python & Data Science", "Cloud-Native Infra", "DevOps Excellence"] }}
        negativeCard={{ items: ["Languages Support:", "English (Professional)", "Arabic (Native)", "Global Business Standards"] }}
      />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSixteen
      ariaLabel="Services section"
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{ items: ["Generic templated solutions", "Slow project delivery", "Non-measurable results"] }}
      positiveCard={{ items: ["Custom engineered ecosystems", "Swift execution & delivery", "Real, measurable ROI"] }}
      title="Why Choose IBRIX?"
      description="We combine human creativity with strategic technology to build exceptional digital ecosystems."
    />
  </div>

  <div id="works" data-section="works">
      <ProductCardOne
      ariaLabel="Works section"
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        { id: "1", name: "Jordan Travel Market", price: "Tourism & Exhibition", imageSrc: "http://img.b2bpic.net/free-photo/air-ticket-flight-booking-concept_53876-121109.jpg" },
        { id: "2", name: "Ghazal Travel & Tourism", price: "Travel Agency", imageSrc: "http://img.b2bpic.net/free-photo/woman-photographer-using-touch-screen-computer_482257-19488.jpg" },
        { id: "3", name: "Aqaba Coral", price: "Hospitality & Tourism", imageSrc: "http://img.b2bpic.net/free-vector/beauty-salon-booking-app_23-2148566379.jpg" },
        { id: "4", name: "Inoibo", price: "Technology & Innovation", imageSrc: "http://img.b2bpic.net/free-photo/login-box-username-password-inputs-virtual-digital-display_169016-40044.jpg" },
        { id: "5", name: "Corporate Identity", price: "Branding", imageSrc: "http://img.b2bpic.net/free-photo/dollar-sign-right-side_187299-39238.jpg" },
        { id: "6", name: "Growth Strategy", price: "Consulting", imageSrc: "http://img.b2bpic.net/free-photo/friends-looking-laptop-new-website_171337-19397.jpg" },
      ]}
      title="Selected Works"
      description="A selection of recent projects across tourism, hospitality, and technology sectors."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      ariaLabel="Testimonials section"
      cardAnimation="slide-up"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Ahmed Hassan", imageSrc: "http://img.b2bpic.net/free-photo/confident-successful-middle-aged-business-leader_1262-4872.jpg" },
        { id: "2", name: "Fatima Al-Rashid", imageSrc: "http://img.b2bpic.net/free-photo/laughing-woman-with-laptop-office_23-2147787595.jpg" },
        { id: "3", name: "Omar Khalil", imageSrc: "http://img.b2bpic.net/free-photo/woman-working-computer-cafe-drinking-coffee_1303-30002.jpg" },
        { id: "4", name: "Sara Mansour", imageSrc: "http://img.b2bpic.net/free-photo/middle-eastern-businessman-does-daily-tasks-corporate-job_482257-116713.jpg" },
        { id: "5", name: "David Smith", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-mature-businessman-looking-away_23-2147955371.jpg" },
      ]}
      cardTitle="What Our Clients Say"
      cardTag="Trusted by global brands and local leaders alike."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      ariaLabel="FAQ section"
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "What services does IBRIX provide?", content: "We provide full-stack development, AI solutions, digital marketing, and strategic consulting." },
        { id: "f2", title: "How long does a typical project take?", content: "Project timelines vary by scope, but we focus on swift execution without compromising on quality." },
        { id: "f3", title: "Do you work with global clients?", content: "Yes, we have delivered projects across 12 countries and support diverse global industries." },
      ]}
      title="Common Questions"
      description="Everything you need to know about our process and services."
      faqsAnimation="slide-up"
      textboxLayout="default"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      ariaLabel="Contact section"
      title="Got a vision? Let's build it."
      description="Ready to scale? Connect with our team today for a custom consultation."
      useInvertedBackground={true}
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Your Email", required: true }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      ariaLabel="Footer"
      logoText="IBRIX"
      columns={[
        { title: "Company", items: [{ label: "About", href: "#about" }, { label: "Services", href: "#services" }] },
        { title: "Contact", items: [{ label: "WhatsApp", href: "https://wa.me/962787789915" }, { label: "Email", href: "mailto:info@ibrix.digital" }] },
      ]}
      copyrightText="© 2026 IBRIX. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
