"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-[210px] px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Digital Pylot" className="h-8" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 mx-[210px]">
            <NavItem title="Hosting" />
            <NavItem title="Domain" />
            <NavItem title="Digital&nbsp;Marketing" />
            <NavItem title="Design" badge="28" />
            <NavItem title="Development" />
            <NavItem title="Addons" />
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            <NavItem title="Contact&nbsp;Us" />
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-full px-6">Register</Button>
            <Button className="rounded-full px-6 bg-[#3B82F6] hover:bg-[#2563EB]">Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ title, badge }: { title: string; badge?: string }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
        {title}
        {badge && (
          <span className="ml-1 px-1.5 py-0.5 text-xs bg-orange-500 text-white rounded-full">
            {badge}
          </span>
        )}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}