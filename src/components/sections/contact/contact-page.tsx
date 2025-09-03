'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@thresholdcollective.org',
    description: 'General inquiries and partnerships'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+254 700 000 000',
    description: 'Direct line for urgent matters'
  },
  {
    icon: MapPin,
    title: 'Our Locations',
    details: 'Nairobi, Kampala, Addis Ababa',
    description: 'Pan-African presence'
  },
  {
    icon: Clock,
    title: 'Response Time',
    details: '24-48 hours',
    description: 'We respond to all inquiries'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    sector: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50/50 via-purple-50/50 to-blue-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Let's Build{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600">Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Partner with us to create inclusive digital rails that transform your sector.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">
                    Start a Conversation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Organization</label>
                      <Input
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Your organization"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Sector of Interest</label>
                      <Input
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        placeholder="e.g., GovTech, HealthTech, WaterTech"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or how we can collaborate..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're a government agency, corporation, or development partner, 
                  we're here to help you build inclusive digital solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="p-6 rounded-lg bg-card shadow-sm border border-border group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all bg-gradient-to-br ${
                      index % 3 === 0 ? 'from-blue-500 to-blue-600' :
                      index % 3 === 1 ? 'from-purple-500 to-purple-600' :
                      'from-orange-500 to-red-500'
                    } shadow-md`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1">
                      {info.title}
                    </h3>
                    <div className="text-purple-600 font-medium mb-1">
                      {info.details}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 rounded-lg bg-card shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-4">
                  Partnership Opportunities
                </h3>
                <div className="space-y-3">
                  {[
                    'Government & Public Sector Collaboration',
                    'Corporate Digital Transformation',
                    'Development Partner Initiatives',
                    'Academic Research Partnerships',
                    'Startup Ecosystem Engagement'
                  ].map((opportunity) => (
                    <div key={opportunity} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full" />
                      <span className="text-muted-foreground">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
