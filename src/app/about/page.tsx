import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { AboutContent } from '@/components/about/AboutContent';
import { Certifications } from '@/components/about/Certifications';
import { Stats } from '@/components/home/Stats';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'About Us | Zenexa',
    description: 'Built by Revenue Cycle Experts. Healthcare leaders trust Zenexa.',
};

export default function AboutPage() {
    return (
        <>
            <PageHero
                headline="Built by Revenue Cycle Experts"
                subheadline="Zenexa came from a simple idea: healthcare providers need a revenue cycle partner who cares about their patients' health as much as their own."
                tagline="The Heart of Care"
            />
            <AboutContent />
            <Certifications />
            <Stats />
            <CTA />
        </>
    );
}
