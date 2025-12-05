import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1: Company Info */}
                    <div>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/vertical stack logo.svg"
                                alt="Zenexa Logo"
                                width={140}
                                height={100}
                                className={styles.logoImage}
                            />
                        </Link>
                        <p className={styles.tagline}>
                            Based in India | Serving USA Healthcare<br />
                            Maximizing revenue with expert BPO services.
                        </p>
                        <div className={styles.social}>
                            <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={24} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="Twitter"><Twitter size={24} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="Facebook"><Facebook size={24} /></a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className={styles.heading}>Services</h3>
                        <ul className={styles.list}>
                            <li className={styles.item}><Link href="/services/rcm" className={styles.link}>Revenue Cycle Mgmt</Link></li>
                            <li className={styles.item}><Link href="/services/coding" className={styles.link}>Medical Coding</Link></li>
                            <li className={styles.item}><Link href="/services/claims" className={styles.link}>Claims Processing</Link></li>
                            <li className={styles.item}><Link href="/services/hedis" className={styles.link}>HEDIS Services</Link></li>
                            <li className={styles.item}><Link href="/services/denial" className={styles.link}>Denial Management</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h3 className={styles.heading}>Company</h3>
                        <ul className={styles.list}>
                            <li className={styles.item}><Link href="/about" className={styles.link}>About Us</Link></li>
                            <li className={styles.item}><Link href="/why-zenexa" className={styles.link}>Why Choose Zenexa</Link></li>
                            <li className={styles.item}><a href="https://careers.zenexainfotech.com" className={styles.link} target="_blank" rel="noopener noreferrer">Careers</a></li>
                            <li className={styles.item}><Link href="/blog" className={styles.link}>Blog & Resources</Link></li>
                            <li className={styles.item}><Link href="/contact" className={styles.link}>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Compliance */}
                    <div>
                        <h3 className={styles.heading}>Trust & Security</h3>
                        <ul className={styles.list}>
                            <li className={styles.item}><Link href="/compliance" className={styles.link}>HIPAA Compliance</Link></li>
                            <li className={styles.item}><Link href="/security" className={styles.link}>Data Security</Link></li>
                            <li className={styles.item}><Link href="/privacy" className={styles.link}>Privacy Policy</Link></li>
                            <li className={styles.item}><Link href="/terms" className={styles.link}>Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Contact */}
                    <div>
                        <h3 className={styles.heading}>Get In Touch</h3>
                        <div className={styles.contactItem}>
                            <Phone size={18} />
                            <span>+1-555-0123-4567</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Mail size={18} />
                            <span>hello@zenexainfotech.com</span>
                        </div>
                        <div className={styles.contactItem}>
                            <MapPin size={18} />
                            <span>Bangalore, India</span>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <Button variant="secondary" size="sm">Schedule Demo</Button>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>© 2025 Zenexa. All rights reserved.</p>
                    <p>WCAG 2.1 AA Compliant</p>
                </div>
            </div>
        </footer>
    );
};
