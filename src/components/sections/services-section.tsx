'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Building2, Code2, Laptop2, LayoutGrid, School2 } from 'lucide-react';

const services = [
  {
    title: 'Digital Rails',
    description: 'Building innovative procurement systems and digital platforms that drive inclusive commerce and governance.',
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: 'AI & Cybersecurity',
    description: 'Implementing AI solutions and providing comprehensive cybersecurity training for organizations.',
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: 'GovTech & RegTech',
    description: 'Supporting governments with digital solutions for e-government services and regulatory compliance.',
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    title: 'Sector Innovation',
    description: 'Driving innovation in healthcare, water management, sports, and IoT integration.',
    icon: <LayoutGrid className="w-6 h-6" />,
  },
  {
    title: 'Skills Development',
    description: 'Providing hands-on training in AI, cybersecurity, and digital transformation.',
    icon: <School2 className="w-6 h-6" />,
  },
  {
    title: 'Tech Consulting',
    description: 'Strategic consulting for digital transformation and innovation initiatives.',
    icon: <Laptop2 className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Our Services</h2>
          <p className="text-lg text-gray-700">
            We provide comprehensive digital solutions to help organizations and governments
            navigate the complexities of technological advancement.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                    index % 3 === 0 ? 'from-blue-500 to-blue-600' :
                    index % 3 === 1 ? 'from-purple-500 to-purple-600' :
                    'from-orange-500 to-red-500'
                  } flex items-center justify-center mb-4 text-white shadow-md`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
