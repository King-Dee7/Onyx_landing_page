"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// ─── Social & Contact Icons (inline SVG - no external dependency needed) ───────

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.16 6.16l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// ─── Column Header ──────────────────────────────────────────────────────────────
const ColHeader = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-4">
    {children}
  </p>
);

// ─── Footer Link ───────────────────────────────────────────────────────────────
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block text-[#A1A1AA] text-sm hover:text-white transition-colors duration-200 mb-3"
  >
    {children}
  </a>
);

// ─── Social Icon Button ────────────────────────────────────────────────────────
const SocialButton = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:border-[#00BF63] hover:text-[#00BF63] transition-colors duration-200"
    >
      {children}
    </a>
  );
};

// ─── Footer Component ──────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-white font-inter py-10 md:py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* ── Top Section: Logo & Columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-10 md:pb-12 border-b border-white/5">

          {/* Column 1: Brand */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col gap-3">
            <Link href="/" className="flex items-center -ml-2 mb-2">
              <Image
                src="/onyx (black bg).svg"
                alt="Onyx Logo"
                width={112}
                height={80}
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#A1A1AA]">
              Onyx Automation Agency
            </p>
            <p className="text-[#A1A1AA] text-xs md:text-sm leading-relaxed max-w-[240px]">
              AI systems for service businesses that want to scale without the overhead.
            </p>
          </div>

          {/* Columns 2-4: Links */}
          <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-6">
            <div>
              <ColHeader>Contact</ColHeader>
              <FooterLink href="mailto:hello@onyxautomation.co">Email</FooterLink>
              <FooterLink href="http://wa.me/message/TNGRXPEF5XIYG1">WhatsApp</FooterLink>
            </div>

            <div>
              <ColHeader>Socials</ColHeader>
              <FooterLink href="https://linkedin.com/company/onyx-automation-agency">LinkedIn</FooterLink>
              <FooterLink href="https://web.facebook.com/profile.php?id=61587054920765">Facebook</FooterLink>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <ColHeader>Navigate</ColHeader>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-4">
                <FooterLink href="/#services">Services</FooterLink>
                <FooterLink href="/#calculator">Calculator</FooterLink>
                <FooterLink href="/#blueprint">How It Works</FooterLink>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Section: Socials & Copyright ── */}
        <div className="pt-8 md:pt-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <SocialButton href="https://linkedin.com/company/onyx-automation-agency" label="LinkedIn">
              <IconLinkedIn />
            </SocialButton>
            <SocialButton href="https://web.facebook.com/profile.php?id=61587054920765" label="Facebook">
              <IconFacebook />
            </SocialButton>
            <SocialButton href="mailto:hello@onyxautomation.co" label="Email">
              <IconMail />
            </SocialButton>
            <SocialButton href="http://wa.me/message/TNGRXPEF5XIYG1" label="WhatsApp">
              <IconPhone />
            </SocialButton>
          </div>
          
          <p className="text-[10px] md:text-xs text-[#A1A1AA] tracking-wide">
            © 2026 Onyx Automation Agency. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
