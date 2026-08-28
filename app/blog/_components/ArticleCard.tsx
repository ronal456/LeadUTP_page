'use client';

import { forwardRef } from 'react';
import { Articles } from '../_context/types';
import { useModal } from '../_context/ModalContext';

interface ArticleCardProps {
    article: Articles;
    visible: boolean;
    style?: React.CSSProperties;
}

const ArticleCard = forwardRef<HTMLElement, ArticleCardProps>(({ article, visible, style }, ref) => {
    const { openArticle } = useModal();

    return (
        <article
            ref={ref}
            className="article-card cursor-pointer group"
            style={{ display: visible ? '' : 'none', ...style }}
            data-category={article.category}
            onClick={() => openArticle(article.id)}
        >
            <div className="article-image-wrap relative aspect-[4/3] mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={article.image}
                    className="article-image w-full h-full object-cover"
                    alt=""
                    loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-ink/80 backdrop-blur text-[10px] font-mono tracking-widest uppercase text-pink-lead">
                    {article.categoryLabel}
                </div>
            </div>
            <div className="flex items-center gap-3 mb-3 text-[10px] font-mono text-white/40 uppercase tracking-widest">
                <span>{article.date}</span>
                <span className="block w-px h-3 bg-white/20"></span>
                <span>{article.readTime} de lectura</span>
            </div>
            <h3 className="font-display font-black text-xl leading-tight mb-3 group-hover:text-pink-lead transition">
                {article.title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
            <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={article.portrait} className="w-8 h-8 rounded-full object-cover" alt="" loading="lazy" />
                <div>
                    <div className="text-xs text-white/80">{article.author}</div>
                    <div className="text-[10px] text-white/30 font-mono">{article.authorRole}</div>
                </div>
            </div>
        </article>
    );
});

ArticleCard.displayName = 'ArticleCard';

export default ArticleCard;
