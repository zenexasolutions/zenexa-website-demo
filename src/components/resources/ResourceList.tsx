import React from 'react';
import styles from './ResourceList.module.css';
import { Section } from '@/components/ui/Section';
import { ArrowRight, BookOpen, FileText, Newspaper, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { resources, Resource, getCategoryColor } from '@/data/resourcesData';

const CategoryIcon = ({ category }: { category: Resource['category'] }) => {
    const props = { size: 14 };
    switch (category) {
        case 'Guide': return <BookOpen {...props} />;
        case 'Whitepaper': return <FileText {...props} />;
        case 'Article': return <Newspaper {...props} />;
        case 'Case Study': return <BarChart3 {...props} />;
    }
};

export const ResourceList = () => {
    return (
        <Section>
            <div className={styles.grid}>
                {resources.map((res, index) => (
                    <Link
                        key={index}
                        href={`/resources/${res.slug}`}
                        className={styles.card}
                    >
                        <div className={styles.imageWrapper}>
                            <div className={styles.imagePlaceholder}>
                                <div
                                    className={styles.placeholderIcon}
                                    style={{ color: getCategoryColor(res.category) }}
                                >
                                    <CategoryIcon category={res.category} />
                                </div>
                                <span className={styles.placeholderText}>{res.title}</span>
                            </div>
                            <span
                                className={styles.category}
                                style={{
                                    color: getCategoryColor(res.category),
                                    borderColor: getCategoryColor(res.category)
                                }}
                            >
                                <CategoryIcon category={res.category} />
                                {res.category}
                            </span>
                        </div>
                        <div className={styles.content}>
                            <span className={styles.date}>{res.date}</span>
                            <h3 className={styles.title}>{res.title}</h3>
                            <p className={styles.excerpt}>{res.excerpt}</p>
                            <span className={styles.link}>
                                Read More <ArrowRight size={16} />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
};
