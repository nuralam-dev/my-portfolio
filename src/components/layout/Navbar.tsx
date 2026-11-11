"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Navigation link type
type NavLink = {
  label: string;
  href: string;
  id: string;
};

// Navigation links
const navLinks: NavLink[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  {
    label: "Experience",
    href: "#experience",
    id: "experience",
  },
];

export default function Navbar() {
  // Mobile menu state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Active navigation section
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track active section while scrolling
  useEffect(() => {
    const sections = [...navLinks.map((link) => link.id), "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu after navigation
  const handleNavigation = (id: string): void => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => handleNavigation("home")}
          className="shrink-0 text-2xl font-extrabold tracking-tight text-slate-900"
        >
          Nur Alam
          <span className="text-indigo-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => handleNavigation(link.id)}
                aria-current={isActive ? "location" : undefined}
                className={`group relative py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-indigo-600"
                }`}
              >
                {link.label}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-indigo-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/resume/Nur_Alam_Resume.pdf"
            download="Nur_Alam_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
          >
            <FiDownload size={18} />
            Download Resume
          </a>

          <Button
            nativeButton={false}
            render={
              <Link
                href="#contact"
                onClick={() => handleNavigation("contact")}
              />
            }
            className="bg-indigo-600 px-5 text-white shadow-sm hover:bg-indigo-700"
          >
            Let&apos;s Talk
            <FiArrowUpRight className="size-4" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="border-slate-200 text-slate-800"
                />
              }
            >
              <HiOutlineMenuAlt3 className="size-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85%] max-w-sm border-slate-200 bg-white px-6"
            >
              <SheetHeader className="px-0 pt-8 text-left">
                <SheetTitle className="text-2xl font-bold text-slate-900">
                  Portfolio
                  <span className="text-indigo-600">.</span>
                </SheetTitle>

                <SheetDescription>Full Stack Web Developer</SheetDescription>
              </SheetHeader>

              {/* Mobile Links */}
              <div className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;

                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={() => handleNavigation(link.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-indigo-50 text-indigo-600"
                          : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Actions */}
              <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-6">
                <Button
                  nativeButton={false}
                  render={
                    <Link
                      href="#contact"
                      onClick={() => handleNavigation("contact")}
                    />
                  }
                  className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Let&apos;s Talk
                  <FiArrowUpRight className="size-4" />
                </Button>

                <a
                  href="/resume/Nur_Alam_Resume.pdf"
                  download="Nur_Alam_Resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
                >
                  <FiDownload size={18} />
                  Download Resume
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
