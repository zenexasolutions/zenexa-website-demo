import React from 'react';
import styles from './ContactInfo.module.css';
import { Section } from '@/components/ui/Section';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export const ContactInfo = () => {
    return (
        <Section>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}><Phone size={24} /></div>
                    <h3 className={styles.title}>Phone Support</h3>
                    <p className={styles.text}>24/7 Support for Global Clients</p>
                    <a href="tel:+18327357799" className={styles.link}>+1 832 735 7799</a>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}><Mail size={24} /></div>
                    <h3 className={styles.title}>Email Us</h3>
                    <p className={styles.text}>We'll respond within 24 hours</p>
                    <a href="mailto:info@zenexainfotech.com" className={styles.link}>info@zenexainfotech.com</a>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}><Globe size={24} /></div>
                    <h3 className={styles.title}>Global Offices</h3>
                    <div className={styles.officesList}>
                        <div className={styles.officeItem}>🇮🇳 India (Gujarat)</div>
                        <div className={styles.officeItem}>🇺🇸 USA (Houston)</div>
                        <div className={styles.officeItem}>🇨🇦 Canada (Waterloo)</div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
