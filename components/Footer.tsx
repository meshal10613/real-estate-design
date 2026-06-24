"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Company: ["About Us", "Careers", "Press", "Blog"],
  Properties: ["Buy Homes", "Sell Properties", "Rent Spaces", "New Developments"],
  Support: ["Help Center", "Contact Advisor", "Privacy Policy", "Terms of Service"],
};

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email submission toast trigger
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand & Newsletter Column (spans 2 columns on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <svg
                width="26"
                height="26"
                viewBox="0 0 28 28"
                fill="none"
                className="text-white"
              >
                <path
                  d="M14 2L2 10V26H10V18H18V26H26V10L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M8 14L14 9L20 14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-bold tracking-tight text-white">
                Realteek
              </span>
            </div>
            
            <p className="text-xs leading-relaxed max-w-sm text-neutral-400">
              Your trusted partner for high-end, premium real estate. We curate exclusive architectural designs and luxury spaces globally.
            </p>

            {/* Newsletter input inside Brand column */}
            <div className="pt-2 max-w-sm">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3">Newsletter Signup</h4>
              <form onSubmit={handleNewsletterSubmit} className="relative flex items-center">
                <Mail className="absolute left-3.5 h-4 w-4 text-neutral-500 shrink-0" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-full border border-neutral-800 bg-neutral-900/50 pl-10 pr-12 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:border-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-700"
                />
                <Button 
                  type="submit" 
                  size="icon"
                  className="absolute right-1 h-8 w-8 rounded-full bg-amber-500 text-white hover:bg-amber-400 transition-colors"
                >
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-xs text-neutral-400 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-neutral-900" />

        {/* Footer Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Realteek. Designed with excellence. All rights reserved.
          </p>
          
          {/* Social Icons & Secondary Legal Links */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
            </div>
            
            <span className="h-4 w-px bg-neutral-950 border-r border-neutral-900 hidden sm:block" />
            
            <div className="hidden sm:flex gap-4 text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
              <Link href="#" className="hover:text-neutral-300">Privacy</Link>
              <Link href="#" className="hover:text-neutral-300">Terms</Link>
              <Link href="#" className="hover:text-neutral-300">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
