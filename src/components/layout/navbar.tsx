'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Building2, Brain, Code2, Laptop2, LayoutGrid, School2, Target, Users, Lightbulb } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const navigation = [
  {
    title: 'About',
    items: [
      {
        title: 'Our Story',
        description: 'Learn about our mission and journey',
        icon: <Target className="w-6 h-6" />,
        href: '/about#story'
      },
      {
        title: 'Team',
        description: 'Meet the people behind Threshold Collective',
        icon: <Users className="w-6 h-6" />,
        href: '/about#team'
      },
      {
        title: 'Philosophy',
        description: 'Our principles and approach to digital transformation',
        icon: <Lightbulb className="w-6 h-6" />,
        href: '/about#philosophy'
      }
    ]
  },
  {
    title: 'Services',
    items: [
      {
        title: 'Digital Rails',
        description: 'Governance & Commerce solutions for African markets',
        icon: <Code2 className="w-6 h-6" />,
        href: '/services/digital-rails'
      },
      {
        title: 'Sector Labs',
        description: 'Innovation labs for Health, Water, Sports & IoT',
        icon: <LayoutGrid className="w-6 h-6" />,
        href: '/services/sector-labs'
      },
      {
        title: 'Skills & Convening',
        description: 'Training and ecosystem building initiatives',
        icon: <School2 className="w-6 h-6" />,
        href: '/services/skills-convening'
      }
    ]
  },
  {
    title: 'Solutions',
    items: [
      {
        title: 'AI & Cybersecurity',
        description: 'Applied AI labs and cybersecurity training',
        icon: <Brain className="w-6 h-6" />,
        href: '/solutions/ai-cybersecurity'
      },
      {
        title: 'GovTech & RegTech',
        description: 'Digital solutions for governance and compliance',
        icon: <Building2 className="w-6 h-6" />,
        href: '/solutions/govtech-regtech'
      },
      {
        title: 'Tech Innovation',
        description: 'Digital transformation and innovation solutions',
        icon: <Laptop2 className="w-6 h-6" />,
        href: '/solutions/tech-innovation'
      }
    ]
  }
];

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-md group-hover:shadow-lg transition-shadow">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Threshold Collective
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" className="px-4 py-2 hover:text-primary">
                    Home
                  </Link>
                </NavigationMenuItem>
                {navigation.map((nav) => (
                  <NavigationMenuItem key={nav.title}>
                    <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {nav.items.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="flex items-start space-x-4 rounded-lg p-3 hover:bg-accent"
                              >
                                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted">
                                  {item.icon}
                                </div>
                                <div className="space-y-1">
                                  <h4 className="text-sm font-semibold">{item.title}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
