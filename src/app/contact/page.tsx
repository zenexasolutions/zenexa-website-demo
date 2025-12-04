import React from 'react';
import { PageHero } from '@/components/ui/PageHero';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { CTA } from '@/components/home/CTA';

export const metadata = {
    title: 'Contact Us | Zenexa',
    description: 'Get in touch with Zenexa for your healthcare BPO needs.',
};

export default function ContactPage() {
    return (
        <>
            <PageHero
                headline="Get in Touch"
                subheadline="Ready to transform your revenue cycle? We're here to help."
                tagline="Contact Us"
            />
            <ContactInfo />
            <CTA />
        </>
    );
}
