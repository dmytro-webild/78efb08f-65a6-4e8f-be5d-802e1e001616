"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import SplitAbout from '@/components/sections/about/SplitAbout';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, CheckCircle, Users } from "lucide-react";

export default function LandingPage() {
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
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "About", id: "#about" },
        { name: "Works", id: "#works" },
        { name: "Services", id: "#services" },
        { name: "Testimonials", id: "#testimonials" },
      ]}
      brandName="IBRIX"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{ variant: "gradient-bars" }}
      title="We Build Better Than AI"
      description="Premium digital agency. IBRIX transforms your vision into measurable growth through human-centric engineering."
      tag="PREMIUM DIGITAL GROWTH AGENCY"
      buttons={[
        { text: "EXPLORE WORK", href: "#works" },
        { text: "INITIATE CONTACT", href: "#contact" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/financial-analyst-analyzing-stock-market-data_23-2151966699.jpg"
      imageAlt="digital agency office technology"
      testimonials={[
        { name: "Ahmed Hassan", handle: "CEO, JTM", testimonial: "Bookings increased by 150% in 6 months.", rating: 5 },
        { name: "Fatima Al-Rashid", handle: "Director, Ghazal", testimonial: "The digital marketing strategy was game-changing.", rating: 5 }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      title="Proven Results"
      description="We deliver exceptional digital ecosystems through strategic engineering."
      textboxLayout="default"
      useInvertedBackground={true}
      bulletPoints={[
        { label: "Projects Delivered", value: "120+", icon: CheckCircle, description: "Delivered across 12 countries" },
        { label: "Happy Clients", value: "85+", icon: Users, description: "High client satisfaction rates" },
        { label: "Years Experience", value: "10+", icon: Award, description: "A decade of digital expertise" },
      ].map(m => ({ title: m.label, description: m.description, icon: m.icon }))}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Why Choose IBRIX?"
      description="We combine human creativity with strategic technology."
      features={[
        { id: "1", title: "Custom Ecosystems", author: "IBRIX", description: "Engineered for your growth", tags: ["Custom", "Engineering"] },
        { id: "2", title: "Swift Execution", author: "IBRIX", description: "Rapid delivery cycles", tags: ["Agile", "Fast"] }
      ]}
    />
  </div>

  <div id="works" data-section="works">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      title="Selected Works"
      description="Recent projects across multiple sectors."
      products={[
        { id: "1", name: "Jordan Travel Market", price: "Tourism", variant: "Enterprise", imageSrc: "http://img.b2bpic.net/free-photo/air-ticket-flight-booking-concept_53876-121109.jpg" },
        { id: "2", name: "Ghazal Travel & Tourism", price: "Travel", variant: "Agency", imageSrc: "http://img.b2bpic.net/free-photo/woman-photographer-using-touch-screen-computer_482257-19488.jpg" }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      showRating={true}
      title="What Our Clients Say"
      description="Trusted by global brands and local leaders."
      testimonials={[
        { id: "1", name: "Ahmed Hassan", handle: "CEO, JTM", testimonial: "IBRIX transformed our presence completely.", rating: 5 },
        { id: "2", name: "Fatima Al-Rashid", handle: "Director, Ghazal", testimonial: "World-class solutions.", rating: 5 }
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "What services does IBRIX provide?", content: "Development, AI, and marketing." },
        { id: "f2", title: "How long does a project take?", content: "Swift delivery prioritized." },
      ]}
      title="Common Questions"
      faqsAnimation="slide-up"
      textboxLayout="default"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      tag="CONTACT US"
      title="Got a vision? Let's build it."
      description="Ready to scale? Connect with our team today."
      buttons={[{ text: "Get Started" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Company", items: [{ label: "About" }, { label: "Services" }] },
        { title: "Contact", items: [{ label: "WhatsApp" }, { label: "Email" }] },
      ]}
      bottomLeftText="© 2026 IBRIX."
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}