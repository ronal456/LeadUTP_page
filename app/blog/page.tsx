'use client';

import { useState } from 'react';
import BlogHero from './_components/BlogHero';
import BlogFeatured from './_components/BlogFeatured';
import BlogGrid from './_components/BlogGrid';
import ArticleModal from './_components/ArticleModal';
import { ModalProvider } from './_context/ModalContext';

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('all');

    return (
        <ModalProvider>
            <div>
                <BlogHero />
                <BlogFeatured />
                <BlogGrid activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
            </div>
            <ArticleModal />
        </ModalProvider>
    );
}
