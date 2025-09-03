import ContactPage from '@/components/sections/contact/contact-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Threshold Collective',
  description: 'Get in touch with Threshold Collective to build inclusive digital solutions across Africa.',
};

export default function Page() {
  return <ContactPage />;
}
