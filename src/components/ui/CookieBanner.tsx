"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-zinc-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pointer-events-auto relative overflow-hidden">
            {/* Subtle left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00BF63]"></div>

            <div className="flex-1 pr-4">
              <h3 className="text-lg font-bold text-zinc-900 mb-2 tracking-tight">We value your privacy</h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
                We use cookies to analyze site traffic and improve your experience. By clicking "Accept", you consent to our use of cookies. 
                Read our <Link href="#" className="text-zinc-900 underline underline-offset-2 hover:text-[#00BF63] transition-colors">Privacy Policy</Link> for more details.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={declineCookies}
                className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-zinc-200 text-zinc-600 text-sm font-semibold hover:bg-zinc-50 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-[#00BF63] transition-colors shadow-lg"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
