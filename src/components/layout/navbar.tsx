'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Building2, Brain, Code2, Laptop2, LayoutGrid, School2, Target, Users, Lightbulb, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-md group-hover:shadow-lg transition-shadow">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <span className="hidden sm:inline">Threshold Collective</span>
              <span className="sm:hidden">Threshold</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="border-muted">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Threshold
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto">
                  <Link 
                    href="/" 
                    className="block px-4 py-2 text-lg font-medium rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  
                  {navigation.map((nav) => (
                    <div key={nav.title} className="space-y-2">
                      <h3 className="px-4 py-2 text-lg font-semibold text-muted-foreground border-b">
                        {nav.title}
                      </h3>
                      <div className="space-y-1 ml-2">
                        {nav.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted">
                              <div className="w-4 h-4 flex items-center justify-center">
                                {item.icon}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">{item.title}</div>
                              <div className="text-xs text-muted-foreground line-clamp-2">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <Link 
                    href="/contact" 
                    className="block px-4 py-2 text-lg font-medium rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
