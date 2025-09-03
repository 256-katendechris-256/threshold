'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Globe2, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const caseStudies = [
  {
    title: 'Uganda e-Procurement Transformation',
    sector: 'GovTech',
    challenge: 'Gender exclusion in government procurement processes',
    solution: 'Redesigned procurement platform with inclusive onboarding and support',
    impact: '65% increase in women-owned business participation',
    metrics: { before: 15, after: 65, unit: '% women vendors' },
    status: 'Completed'
  },
  {
    title: 'Kenya Rural Water Monitoring',
    sector: 'WaterTech',
    challenge: 'Unreliable water access data in remote communities',
    solution: 'IoT sensor network with community-managed dashboards',
    impact: '40% improvement in water system uptime',
    metrics: { before: 60, after: 84, unit: '% system uptime' },
    status: 'Ongoing'
  },
  {
    title: 'Ethiopia Health Records Digitization',
    sector: 'HealthTech',
    challenge: 'Fragmented health data limiting care continuity',
    solution: 'Unified digital health platform with offline capabilities',
    impact: '200,000 patients connected to digital records',
    metrics: { before: 5000, after: 205000, unit: 'patients' },
    status: 'Scaling'
  }
];

const impactMetrics = [
  {
    icon: Users,
    label: 'Lives Impacted',
    value: 15000,
    description: 'Individuals directly benefiting from our solutions',
    growth: '+120%'
  },
  {
    icon: Globe2,
    label: 'Geographic Reach',
    value: 3,
    description: 'Countries with active implementations',
    growth: '+50%'
  },
  {
    icon: Target,
    label: 'Inclusion Rate',
    value: 85,
    description: 'Success rate for onboarding marginalized groups',
    growth: '+25%'
  },
  {
    icon: TrendingUp,
    label: 'System Efficiency',
    value: 40,
    description: 'Average efficiency improvement in partner systems',
    growth: '+15%'
  }
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50/50 via-purple-50/50 to-blue-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Measurable{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-600">Impact</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Real outcomes from building inclusive digital rails across Africa. 
              Every solution we deploy creates lasting change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg bg-gradient-to-br ${
                      index % 3 === 0 ? 'from-blue-500 to-blue-600' :
                      index % 3 === 1 ? 'from-purple-500 to-purple-600' :
                      'from-orange-500 to-red-500'
                    }`}>
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${
                      index % 3 === 0 ? 'from-blue-500 to-blue-600' :
                      index % 3 === 1 ? 'from-purple-500 to-purple-600' :
                      'from-orange-500 to-red-500'
                    } bg-clip-text text-transparent`}>
                      {typeof metric.value === 'number' && metric.value > 1000 
                        ? `${(metric.value / 1000).toFixed(0)}K`
                        : metric.value}{metric.label === 'Inclusion Rate' || metric.label === 'System Efficiency' ? '%' : ''}
                    </div>
                    <CardTitle className="text-lg">{metric.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {metric.description}
                    </p>
                    <Badge variant="secondary" className={`${
                      index % 3 === 0 ? 'text-blue-600 bg-blue-100' :
                      index % 3 === 1 ? 'text-purple-600 bg-purple-100' :
                      'text-orange-600 bg-orange-100'
                    }`}>
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                      {metric.growth}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-orange-50/30 relative overflow-hidden">
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
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dives into how our threshold philosophy creates real change.
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge className="mb-2 bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">{study.sector}</Badge>
                        <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                          {study.title}
                        </CardTitle>
                      </div>
                      <Badge 
                        variant="outline"
                        className={
                          study.status === 'Completed' ? 'border-blue-500 text-blue-600' :
                          study.status === 'Ongoing' ? 'border-purple-500 text-purple-600' :
                          'border-orange-500 text-orange-600'
                        }
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {study.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-orange-600">Challenge</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-purple-600">Solution</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-600">Impact</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {study.impact}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Before: {study.metrics.before} {study.metrics.unit}</span>
                            <span>After: {study.metrics.after} {study.metrics.unit}</span>
                          </div>
                          <Progress 
                            value={(study.metrics.after / Math.max(study.metrics.before, study.metrics.after)) * 100} 
                            className="h-2 bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-blue-600"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
