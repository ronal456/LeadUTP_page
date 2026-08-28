'use client';

import { articles, categories } from '../_context/articles';
import ArticleCard from './ArticleCard';

interface BlogGridProps {
    activeCategory: string;
    onCategoryChange: (cat: string) => void;
}

export default function BlogGrid({ activeCategory, onCategoryChange }: BlogGridProps) {
    const filtered =
        activeCategory === 'all' || activeCategory === 'Todos'
            ? articles.slice(1)
            : articles.filter((a) => a.category === activeCategory);

    return (
        <section id="articles" className="max-w-7xl mx-auto w-full px-6 lg:px-12 mb-20">
            <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    {activeCategory === 'all' || activeCategory === 'Todos'
                        ? 'Todos los artículos'
                        : articles.find((a) => a.category === activeCategory)?.categoryLabel ?? activeCategory}
                </span>
                <span className="flex-1 h-px bg-white/10" />
                <span className="text-[10px] font-mono text-white/25">{filtered.length} artículos</span>
            </div>

            <div className="flex flex-wrap gap-2.5 mb-10">
                {categories.map((cat) => {
                    const isActive = cat.slug === activeCategory;
                    return (
                        <button
                            key={cat.slug}
                            onClick={() => onCategoryChange(cat.slug)}
                            className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${isActive
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-[1.03]'
                                : 'bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10'
                                }`}
                        >
                            {cat.label}
                        </button>
                    );
                })}
            </div>

            {filtered.length === 0 ? (
                <div className="py-24 text-center text-white/30 font-mono text-sm">
                    No hay artículos en esta categoría aún.
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((article) => (
                        <ArticleCard
                            key={article.id}
                            article={article}
                            visible={true}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

