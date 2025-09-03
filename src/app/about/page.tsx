import AboutPage from '@/components/sections/about/about-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Threshold Collective',
  description: 'Learn about our mission to build inclusive digital rails across Africa.',
};

export default function Page() {
  return <AboutPage />;
}
