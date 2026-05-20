"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import ReactLenis from "lenis/react";

export default function PricingPage() {
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
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "/#about" },
            { name: "Expertise", id: "/#expertise" },
            { name: "Works", id: "/#works" },
            { name: "Services", id: "/#services" },
            { name: "Testimonials", id: "/#testimonials" },
            { name: "Pricing", id: "/pricing" },
          ]}
          brandName="IBRIX"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DygXGhNKmIykMHIKfCzx7B0v4x/uploaded-1779266268516-nvwsfsat.png"
        />
        
        <div id="pricing" className="pt-32 pb-20">
            <PricingCardOne 
                title="Flexible Model Pricing"
                description="Choose the engagement model that fits your business needs."
                animationType="slide-up"
                textboxLayout="default"
                useInvertedBackground={false}
                plans={[
                    { id: "p1", badge: "Fixed Price", price: "$5k+", subtitle: "Best for well-defined, short-term projects with clear requirements.", features: ["Fixed timeline", "Clear scope", "Dedicated project manager"] },
                    { id: "p2", badge: "Time & Materials", price: "$80/hr", subtitle: "Best for evolving products or long-term growth partnerships.", features: ["Flexible scope", "Dedicated development team", "Direct communication"] },
                    { id: "p3", badge: "Dedicated Team", price: "$4k/mo", subtitle: "Best for scaling your operations with a fully integrated team.", features: ["Monthly billing", "Unlimited support", "Full control"] }
                ]}
            />
        </div>

        <FooterBaseReveal
          logoText="IBRIX"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DygXGhNKmIykMHIKfCzx7B0v4x/uploaded-1779266268516-nvwsfsat.png"
          columns={[
            { title: "Company", items: [{ label: "About", href: "/#about" }, { label: "Services", href: "/#services" }] },
            { title: "Contact", items: [{ label: "WhatsApp", href: "https://wa.me/962787789915" }, { label: "Email", href: "mailto:info@ibrix.digital" }] },
          ]}
          copyrightText="© 2026 IBRIX. All rights reserved."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
