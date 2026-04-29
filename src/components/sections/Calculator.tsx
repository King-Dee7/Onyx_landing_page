"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { DollarSign, Clock, ArrowRight, ChevronDown, Calendar } from "lucide-react";

const currencies = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "GBP", symbol: "£" },
    { code: "GHS", symbol: "GH₵" },
    { code: "NGN", symbol: "₦" },
    { code: "KES", symbol: "KSh" },
    { code: "ZAR", symbol: "R" },
    { code: "CAD", symbol: "C$" },
];

function LightSlider({
    label,
    value,
    min,
    max,
    step,
    unit,
    icon: Icon,
    onChange
}: {
    label: string,
    value: number,
    min: number,
    max: number,
    step: number,
    unit: string,
    icon: React.ElementType,
    onChange: (val: number) => void
}) {
    const progress = ((value - min) / (max - min)) * 100;

    return (
        <div className="flex items-center gap-4 py-2 md:py-3 border-b border-zinc-50 last:border-0">
            <div className="w-8 h-8 rounded-full bg-theme-green/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-theme-green" />
            </div>

            <div className="flex-grow flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <label className="text-theme-ink font-semibold text-xs md:text-sm md:min-w-[180px]">{label}</label>

                <div className="relative h-1.5 flex-grow bg-zinc-100 rounded-full">
                    <div
                        className="absolute top-0 left-0 h-full bg-theme-green rounded-full transition-all duration-150 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={(e) => onChange(parseFloat(e.target.value))}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-zinc-200 rounded-full shadow-sm pointer-events-none transition-all duration-150 ease-out"
                        style={{ left: `calc(${progress}% - 8px)` }}
                    />
                </div>

                <div className="flex items-center gap-2 min-w-[80px] justify-end">
                    <div className="bg-white border border-zinc-200 rounded px-2 py-0.5 md:py-1 min-w-[40px] text-center shadow-sm">
                        <span className="text-theme-ink font-bold text-sm md:text-base">{value}</span>
                    </div>
                    <span className="text-zinc-400 text-[11px] md:text-[13px] font-medium">{unit}</span>
                </div>
            </div>
        </div>
    );
}

export function Calculator() {
    const [adminHoursPerDay, setAdminHoursPerDay] = useState<number>(2);
    const [daysPerWeek, setDaysPerWeek] = useState<number>(6);
    const [servicePrice, setServicePrice] = useState<number>(150);
    const [currency, setCurrency] = useState(currencies[0]);

    const [results, setResults] = useState({
        monthlyBoringHours: 0,
        monthlyRevenueLost: 0,
        yearlyRevenueLost: 0,
        workDaysLost: 0,
        potentialNewClients: 0,
    });

    useEffect(() => {
        const monthlyHours = adminHoursPerDay * daysPerWeek * 4;
        const revenueLost = monthlyHours * servicePrice;
        const yearlyLost = revenueLost * 12;
        const daysLost = Math.round(monthlyHours / 8);
        const newClients = Math.floor(monthlyHours * 0.8);

        setResults({
            monthlyBoringHours: monthlyHours,
            monthlyRevenueLost: revenueLost,
            yearlyRevenueLost: yearlyLost,
            workDaysLost: daysLost,
            potentialNewClients: newClients,
        });
    }, [adminHoursPerDay, daysPerWeek, servicePrice]);

    return (
        <section className="py-16 md:py-24 px-4 sm:px-8 bg-theme-off-white" id="calculator">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start max-w-7xl">

                {/* Left Side: Copy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-5 space-y-6 md:space-y-8 lg:sticky lg:top-24"
                >


                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-theme-ink leading-[1.1] text-balance">
                            Estimate How Much Capacity <span className="text-theme-green">Admin Work Is Costing You</span>
                        </h2>
                        <p className="text-theme-body text-base md:text-lg leading-relaxed max-w-md">
                            Most business owners don&apos;t realise how much time they lose to manual tasks.<br />
                            This calculator estimates what that time could be worth — if it were spent on clients instead.
                        </p>
                    </div>

                    {/* MOONSHOT LOGIC CARD - Clean & Sleek Reversion */}
                    <div className="bg-white border border-zinc-200 p-4 md:p-6 rounded-[24px] space-y-2 md:space-y-3 relative overflow-hidden group max-w-md shadow-sm">
                        <div className="flex items-center gap-3 relative z-10">
                            <h4 className="font-bold text-theme-ink text-[10px] md:text-[11px] uppercase tracking-[0.1em] text-theme-green">The Onyx Moonshot Logic</h4>
                        </div>
                        <p className="text-[13px] md:text-[14px] text-theme-body leading-relaxed relative z-10 max-w-[95%] font-medium">
                            By automating 80% of inquiries, you buy back the capacity to serve <strong className="text-theme-green font-bold">{results.potentialNewClients} more clients</strong> every single month.
                        </p>
                    </div>


                </motion.div>

                {/* Right Side: Calculator Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7"
                >
                    <div className="bg-white rounded-[32px] p-4 md:p-10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] border border-zinc-100 relative overflow-hidden">

                        {/* 1. Impact Header */}
                        <div className="text-center mb-4 md:mb-8 relative py-2 md:py-4">
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10">
                                <div className="w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00BF63 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                            </div>

                            <p className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1 md:mb-3">Potential Monthly Opportunity</p>
                            <h3 className="text-4xl md:text-8xl font-bold text-theme-green tracking-tight">
                                {currency.symbol}{results.monthlyRevenueLost.toLocaleString()}
                            </h3>
                        </div>

                        {/* 2. Unified Stats Bar */}
                        <div className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-3 md:p-4 flex items-center justify-between mb-6 md:mb-8 overflow-x-auto no-scrollbar">
                            <div className="flex items-center gap-3 md:gap-4 min-w-max px-2 md:px-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-theme-green/[0.06] flex items-center justify-center">
                                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-theme-green" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base md:text-lg font-bold text-theme-ink leading-tight">{results.monthlyBoringHours} hrs</span>
                                    <span className="text-[10px] md:text-xs text-zinc-400 font-medium">Time Lost</span>
                                </div>
                            </div>

                            <div className="h-8 md:h-10 w-px bg-zinc-100 shrink-0" />

                            <div className="flex items-center gap-3 md:gap-4 min-w-max px-2 md:px-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-theme-green/[0.06] flex items-center justify-center">
                                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-theme-green" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base md:text-lg font-bold text-theme-ink leading-tight">{results.workDaysLost} days</span>
                                    <span className="text-[10px] md:text-xs text-zinc-400 font-medium">Work Days Lost</span>
                                </div>
                            </div>

                            <div className="h-8 md:h-10 w-px bg-zinc-100 shrink-0" />

                            <div className="flex items-center gap-3 md:gap-4 min-w-max px-2 md:px-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-theme-green/[0.06] flex items-center justify-center">
                                    <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-theme-green" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-base md:text-lg font-bold text-theme-ink leading-tight">{currency.symbol}{results.yearlyRevenueLost.toLocaleString()}</span>
                                    <span className="text-[10px] md:text-xs text-zinc-400 font-medium">Annual Opportunity</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-0.5 mb-6 md:mb-8">
                            <p className="text-zinc-400 text-xs md:text-sm mb-2">Adjust the sliders to match your business.</p>

                            <LightSlider
                                label="Hours on Admin / WhatsApp (Daily)"
                                value={adminHoursPerDay}
                                min={0.5}
                                max={12}
                                step={0.5}
                                unit="hrs"
                                icon={Clock}
                                onChange={setAdminHoursPerDay}
                            />

                            <LightSlider
                                label="Days Worked Per Week"
                                value={daysPerWeek}
                                min={1}
                                max={7}
                                step={1}
                                unit="days"
                                icon={Calendar}
                                onChange={setDaysPerWeek}
                            />

                            {/* Price Row */}
                            <div className="flex items-center gap-4 py-2">
                                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-theme-green/10 flex items-center justify-center flex-shrink-0">
                                    <DollarSign className="w-3.5 h-3.5 md:w-4 md:h-4 text-theme-green" />
                                </div>
                                <div className="flex-grow flex flex-col md:flex-row md:items-center gap-1 md:gap-6">
                                    <label className="text-theme-ink font-semibold text-xs md:text-sm md:min-w-[180px]">Average Service / Sale Price</label>
                                    <div className="flex-grow flex items-center gap-2 justify-end">
                                        <div className="relative">
                                            <select
                                                value={currency.code}
                                                onChange={(e) => setCurrency(currencies.find(c => c.code === e.target.value) || currencies[0])}
                                                className="appearance-none bg-white border border-zinc-200 text-theme-ink text-[12px] md:text-sm font-bold py-1 md:py-1.5 pl-2 pr-6 rounded outline-none focus:border-theme-green cursor-pointer transition-colors"
                                            >
                                                {currencies.map((c) => (
                                                    <option key={c.code} value={c.code}>{c.code}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-zinc-400 pointer-events-none" />
                                        </div>
                                        <div className="relative min-w-[100px] md:min-w-[140px]">
                                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs md:text-sm font-medium">{currency.symbol}</span>
                                            <input
                                                type="number"
                                                value={servicePrice}
                                                onChange={(e) => setServicePrice(Number(e.target.value))}
                                                className={`w-full bg-white border border-zinc-200 rounded py-1 md:py-1.5 pr-2.5 text-theme-ink font-bold text-sm md:text-base outline-none focus:border-theme-green ${currency.symbol.length >= 3 ? 'pl-11 md:pl-12' : currency.symbol.length === 2 ? 'pl-9 md:pl-10' : 'pl-7 md:pl-8'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Boring Hours Row */}
                        <div className="bg-red-50/40 p-3 md:p-4 rounded-2xl border border-red-100 mb-6 md:mb-8 flex items-center justify-between">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-red-50 flex items-center justify-center shadow-sm">
                                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                                </div>
                                <div>
                                    <span className="block text-theme-ink font-bold text-sm md:text-base leading-tight">Monthly Boring Hours</span>
                                    <span className="text-[10px] md:text-xs text-zinc-500">Manual, repetitive tasks</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="block text-xl md:text-2xl font-bold text-red-500 leading-tight">{results.monthlyBoringHours} hrs</span>
                                <span className="text-[9px] md:text-[11px] font-bold text-red-400 uppercase tracking-widest">per month</span>
                            </div>
                        </div>

                        {/* 5. Bottom Bar */}
                        <div className="bg-zinc-50/80 p-3 md:p-4 rounded-2xl border border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto">
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white border border-zinc-100 flex items-center justify-center shadow-sm shrink-0">
                                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-theme-green" />
                                </div>
                                <div className="flex-1">
                                    <span className="block text-theme-ink font-bold text-sm md:text-base leading-tight">Ready for growth?</span>
                                    <span className="block text-[10px] md:text-xs text-zinc-500 mt-0.5">Let&apos;s build your blueprint.</span>
                                </div>
                            </div>
                            <Link href="/connect" passHref>
                                <button className="w-full sm:w-auto bg-theme-green hover:bg-theme-green-dark text-white px-5 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all">
                                    Get Your Blueprint <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                </button>
                            </Link>
                        </div>

                    </div>
                </motion.div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-sm text-zinc-400 leading-relaxed mt-10 max-w-2xl mx-auto">
                Estimates only. Figures assume freed hours are fully utilised on billable work. Actual results will vary based on your demand, capacity, and conversion rate.
            </p>
        </section>
    );
}
