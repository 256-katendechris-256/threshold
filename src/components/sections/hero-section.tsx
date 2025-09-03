'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code2, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Colorful Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 shadow-lg backdrop-blur-sm border border-white/20"
          >
            <Code2 className="w-10 h-10 text-blue-600" />
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
          >
            We build the{' '}
            <span 
              className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-extrabold"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              rails
            </span>{' '}
            for Africa's{' '}
            <span 
              className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent font-extrabold"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              digital
            </span>{' '}
            <span 
              className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-extrabold"
              style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              future
            </span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl px-4 sm:px-0"
          >
            A multi-sectoral technology lab designing inclusive solutions that set new thresholds for digital adoption across governance, commerce, and innovation.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg w-full sm:w-auto">
              Explore Our Work
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg w-full sm:w-auto">
              Learn Our Story
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
