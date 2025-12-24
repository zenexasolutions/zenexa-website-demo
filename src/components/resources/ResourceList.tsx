'use client';

import React from 'react';
import styles from './ResourceList.module.css';
import { Section } from '@/components/ui/Section';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { resources, getCategoryColor, getCategoryIcon } from '@/data/resourcesData';

export const ResourceList = () => {
    const [activeCategory, setActiveCategory] = React.useState<string>('All');

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(resources.map(r => r.category)))];

    const filteredResources = activeCategory === 'All'
        ? resources
        : resources.filter(r => r.category === activeCategory);

    return (
        <Section className={styles.section}>
            {/* Background Decorations */}
            <div className={styles.backgroundGlow} />
            <div className={styles.backgroundGlow2} />

            {/* Filter Controls */}
            <div className={styles.filterContainer}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.filterButton} ${activeCategory === cat ? styles.filterButtonActive : ''
                            }`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Resources Grid */}
            <div className={styles.grid}>
                {filteredResources.map((res, index) => {
                    const Icon = getCategoryIcon(res.category) as any; // Type assertion for Lucide icon
                    const color = getCategoryColor(res.category);

                    return (
                        <Link
                            key={index}
                            href={`/resources/${res.slug}`}
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <div className={styles.imagePlaceholder}>
                                    <div
                                        className={styles.placeholderIcon}
                                        style={{ color: color }}
                                    >
                                        <Icon size={28} />
                                    </div>
                                </div>
                                <div
                                    className={styles.badge}
                                    style={{ color: color, borderColor: color }}
                                >
                                    <Icon size={12} />
                                    {res.category}
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.date}>
                                    {res.date} • {res.readingTime}
                                </div>
                                <h3 className={styles.title}>{res.title}</h3>
                                <p className={styles.excerpt}>{res.excerpt}</p>

                                <div className={styles.footer}>
                                    <span className={styles.author}>{res.author}</span>
                                    <span className={styles.readMore}>
                                        Read Article <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </Section>
    );
};
