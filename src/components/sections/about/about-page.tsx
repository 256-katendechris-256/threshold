'use client';

import { motion } from 'framer-motion';
import { Target, Users, Globe, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { TeamSection } from './team-section';

const principles = [
  {
    icon: Users,
    title: 'Inclusivity First',
    description: 'Every solution we design prioritizes women, PWDs, and marginalized communities from day one.',
    details: 'Our products don\'t just accommodate diversity—they\'re engineered to advantage those typically excluded from digital transformation.'
  },
  {
    icon: Target,
    title: 'Lab + Rails Model',
    description: 'We bridge the gap between research and implementation, building the infrastructure that powers digital adoption.',
    details: 'From concept to deployment, we create the foundational systems that governments and corporations depend on.'
  },
  {
    icon: Globe,
    title: 'Pan-African Vision',
    description: 'Starting in East Africa, scaling solutions that work across the continent\'s diverse contexts.',
    details: 'Our approach recognizes Africa\'s diversity while building unified digital infrastructure that serves all regions.'
  },
  {
    icon: Lightbulb,
    title: 'Threshold Innovation',
    description: 'We set new standards for what\'s possible when technology meets local realities.',
    details: 'Our threshold philosophy ensures that complexity never outpaces capacity, keeping adoption sustainable.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-orange-50/50 relative overflow-hidden">
        {/* Colorful background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Building Africa's{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Digital Rails</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              We are a multi-sectoral technology lab that designs, tests, and deploys 
              technologies which set new thresholds for inclusive digital adoption.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Africa's digital transformation cannot thrive without sector-specific 
                  rails that align technology adoption with local realities. Existing 
                  systems often exclude women, Persons with Disabilities (PWDs), and 
                  informal sector players.
                </p>
                <p>
                  Threshold Collective emerges as a lab on top of the sectors – a 
                  cross-disciplinary think-and-do tank that designs, tests, and deploys 
                  technologies which set new thresholds for adoption.
                </p>
                <p>
                  By convening ecosystems, building rails, and embedding inclusivity, 
                  we ensure that digital transformation benefits the marginalized as 
                  much as the mainstream.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-orange-100/50 to-purple-100/50 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-semibold">
                    ΔC &gt; ΔT ⇒ Continuous Growth
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Capacity always exceeds complexity
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section id="philosophy" className="py-24 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-orange-50/30 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-15" />
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-15" />
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Principles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The foundational beliefs that guide everything we build and deploy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm border-white/30">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all bg-gradient-to-br ${
                      index % 3 === 0 ? 'from-blue-500 to-blue-600' :
                      index % 3 === 1 ? 'from-purple-500 to-purple-600' :
                      'from-orange-500 to-red-500'
                    } shadow-md`}>
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {principle.description}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-card shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                A continent where digital rails empower every player — governments, 
                SMEs, women, PWDs, and youth — to compete fairly and prosper in 
                the digital economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-card shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To set thresholds and build the rails that make Africa's digital 
                transformation inclusive, resilient, and future-proof.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-500 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Together?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in creating digital rails that transform how Africa adopts technology.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Start the Conversation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
