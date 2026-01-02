import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { WhyZenexaContent } from '@/components/why-zenexa/WhyZenexaContent';

import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Why Choose Zenexa | Zenexa',
    description: 'Discover the Zenexa advantage: Quality, Security, and Scalability.',
};

export default function WhyZenexaPage() {
    return (
        <>
            <PageHero
                headline="The Zenexa Advantage"
                subheadline="Why leading healthcare organizations trust us with their revenue cycle."
                tagline="Why Choose Us"
            />
            <WhyZenexaContent />

            <CTA />
        </>
    );
}
