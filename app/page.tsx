import { ContactSection } from "./_components/contact-section";
import { EnfoqueSection } from "./_components/enfoque-section";
import { Hero } from "./_components/hero";
import { ServicesSection } from "./_components/services-section";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <EnfoqueSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
