import Link from 'next/link';
import React from 'react';
import { FaBookOpen, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {

    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'All Rooms', path: '/rooms' },
        { label: 'Add a Room', path: '/add-room' },
        { label: 'My Bookings', path: '/my-bookings' },
        { label: 'About Us', path: '/' },
    ];

    const socialLinks = [
        { icon: <FaFacebook className="text-base" />, label: 'Facebook', href: '#' },
        { icon: <FaXTwitter className="text-base" />, label: 'X', href: '#' },
        { icon: <FaLinkedin className="text-base" />, label: 'LinkedIn', href: '#' },
        { icon: <FaInstagram className="text-base" />, label: 'Instagram', href: '#' },
    ];

    const contactInfo = [
        { icon: <MdEmail />, text: 'hello@studynook.io' },
        { icon: <MdPhone />, text: '+1 (800) 123-4567' },
        { icon: <MdLocationOn />, text: 'Dhaka, Bangladesh' },
    ];

    return (
        <footer className="bg-[#0F172A] border-t border-slate-800 relative">
        
            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-amber-500 to-transparent opacity-40" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
          
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

                
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
                            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                <FaBookOpen className="text-amber-500 text-base" />
                            </div>
                            <span className="text-white text-xl font-bold tracking-tight">
                                StudyNook<span className="text-amber-500">.</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
                            Your go-to platform for booking quiet, private study rooms in libraries. Focus better, book smarter.
                        </p>
                        <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-500/20">
                             500+ Rooms Listed
                        </span>
                    </div>

                    <div>
                        <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
                            <span className="w-3 h-0.5 bg-amber-500 rounded-full" />
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.path} className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                
                    <div>
                        <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
                            <span className="w-3 h-0.5 bg-amber-500 rounded-full" />
                            Contact Us
                        </h4>
                        <div className="flex flex-col gap-4">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 text-sm shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm text-slate-400">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
                            <span className="w-3 h-1 bg-amber-500 rounded-full" />
                            Follow Us
                        </h4>
                        <div className="grid grid-cols-2 gap-2.5 mb-6">
                            {socialLinks.map((s, index) => (
                                <a
                                    key={index}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-400 hover:border-amber-400/50 hover:text-amber-400 hover:bg-amber-400/5 transition-all duration-200"
                                >
                                    {s.icon}
                                    <span className="text-xs font-medium">{s.label}</span>
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-slate-500">
                            Stay updated with new rooms and booking tips.
                        </p>
                    </div>

                </div>

                <div className="border-t border-slate-800 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} <span className="text-slate-400 font-medium">StudyNook</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-xs text-slate-500 hover:text-amber-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="text-slate-700">·</span>
                        <Link href="#" className="text-xs text-slate-500 hover:text-amber-400 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;