import React from 'react';
import styles from './IndustriesList.module.css';
import { Section } from '@/components/ui/Section';
import { Building2, Stethoscope, Activity, Users, HeartPulse, Briefcase } from 'lucide-react';

const industries = [
    {
        title: "Large Hospital Systems",
        description: "Comprehensive RCM for multi-facility systems. We handle complex payer mixes and high-volume claims with ease.",
        icon: <Building2 size={24} />,
        stat: "Serving 50+ Systems",
        image: "https://images.unsplash.com/photo-1587351021759-3e566b9af923?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Physician Groups",
        description: "Tailored solutions for multi-specialty practices. Focus on patient care while we maximize your reimbursements.",
        icon: <Users size={24} />,
        stat: "Partner to 400+ Groups",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Ambulatory Surgery Centers",
        description: "Specialized coding and billing for ASCs. We understand the nuances of surgical coding and facility fees.",
        icon: <Activity size={24} />,
        stat: "Supporting 150+ ASCs",
        image: "https://images.unsplash.com/photo-1516549655169-df83a092dd14?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Health Plans",
        description: "HEDIS gap closure, risk adjustment, and claims adjudication support for payers and health plans.",
        icon: <HeartPulse size={24} />,
        stat: "Work with 25+ Plans",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Urgent Care Centers",
        description: "High-volume processing for fast-paced urgent care environments. Quick turnaround on claims.",
        icon: <Stethoscope size={24} />,
        stat: "80+ Centers Managed",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "IPAs & MSOs",
        description: "Unified billing and compliance solutions for Independent Practice Associations and MSOs.",
        icon: <Briefcase size={24} />,
        stat: "200+ IPA Clients",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
    }
];

export const IndustriesList = () => {
    return (
        <Section>
            <div className={styles.grid}>
                {industries.map((ind, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={ind.image} alt={ind.title} className={styles.image} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.iconWrapper}>
                                {ind.icon}
                            </div>
                            <h3 className={styles.title}>{ind.title}</h3>
                            <p className={styles.description}>{ind.description}</p>
                            <div className={styles.stats}>{ind.stat}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};
