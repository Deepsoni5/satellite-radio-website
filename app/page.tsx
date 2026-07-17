import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ActivationSection from '@/components/activation-section';
import RadioIdSection from '@/components/radio-id-section';
import SupportSection from '@/components/support-section';
import FaqSection from '@/components/faq-section';
import MembershipSection from '@/components/membership-section';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HeroSection />
        <AboutSection />
        <ActivationSection />
        <RadioIdSection />
        <SupportSection />
        <FaqSection />
        <MembershipSection />
      </main>
      <Footer />
    </>
  );
}
