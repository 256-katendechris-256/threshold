import { Metadata } from 'next';
import ImpactPage from '@/components/sections/impact/impact-page';

export const metadata: Metadata = {
  title: 'Impact - Threshold Collective',
  description: 'Discover how Threshold Collective is creating measurable impact across Africa through digital transformation.',
};

export default function Page() {
  return <ImpactPage />;
}
