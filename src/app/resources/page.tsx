import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ResourceList } from '@/components/resources/ResourceList';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Resources & Blog | Zenexa',
    description: 'Insights, guides, and news about healthcare revenue cycle management.',
};

export default function ResourcesPage() {
    return (
        <>
            <PageHero
                headline="Resources & Insights"
                subheadline="Stay updated with the latest trends, guides, and news in healthcare RCM."
                tagline="Knowledge Hub"
            />
            <ResourceList />
            <CTA />
        </>
    );
}
