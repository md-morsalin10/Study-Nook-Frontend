import Link from 'next/link';
import React from 'react';
import { FaBookOpen } from 'react-icons/fa6';


const Footer = () => {
    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'All Rooms', path: '/rooms' },
        { label: 'Add a Room', path: '/add-room' },
        { label: 'My Bookings', path: '/my-bookings' },
        { label: 'About Us', path: '/' },
    ];

    const socialLinks = [
        { icon: 'ti-brand-facebook', label: 'Facebook', href: '#' },
        { icon: 'ti-brand-x', label: 'X', href: '#' },
        { icon: 'ti-brand-linkedin', label: 'LinkedIn', href: '#' },
        { icon: 'ti-brand-instagram', label: 'Instagram', href: '#' },
    ];

    const contactInfo = [
        { icon: 'ti-mail', text: 'hello@studynook.io' },
        { icon: 'ti-phone', text: '+1 (800) 123-4567' },
        { icon: 'ti-map-pin', text: 'Dhaka, Bangladesh' },
    ];

    return (
        <footer className="bg-[#0F172A] relative">
        
            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#F59E0B] to-transparent opacity-40" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
            
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

               
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href={'/'} className="inline-flex items-center gap-2.5 mb-5">
                            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                <i className="ti ti-book-2 text-[#F59E0B] text-lg" />
                                <FaBookOpen className='text-[#F59E0B]' />

                            </div>
                            <span className="text-white text-xl font-bold tracking-tight">
                                StudyNook<span className="text-[#F59E0B]">.</span>
                            </span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-57">
                            Your go-to platform for booking quiet, private study rooms in libraries. Focus better, book smarter.
                        </p>
                        <span className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-500/20">
                            <i className="ti ti-sparkles text-xs" />
                            500+ Rooms Listed
                        </span>
                    </div>

                
                    <div>
                        <h4 className="text-white text-[11px] font-semibold uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
                            <span className="w-4 h-[1.5px] bg-[#F59E0B] rounded-full inline-block" />
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link,index) => (
                                <li key={index}>
                                    <Link
                                        href={link.path}
                                        className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200"
                                    >
                                        <i className="ti ti-chevron-right text-xs text-amber-500 transition-all duration-200 -ml-4 opacity-0 group-hover:ml-0 group-hover:opacity-100" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

          
                    <div>
                        <h4 className="text-white text-[11px] font-semibold uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
                            <span className="w-4 h-[1.5px] bg-[#F59E0B] rounded-full inline-block" />
                            Contact Us
                        </h4>
                        <div className="flex flex-col gap-4">
                            {contactInfo.map((item) => (
                                <div key={item.text} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                        <i className={`ti ${item.icon} text-amber-400 text-sm`} />
                                    </div>
                                    <span className="text-sm text-slate-400 leading-relaxed pt-1">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

        
                    <div>
                        <h4 className="text-white text-[11px] font-semibold uppercase tracking-[0.12em] mb-5 flex items-center gap-2">
                            <span className="w-4 h-[1.5px] bg-[#F59E0B] rounded-full inline-block" />
                            Follow Us
                        </h4>
                        <div className="grid grid-cols-2 gap-2.5 mb-6">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-400 hover:border-amber-400/50 hover:text-amber-400 hover:bg-amber-400/5 transition-all duration-200 group"
                                >
                                    <i className={`ti ${s.icon} text-base group-hover:scale-110 transition-transform duration-200`} />
                                    <span className="text-xs font-medium">{s.label}</span>
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Stay updated with new rooms and booking tips.
                        </p>
                    </div>
                </div>

           
                <div className="border-t border-slate-800 mb-7" />

            
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                        © 2025 <span className="text-slate-400 font-medium">StudyNook</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-slate-600">
                        <Link href={'/#'} className="text-xs text-slate-500 hover:text-amber-400 transition-colors px-3 py-1 rounded-md hover:bg-amber-400/5">
                            Privacy Policy
                        </Link>
                        <span className="text-slate-700">·</span>
                        <Link href={'#'} className="text-xs text-slate-500 hover:text-amber-400 transition-colors px-3 py-1 rounded-md hover:bg-amber-400/5">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;