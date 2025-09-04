'use client';

import Link from 'next/link';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Colorful background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Us</h3>
            <p className="text-sm text-gray-300">
              Threshold Collective builds the rails for Africa's digital future, ensuring inclusive innovation and sustainable adoption.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Address</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>National Innovation Hub</p>
              <p>Kampala - Uganda</p>
              <p>New Portbell Road</p>
              <p>UICT - Nakawa Campus</p>
              <p>Kampala</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact</h3>
            <div className="space-y-3">
              <div className="text-sm text-gray-300">
                <p>Email: info@threshold.co</p>
                <p>Phone: +254 XXX XXX XXX</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-500/10">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-500/10">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-orange-500/10">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Threshold Collective
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
