import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { AboutContent } from '@/components/about/AboutContent';
import { Stats } from '@/components/home/Stats';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'About Us | Zenexa',
    description: 'Learn about Zenexa, a leading healthcare BPO provider.',
};

export default function AboutPage() {
    return (
        <>
            <PageHero
                headline="About Zenexa"
                subheadline="Your trusted partner in healthcare revenue cycle management excellence."
                tagline="Our Story"
            />
            <AboutContent />
            <Stats />
            <CTA />
        </>
    );
}
