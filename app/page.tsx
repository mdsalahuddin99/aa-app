"use client";

import React, { useState } from 'react';
import {
    Smartphone,
    ArrowRight,
    Download,
    ShieldCheck,
    Zap,
    Globe,
    Play,
    Share,
    MoreVertical,
    PlusSquare,
    Apple,
    SmartphoneIcon as Android,
    Chrome,
    ImageIcon,
    X,
    Info,
    Mail,
    Heart,
    Briefcase,
    Facebook,
    Twitter,
    MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Header = () => (
    <header className="fixed top-0 z-[100] w-full bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-16 sm:h-20">
                <div className="flex items-center gap-2.5">
                    <img 
                        src="/logo.png" 
                        alt="অমর অরুয়াইল" 
                        className="h-10 sm:h-14 w-auto object-contain" 
                    />
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#install" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">কিভাবে ইনস্টল করবেন</a>
                    <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors">আমাদের কথা</a>
                    <a
                        href="#install"
                        className="px-5 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-100"
                    >
                        অ্যাপটি নিন
                    </a>
                </nav>

                <div className="md:hidden">
                    <a
                        href="#install"
                        className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg shadow-sm"
                    >
                        অ্যাপ নিন
                    </a>
                </div>
            </div>
        </div>
    </header>
);

const Hero = () => (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm sm:text-base font-medium shadow-sm">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    অতি শীঘ্রই গুগল প্লে স্টোরে পাওয়া যাবে, আপাতত এখান থেকে ব্যবহার করুন
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mx-auto mb-6 w-24 h-24 sm:w-28 sm:h-28 text-emerald-500"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-5xl font-bold text-slate-900 mb-8"
            >
                Download Amar Aruail APP
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <a
                    href="#install"
                    className="inline-block px-10 py-4 bg-emerald-600 text-white text-lg sm:text-xl font-bold rounded-lg shadow-lg hover:bg-emerald-700 transition-all hover:scale-105 active:scale-95"
                >
                    Click to Download Free
                </a>
            </motion.div>
            
            <p className="mt-6 text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
                Amar Aruail is safe, not virus or malware, thanks for your trust.
            </p>
        </div>
    </section>
);

const VideoSection = () => (
    <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">অ্যাপটির ব্যবহার দেখুন</h2>
                <p className="text-slate-500">আমাদের অ্যাপটি ব্যবহার করা কতটা সহজ তা ভিডিওতে দেখুন</p>
            </div>
            
            <div className="flex justify-center">
                <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden ring-4 ring-slate-100">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-xl z-20"></div>
                    
                    {/* Video Container */}
                    <div className="w-full h-full bg-slate-800 relative">
                        <video 
                            className="w-full h-full object-cover"
                            controls
                            muted
                            playsInline
                            poster="/01.jpeg"
                        >
                            <source src="/app-demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        
                        {/* Placeholder overlay if video is missing */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                           {/* This will be behind the video if it loads, or visible if poster shows */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const InstallationGuide = () => {
    return (
        <section id="install" className="py-16 sm:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">কীভাবে ইনস্টল করবেন?</h2>
                    <p className="text-slate-600">প্লে স্টোর ছাড়া গুগল ক্রোম থেকে অ্যাপটি ইনস্টল করার নিয়ম</p>
                </div>

                <div className="space-y-20">
                    {/* Step 1 */}
                    <div className="space-y-8">
                        <div className="text-slate-700 text-lg font-medium text-center sm:text-left">
                            <span className="font-bold text-emerald-600 text-2xl">ধাপ ১:</span> <br/>
                            প্রথমে <span className="font-bold"><a href="https://amar-aruail.vercel.app/" target="_blank">amar-aruail.vercel.app</a></span> লিংকে যান।
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-xs rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-800">
                                <img 
                                    src="/01.jpeg" 
                                    alt="Step 1" 
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="space-y-8">
                        <div className="text-slate-700 text-lg font-medium text-center sm:text-left">
                            <span className="font-bold text-emerald-600 text-2xl">ধাপ ২:</span> <br/>
                            ব্রাউজারের উপরের ডান কোণায় <span className="font-bold">তিনটি ডট (...)</span> মেনুতে ক্লিক করুন। 
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                            <div className="relative w-full max-w-xs rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-800">
                                <img 
                                    src="/02.jpeg" 
                                    alt="Menu" 
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="space-y-8">
                        <div className="text-slate-700 text-lg font-medium text-center sm:text-left">
                            <span className="font-bold text-emerald-600 text-2xl">ধাপ ৩:</span> <br/>তারপর মেনু থেকে <span className="font-bold">"Add to Home screen"</span> অথবা <span className="font-bold">"Install app"</span> অপশনটি খুঁজে বের করুন এবং ক্লিক করুন।
                            এখন একটি পপআপ আসবে। সেখানে <span className="font-bold text-emerald-600">"Install"</span> বাটনে ক্লিক করুন। ব্যস! অ্যাপটি আপনার ফোনে ইনস্টল হয়ে যাবে।
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                            <div className="relative w-full max-w-xs rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-800">
                                <img 
                                    src="/03.jpeg" 
                                    alt="Install Prompt" 
                                    className="w-full h-auto"
                                />
                            </div>
                             <div className="relative w-full max-w-xs rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-800">
                                <img 
                                    src="/04.jpeg" 
                                    alt="Installed App" 
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                       {/* Step 2 */}
                    <div className="space-y-8">
                        <div className="text-slate-700 text-lg font-medium text-center sm:text-left">
                            <span className="font-bold text-emerald-600 text-2xl">ধাপ ৪:</span> <br/>
                            এবার আপনার ফোনের হোম স্ক্রিনে অ্যাপটি যুক্ত হয়ে গেছে দেখুন এভাবে। 
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                            <div className="relative w-full max-w-xs rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-800">
                                <img 
                                    src="/05.jpeg" 
                                    alt="Menu" 
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const ProfileCard = ({ name, role, bio, image, email, badge, facebook }: any) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all group h-full flex flex-col"
    >
        <div className="flex flex-col items-center p-6 sm:p-8 flex-1">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-[1.5rem] overflow-hidden border-4 border-emerald-50 flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform mb-6">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="text-center flex-1 w-full">
                <div className="flex flex-col items-center gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{name}</h3>
                    {badge && (
                        <span className="inline-flex px-2.5 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full border border-emerald-100 uppercase">
                            {badge}
                        </span>
                    )}
                </div>

                <div className="flex items-center justify-center gap-2 text-emerald-600 font-bold text-sm mb-4">
                    <Briefcase size={16} />
                    {role}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic line-clamp-4">
                    "{bio}"
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex flex-col items-center gap-3">
                    {email && (
                        <a href={`mailto:${email}`} className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-all text-xs font-semibold">
                            <Mail size={16} />
                            {email}
                        </a>
                    )}
                    {facebook && (
                        <a href={facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-all text-sm bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 w-full justify-center">
                            <Facebook size={18} />
                            Follow
                        </a>
                    )}
                </div>
            </div>
        </div>
    </motion.div>
);

const Footer = () => (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-slate-900 mb-4">
                        <img 
                            src="/logo.png" 
                            alt="অমর অরুয়াইল" 
                            className="h-10 w-auto object-contain" 
                        />
                    </div>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto md:mx-0 font-medium">
                        আমাদের প্রাণের গ্রাম অরুয়াইলের প্রথম ডিজিটাল ঠিকানা। সবার জন্য উন্মুক্ত ও নিরাপদ।
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    <a
                        href="#"
                        className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm hover:scale-110"
                    >
                        <Facebook size={22} />
                    </a>
                    <a
                        href="#"
                        className="w-12 h-12 bg-white rounded-2xl border border-slate-200 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm hover:scale-110"
                    >
                        <Twitter size={22} />
                    </a>
                    <a
                        href="#"
                        className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 hover:scale-110"
                    >
                        <MessageCircle size={22} fill="currentColor" />
                    </a>
                </div>
            </div>

            <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] font-bold text-slate-400 tracking-wide uppercase">
                <p>© {new Date().getFullYear()} অমর অরুয়াইল</p>
                <p className="flex items-center gap-1.5">
                    তৈরি করেছে অরুয়াইলেরই এক সন্তান <Heart size={14} className="text-rose-400 fill-rose-400" />
                </p>
            </div>
        </div>
    </footer>
);

// --- Main Page ---

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="flex-grow">
                <Hero />
                <VideoSection />
                <InstallationGuide />

                <section id="about" className="py-20 sm:py-28 px-4">
                    <div className="max-w-6xl mx-auto space-y-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">আমাদের দক্ষ টিম</h2>
                            <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
                            <p className="text-slate-500">অরুয়াইল গ্রামের ডিজিটাল সেবায় আমরা সবসময় আপনার পাশে আছি।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            <ProfileCard
                                name="সফটওয়্যার ডেভেলপার"
                                role="ডেভেলপার ও ফাউন্ডার"
                                bio="আমি অরুয়াইলেরই একজন সন্তান। গ্রামের সাধারণ মানুষদের জীবনকে প্রযুক্তির মাধ্যমে আরও সহজ করতেই আমার এই ক্ষুদ্র প্রয়াস।"
                                image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=300&q=80"
                                email="dev@amararuail.com"
                                facebook="https://facebook.com"
                                badge="Founder"
                            />

                            <ProfileCard
                                name="তথ্য কর্মকর্তা"
                                role="তথ্য ও যোগাযোগ কর্মকর্তা"
                                bio="সঠিক সময়ে সঠিক তথ্য আপনার কাছে পৌঁছে দেওয়া আমার প্রধান লক্ষ্য। অ্যাপের সকল খবরের সত্যতা আমরা নিশ্চিত করি।"
                                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                                email="info@amararuail.com"
                                facebook="https://facebook.com"
                                badge="Info Officer"
                            />
                            
                            <ProfileCard
                                name="বার্তা সম্পাদক"
                                role="বার্তা সম্পাদক"
                                bio="অরুয়াইলের প্রতিটি খবর সবার আগে এবং সঠিক ভাবে প্রচার করাই আমার দায়িত্ব। সত্য সংবাদের সাথে থাকার জন্য ধন্যবাদ।"
                                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
                                email="editor@amararuail.com"
                                facebook="https://facebook.com"
                                badge="News Editor"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
