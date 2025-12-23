import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { IndustriesList } from '@/components/industries/IndustriesList';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Industries We Serve | Zenexa',
    description: 'Specialized healthcare BPO solutions for Hospital Systems, Physician Groups, ASCs, Health Plans, Urgent Care, and IPAs/MSOs.',
};

export default function IndustriesPage() {
    return (
        <>
            <PageHero
                headline="Industries We Work With"
                subheadline="Tailored solutions for every sector of the healthcare ecosystem. From Hospital Systems to IPAs, we understand your specific revenue cycle challenges."
                tagline="Our Expertise"
            />
            <IndustriesList />
            <CTA />
        </>
    );
}
