"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already set cookie preferences
    const cookieConsent = localStorage.getItem("onyx_cookie_consent");
    if (!cookieConsent) {
      // Small delay so it doesn't snap instantly on page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("onyx_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("onyx_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="fixed bottom-0 left-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="w-[280px] bg-white shadow-2xl border border-zinc-200 pointer-events-auto flex flex-col">
            {/* Cookie illustration */}
            <div className="flex justify-center pt-6 pb-2">
              <Image
                src="/cookie-mascot.png"
                alt="Cookie mascot"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            {/* Title & description */}
            <div className="text-center px-5 pb-4">
              <h3 className="text-base font-bold text-zinc-900 mb-1.5 tracking-tight">
                We value your privacy
              </h3>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                We use cookies to analyze site traffic and improve your experience. By clicking &quot;Accept&quot;, you consent to our use of cookies. Read our{" "}
                <Link
                  href="/privacy"
                  className="text-zinc-900 underline underline-offset-2 hover:text-[#00BF63] transition-colors"
                >
                  Privacy Policy
                </Link>{" "}
                for more details.
              </p>
            </div>

            {/* Footer actions */}
            <div className="flex border-t border-zinc-200">
              <button
                onClick={declineCookies}
                className="flex-1 text-center py-3 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors border-r border-zinc-200"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 text-center py-3 text-xs font-bold text-white bg-zinc-900 hover:bg-[#00BF63] transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
