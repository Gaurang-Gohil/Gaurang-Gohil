'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0.1,
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-background/90 backdrop-blur">
      <nav className="container-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <Link href="#home" className="text-sm font-semibold tracking-[0.2em] text-slate-100">
          RONIE
        </Link>
        <ul className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-slate-300 hover:text-slate-100'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
