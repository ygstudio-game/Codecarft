import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Clock, Star, Trophy, Users, CheckSquare } from 'lucide-react';

const sections = [
    { id: 'hero', label: 'Home', icon: <Home size={20} /> },
    { id: 'arena-flow', label: 'Timeline', icon: <Clock size={20} /> },
    { id: 'features', label: 'Features', icon: <Star size={20} /> },
    { id: 'prizes', label: 'Prizes', icon: <Trophy size={20} /> },
    { id: 'registration', label: 'Register', icon: <Users size={20} /> },
];

export const PageNavigation = () => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* ANY DEVICE: Progress Bar Top (Optional, can enable if needed) */}

            {/* DESKTOP: Right Side Navigation */}
            <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-50">
                {sections.map(({ id, label }) => (
                    <div key={id} className="group relative flex items-center justify-end">
                        {/* Tooltip Label */}
                        <span className={`absolute right-8 md:right-10 px-3 py-1 bg-black/80 backdrop-blur border border-white/10 rounded-md text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap ${activeSection === id ? 'opacity-100' : ''}`}>
                            {label}
                        </span>

                        {/* Dot */}
                        <button
                            onClick={() => scrollToSection(id)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === id
                                    ? 'bg-blue-500 scale-125 shadow-[0_0_15px_rgba(59,130,246,0.6)]'
                                    : 'bg-white/20 hover:bg-white/50'
                                }`}
                        />
                    </div>
                ))}
            </div>

            {/* MOBILE: Bottom Navigation Bar */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
                <div className="glass-card bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex justify-between items-center shadow-2xl">
                    {sections.map(({ id, icon }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className={`relative p-2 transition-all duration-300 ${activeSection === id ? 'text-blue-400 -translate-y-1' : 'text-gray-400 hover:text-gray-200'
                                }`}
                        >
                            {icon}
                            {activeSection === id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};
