import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ServicesGrid } from '@/components/home/ServicesGrid';

export const metadata = {
    title: 'Services | Zenexa',
    description: 'Comprehensive Healthcare BPO Solutions across the entire revenue cycle.',
};

export default function ServicesPage() {
    return (
        <>
            <PageHero
                headline="Comprehensive Healthcare BPO Solutions"
                subheadline="Expert services across the entire revenue cycle, from patient pre-registration to final payment posting"
                tagline="Trusted by 200+ US healthcare organizations"
            />
            <ServicesGrid hideHeader={true} />
        </>
    );
}
