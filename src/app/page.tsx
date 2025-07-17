import Header from '@/components/landing/Header';
import Testimonials from '@/components/landing/Testimonials';
import Plans from '@/components/landing/Plans';
import LeadCaptureForm from '@/components/landing/LeadCaptureForm';
import SpecialOffer from '@/components/landing/SpecialOffer';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Header />
      
      {/* Testimonials Section */}
      <section id="testimonials" className="w-full">
        <Testimonials />
      </section>
      
      {/* Plans Section */}
      <section id="plans" className="w-full">
        <Plans />
      </section>
      
      {/* Lead Capture Form Section */}
      <section id="lead-form" className="w-full">
        <LeadCaptureForm />
      </section>
      
      {/* Special Offer Section */}
      <section id="special-offer" className="w-full">
        <SpecialOffer />
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
