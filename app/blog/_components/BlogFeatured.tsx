'use client';

import { articles } from '../_context/articles';
import { useModal } from '../_context/ModalContext';

export default function BlogFeatured() {
    const { openArticle } = useModal();
    const featured = articles[0];

    if (!featured) return null;

    return (
        <section className="max-w-7xl mx-auto w-full px-6 lg:px-12 mb-16">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    Artículo destacado
                </span>
                <span className="flex-1 h-px bg-white/10" />
            </div>

            {/* Card */}
            <div
                onClick={() => openArticle(featured.id)}
                className="group grid lg:grid-cols-2 gap-0 border border-white/10 hover:border-pink-500/40 transition-colors cursor-pointer bg-white/[0.02] hover:bg-white/[0.04]"
            >
                {/* Image */}
                <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-pink-500/90 backdrop-blur text-[10px] font-mono tracking-widest uppercase text-white">
                        {featured.categoryLabel}
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                        {/* Meta */}
                        <div className="flex items-center gap-3 mb-6 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                            <span>{featured.date}</span>
                            <span className="block w-px h-3 bg-white/20" />
                            <span>{featured.readTime} de lectura</span>
                        </div>

                        <h2 className="font-black text-2xl md:text-4xl leading-tight tracking-tight mb-4 group-hover:text-pink-400 transition-colors">
                            {featured.title}
                        </h2>

                        <p className="text-sm md:text-base text-white/50 leading-relaxed line-clamp-3">
                            {featured.excerpt}
                        </p>
                    </div>

                    {/* Author + CTA */}
                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={featured.portrait}
                                alt={featured.author}
                                className="w-9 h-9 rounded-full object-cover"
                            />
                            <div>
                                <div className="text-sm text-white/80 font-medium">{featured.author}</div>
                                <div className="text-[10px] text-white/30 font-mono">{featured.authorRole}</div>
                            </div>
                        </div>
                        <span className="text-xs font-mono text-pink-400 uppercase tracking-widest group-hover:underline">
                            Leer artículo →
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}


