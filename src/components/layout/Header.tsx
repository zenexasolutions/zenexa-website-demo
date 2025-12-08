"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { Button } from '@/components/ui/Button';
import { Menu, Calendar, X } from 'lucide-react';

const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/why-zenexa', label: 'Why Zenexa' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About' },
];

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            {/* Unified Floating Glassmorphic Pill */}
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/horizontal stack logo.svg"
                        alt="Zenexa Logo"
                        width={140}
                        height={36}
                        priority
                    />
                </Link>

                {/* Navigation - Centered in the pill */}
                <nav className={styles.nav}>
                    <ul className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.link}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right Actions */}
                <div className={styles.actions}>
                    <a
                        href="https://careers.zenexainfotech.com"
                        className={styles.contactLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Careers
                    </a>
                    <Link href="/contact">
                        <Button
                            size="sm"
                            className={styles.ctaButton}
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    aria-label="Menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <nav className={styles.mobileNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.mobileLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={styles.mobileLink}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <a
                        href="https://careers.zenexainfotech.com"
                        className={styles.mobileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Careers
                    </a>
                    <Link href="/contact" className={styles.mobileCta}>
                        <Button size="lg" className={styles.mobileCta}>
                            Get Started
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
};
