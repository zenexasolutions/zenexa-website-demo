import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { Button } from '@/components/ui/Button';
import { Zap } from 'lucide-react';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Ambient Background Effects */}
            <div className={`${styles.glow} ${styles.glow1}`} />
            <div className={`${styles.glow} ${styles.glow2}`} />
            <div className={`${styles.glow} ${styles.glow3}`} />

            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.content}>
                    <div className={styles.badgeContainer}>
                        <Zap size={16} color="#0d9488" />
                        <span className={styles.badgeText}>Powering the Pulse of Modern Healthcare</span>
                    </div>

                    <h1 className={styles.headline}>
                        Revenue Resilience for the <br />
                        <span className={styles.highlight}>Modern Healthcare Enterprise</span>
                    </h1>

                    <p className={styles.subheadline}>
                        Where Compliance Meets Performance. Zenexa transforms your healthcare revenue cycle
                        into a high-performance engine with AI-enhanced solutions backed by certified HIM professionals.
                    </p>

                    <div className={styles.actions}>
                        <Button size="lg">
                            Start Free Consultation
                        </Button>
                    </div>
                </div>

                {/* Right Visual - Healthcare Image */}
                <div className={styles.visual}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/hero-healthcare.png"
                            alt="Healthcare Revenue Cycle Management Team"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
