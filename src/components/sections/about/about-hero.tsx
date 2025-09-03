'use client';

import { motion } from 'framer-motion';
import { ChevronRight, FileText, Users, Lightbulb, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const values = [
  {
    title: 'Private',
    description: 'Agile, independent, and able to partner with governments, corporations, and development actors.',
    icon: <Building className="w-6 h-6 text-brand-rust" />,
  },
  {
    title: 'Non-Profit',
    description: 'All surpluses are reinvested into sector labs, research, and inclusive innovation rather than dividends.',
    icon: <FileText className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: 'Collective',
    description: 'Built on multi-stakeholder collaboration — convening academia, startups, governments, and citizens.',
    icon: <Users className="w-6 h-6 text-brand-digital" />,
  },
  {
    title: 'Innovation-Driven',
    description: 'Focused on setting new thresholds through innovative solutions and sustainable adoption.',
    icon: <Lightbulb className="w-6 h-6 text-brand-rust-light" />,
  },
];

export function AboutHero() {
  return (
    <section className="relative py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.100),transparent)]" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Setting New Thresholds for Africa's Digital Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Our mission is to ensure that digital capacity always grows faster than complexity — keeping everyone ahead of the adoption curve.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-2 text-sm text-muted-foreground"
          >
            <span>Vision</span>
            <ChevronRight className="w-4 h-4" />
            <span>Mission</span>
            <ChevronRight className="w-4 h-4" />
            <span>Values</span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
