"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Button } from '@/components/ui/Button';
import { Menu, Search, Calendar } from 'lucide-react';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Zenexa
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navLinks}>
                        <li><Link href="/services" className={styles.link}>Services</Link></li>
                        <li><Link href="/industries" className={styles.link}>Industries</Link></li>
                        <li><Link href="/why-zenexa" className={styles.link}>Why Zenexa</Link></li>
                        <li><Link href="/resources" className={styles.link}>Resources</Link></li>
                        <li><Link href="/about" className={styles.link}>About</Link></li>
                        <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <button aria-label="Search" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary-teal)' }}>
                        <Search size={20} />
                    </button>
                    <Button size="sm" leftIcon={<Calendar size={16} />}>
                        Schedule Demo
                    </Button>
                </div>

                <button className={styles.mobileMenuBtn} aria-label="Menu">
                    <Menu size={24} />
                </button>
            </div>
        </header>
    );
};
