import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { HeroSection } from "@/widgets/hero-section";
import { PricingSection } from "@/widgets/pricing-section";
import { ContactSection } from "@/widgets/contact-section";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  void locale;

  return (
    <>
      <Header />
      <main className="flex flex-col gap-24">
        <HeroSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
