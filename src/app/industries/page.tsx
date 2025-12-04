import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { IndustriesList } from '@/components/industries/IndustriesList';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Industries We Serve | Zenexa',
    description: 'Specialized healthcare BPO solutions for Hospitals, Physician Groups, Health Plans, and more.',
};

export default function IndustriesPage() {
    return (
        <>
            <PageHero
                headline="Industries We Serve"
                subheadline="Tailored solutions for every sector of the healthcare ecosystem."
                tagline="Our Expertise"
            />
            <IndustriesList />
            <CTA />
        </>
    );
}
