import React from 'react';
import styles from './ResourceList.module.css';
import { Section } from '@/components/ui/Section';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const resources = [
    {
        title: "2025 ICD-10 Coding Updates: What You Need to Know",
        excerpt: "A comprehensive guide to the latest ICD-10 coding changes effective October 1, 2024. Ensure your practice is prepared.",
        category: "Guide",
        date: "October 15, 2024",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Reducing Claim Denials: Top 5 Strategies",
        excerpt: "Learn the most effective strategies to minimize claim denials and improve your first-pass acceptance rate.",
        category: "Whitepaper",
        date: "September 28, 2024",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "The Impact of AI on Revenue Cycle Management",
        excerpt: "Explore how Artificial Intelligence and Machine Learning are revolutionizing healthcare RCM and billing processes.",
        category: "Article",
        date: "September 10, 2024",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Outsourcing vs. In-House RCM: A Cost-Benefit Analysis",
        excerpt: "A detailed comparison of the costs and benefits of outsourcing your revenue cycle management versus keeping it in-house.",
        category: "Case Study",
        date: "August 22, 2024",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "HIPAA Compliance in 2025: Best Practices",
        excerpt: "Stay compliant with the latest HIPAA regulations and protect your patient data with these essential best practices.",
        category: "Guide",
        date: "August 05, 2024",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Improving Patient Collections in a High-Deductible Era",
        excerpt: "Tips and techniques for improving patient collections and financial counseling in an era of high-deductible health plans.",
        category: "Article",
        date: "July 18, 2024",
        image: "https://images.unsplash.com/photo-1579684385136-137af7549022?auto=format&fit=crop&q=80&w=1000"
    }
];

export const ResourceList = () => {
    return (
        <Section>
            <div className={styles.grid}>
                {resources.map((res, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={res.image} alt={res.title} className={styles.image} />
                            <span className={styles.category}>{res.category}</span>
                        </div>
                        <div className={styles.content}>
                            <span className={styles.date}>{res.date}</span>
                            <h3 className={styles.title}>{res.title}</h3>
                            <p className={styles.excerpt}>{res.excerpt}</p>
                            <Link href="#" className={styles.link}>
                                Read More <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
