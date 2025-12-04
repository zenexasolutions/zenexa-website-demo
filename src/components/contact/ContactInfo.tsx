import React from 'react';
import styles from './ContactInfo.module.css';
import { Section } from '@/components/ui/Section';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactInfo = () => {
    return (
        <Section>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}><Phone size={24} /></div>
                    <h3 className={styles.title}>Phone Support</h3>
                    <p className={styles.text}>24/7 Support for US Clients</p>
                    <a href="tel:+15550123456" className={styles.link}>+1-555-0123-4567</a>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}><Mail size={24} /></div>
                    <h3 className={styles.title}>Email Us</h3>
                    <p className={styles.text}>We'll respond within 24 hours</p>
                    <a href="mailto:hello@zenexainfotech.com" className={styles.link}>hello@zenexainfotech.com</a>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}><MapPin size={24} /></div>
                    <h3 className={styles.title}>Global Headquarters</h3>
                    <p className={styles.text}>Bangalore, India</p>
                    <span className={styles.text}>Serving clients across USA</span>
                </div>
            </div>
        </Section>
    );
};
