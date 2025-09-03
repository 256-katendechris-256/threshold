'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, Users } from 'lucide-react';

const stats = [
  {
    value: '3+',
    label: 'Countries',
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    value: '8+',
    label: 'Sectors',
    icon: <Zap className="w-8 h-8 text-purple-600" />,
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    value: '10K+',
    label: 'Communities Reached',
    icon: <Users className="w-8 h-8 text-orange-600" />,
    gradient: 'from-orange-500 to-red-500',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const statVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-orange-50/50" />
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={statVariants}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg border border-white/20"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${stat.gradient} shadow-lg`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-lg text-gray-700 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
