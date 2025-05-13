import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <FAQSection />
      <ContactForm />
    </Layout>
  );
}
