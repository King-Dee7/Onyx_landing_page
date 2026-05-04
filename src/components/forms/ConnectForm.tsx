"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";

const improvementOptions = [
    "Lead generation or sales",
    "Customer support",
    "Internal operations",
    "Data processing",
    "Content or marketing workflows",
    "Not sure yet",
];

const currencies = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "GBP", symbol: "£" },
];

const revenueOptions = [
    "20K – 50K",
    "50K – 100K",
    "100K – 500K",
    "500K – 1M",
    "1M – 5M",
    "5M+",
];

const budgetOptions = [
    "Less than 1,000",
    "1,000 – 2,500",
    "2,500 – 5,000",
    "5,000 – 10,000",
    "10,000+",
    "Not sure yet",
];

export function ConnectForm() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        currency: currencies[0],
        improvements: [] as string[],
        revenue: "",
        budget: "",
        message: "",
    });

    const updateField = (field: string, value: string | string[] | typeof currencies[0]) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const toggleImprovement = (option: string) => {
        setFormData((prev) => ({
            ...prev,
            improvements: prev.improvements.includes(option)
                ? prev.improvements.filter((i) => i !== option)
                : [...prev.improvements, option],
        }));
    };

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const canProceed = () => {
        if (step === 1) return formData.firstName.trim().length > 1 && formData.lastName.trim().length > 1 && isValidEmail(formData.email) && formData.phone.trim().length >= 7;
        if (step === 2) return formData.improvements.length > 0;
        if (step === 3) return formData.revenue && formData.budget;
        return false;
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        try {
            await fetch("/api/connect", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    currency: formData.currency.code,
                }),
            });
        } catch (err) {
            console.error("Webhook error:", err);
        }
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const stepVariants = {
        enter: { opacity: 0, x: 30 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -30 },
    };

    if (isSubmitted) {
        return (
            <div className="w-full max-w-2xl mx-auto py-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-white rounded-[32px] p-10 sm:p-16 text-center shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] border border-zinc-100"
                >
                    <div className="w-20 h-20 rounded-full bg-[#00BF63]/10 flex items-center justify-center mx-auto mb-8">
                        <Check className="w-10 h-10 text-[#00BF63]" />
                    </div>
                    <h2 className="text-4xl font-bold text-zinc-900 mb-4 tracking-tight">You&apos;re In!</h2>
                    <p className="text-zinc-500 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                        We&apos;ve received your details. Expect an email from us shortly with your next steps. Please check your inbox (and your spam/promotions folder just in case). Let&apos;s build something incredible.
                    </p>
                    <button
                        onClick={() => window.location.href = "/"}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors"
                    >
                        Return to Homepage
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto py-12 px-4 sm:px-0">
            <div className="bg-white rounded-[32px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] border border-zinc-100 overflow-hidden">
                
                {/* Progress Bar Layer */}
                <div className="h-1.5 bg-zinc-50 w-full relative">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-[#00BF63] rounded-r-full"
                        animate={{ width: `${(step / 3) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </div>

                <div className="p-8 sm:p-12">
                    {/* Step Indicator Header */}
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-3">
                            {[1, 2, 3].map((s) => (
                                <div
                                    key={s}
                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                        s < step
                                            ? "bg-[#00BF63]/10 text-[#00BF63]"
                                            : s === step
                                                ? "bg-[#00BF63] text-white shadow-lg shadow-[#00BF63]/30 ring-4 ring-[#00BF63]/10"
                                                : "bg-zinc-100 text-zinc-400"
                                    }`}
                                >
                                    {s < step ? <Check className="w-4 h-4" /> : s}
                                </div>
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Step {step} of 3</span>
                    </div>

                    {/* Step Content */}
                    <div className="min-h-[420px]">
                        <AnimatePresence mode="wait">
                            
                            {/* STEP 1: Basic Info */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    variants={stepVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="mb-8">
                                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                                            Let&apos;s <span className="text-[#00BF63]">Connect</span>
                                        </h2>
                                        <p className="text-zinc-500 mt-3 text-lg">Tell us about yourself and your business.</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-semibold text-zinc-700">First Name *</label>
                                            <input
                                                id="firstName"
                                                type="text"
                                                placeholder="John"
                                                value={formData.firstName}
                                                onChange={(e) => updateField("firstName", e.target.value)}
                                                className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#00BF63] focus:bg-white transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-semibold text-zinc-700">Last Name *</label>
                                            <input
                                                id="lastName"
                                                type="text"
                                                placeholder="Doe"
                                                value={formData.lastName}
                                                onChange={(e) => updateField("lastName", e.target.value)}
                                                className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#00BF63] focus:bg-white transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-zinc-700">Email Address *</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="john@company.com"
                                            value={formData.email}
                                            onChange={(e) => updateField("email", e.target.value)}
                                            className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#00BF63] focus:bg-white transition-all"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-semibold text-zinc-700">Phone / WhatsApp *</label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                placeholder="+1 234 567 8900"
                                                value={formData.phone}
                                                onChange={(e) => updateField("phone", e.target.value)}
                                                className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#00BF63] focus:bg-white transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="companyName" className="text-sm font-semibold text-zinc-700">Company Name</label>
                                            <input
                                                id="companyName"
                                                type="text"
                                                placeholder="Acme Inc."
                                                value={formData.companyName}
                                                onChange={(e) => updateField("companyName", e.target.value)}
                                                className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#00BF63] focus:bg-white transition-all"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 2: Goals */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    variants={stepVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="mb-8">
                                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                                            What are you hoping to <span className="text-[#00BF63]">improve</span>?
                                        </h2>
                                        <p className="text-zinc-500 mt-3 text-lg">Select all that apply.</p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-3">
                                        {improvementOptions.map((option) => {
                                            const isSelected = formData.improvements.includes(option);
                                            return (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => toggleImprovement(option)}
                                                    className={`flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-200 cursor-pointer ${
                                                        isSelected
                                                            ? "border-[#00BF63] bg-[#00BF63]/5 shadow-sm"
                                                            : "border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                                                    }`}
                                                >
                                                    <div
                                                        className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                                                            isSelected
                                                                ? "bg-[#00BF63] border-[#00BF63]"
                                                                : "border-zinc-300"
                                                        }`}
                                                    >
                                                        {isSelected && <Check className="w-4 h-4 text-white" />}
                                                    </div>
                                                    <span className={`text-base font-semibold ${isSelected ? "text-[#00BF63]" : "text-zinc-700"}`}>
                                                        {option}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3: Details */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    variants={stepVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="mb-8">
                                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                                            Almost <span className="text-[#00BF63]">there</span>
                                        </h2>
                                        <p className="text-zinc-500 mt-3 text-lg">Help us understand the scope of your project.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="currency" className="text-sm font-semibold text-zinc-700">Currency Preference</label>
                                        <select
                                            id="currency"
                                            value={formData.currency.code}
                                            onChange={(e) => updateField("currency", currencies.find(c => c.code === e.target.value) || currencies[0])}
                                            className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 focus:outline-none focus:border-[#00BF63] focus:bg-white transition-all appearance-none cursor-pointer font-medium"
                                        >
                                            {currencies.map((c) => (
                                                <option key={c.code} value={c.code}>{c.code} ({c.symbol})</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="revenue" className="text-sm font-semibold text-zinc-700">Annual Revenue *</label>
                                            <select
                                                id="revenue"
                                                value={formData.revenue}
                                                onChange={(e) => updateField("revenue", e.target.value)}
                                                className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 focus:outline-none focus:border-[#00BF63] focus:bg-white transition-all appearance-none cursor-pointer font-medium"
                                            >
                                                <option value="" disabled>Select range</option>
                                                {revenueOptions.map((opt) => (
                                                    <option key={opt} value={opt}>{formData.currency.symbol}{opt}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="budget" className="text-sm font-semibold text-zinc-700">Project Budget *</label>
                                            <select
                                                id="budget"
                                                value={formData.budget}
                                                onChange={(e) => updateField("budget", e.target.value)}
                                                className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 focus:outline-none focus:border-[#00BF63] focus:bg-white transition-all appearance-none cursor-pointer font-medium"
                                            >
                                                <option value="" disabled>Select budget</option>
                                                {budgetOptions.map((opt) => (
                                                    <option key={opt} value={opt}>{opt === "Not sure yet" ? opt : `${formData.currency.symbol}${opt}`}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-zinc-700">
                                            Anything else we should know? <span className="text-zinc-400 font-normal">(optional)</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Tell us exactly what bottleneck is slowing you down..."
                                            value={formData.message}
                                            onChange={(e) => updateField("message", e.target.value)}
                                            rows={4}
                                            className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#00BF63] focus:bg-white transition-all resize-none"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Bar */}
                    <div className="flex items-center justify-between mt-12 pt-8 border-t border-zinc-100">
                        {step > 1 ? (
                            <button
                                onClick={() => setStep(step - 1)}
                                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors font-bold tracking-wide uppercase text-sm"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back
                            </button>
                        ) : (
                            <div /> // Spacer
                        )}

                        {step < 3 ? (
                            <button
                                onClick={() => canProceed() && setStep(step + 1)}
                                disabled={!canProceed()}
                                className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all cursor-pointer ${
                                    canProceed()
                                        ? "bg-zinc-900 text-white hover:bg-[#00BF63] shadow-xl hover:shadow-[#00BF63]/20"
                                        : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                                }`}
                            >
                                Continue <ArrowRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                onClick={() => canProceed() && handleSubmit()}
                                disabled={!canProceed() || isSubmitting}
                                className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all cursor-pointer ${
                                    canProceed() && !isSubmitting
                                        ? "bg-[#00BF63] text-white hover:bg-emerald-500 shadow-xl shadow-[#00BF63]/30"
                                        : "bg-zinc-100 text-zinc-400 cursor-not-allowed"
                                }`}
                            >
                                {isSubmitting ? (
                                    <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                                ) : (
                                    <>Start Your Build <ArrowRight className="w-5 h-5" /></>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
