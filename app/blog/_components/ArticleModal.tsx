'use client';

import { useEffect } from 'react';
import { useModal } from '../_context/ModalContext';

export default function ArticleModal() {
    const { activeArticle, isOpen, closeArticle } = useModal();

    useEffect(() => {
        function handleKeydown(e: KeyboardEvent) {
            if (e.key === 'Escape') closeArticle();
        }
        document.addEventListener('keydown', handleKeydown);
        return () => document.removeEventListener('keydown', handleKeydown);
    }, [closeArticle]);

    if (!isOpen || !activeArticle) return null;

    function copyLink() {
        navigator.clipboard?.writeText(window.location.href);
    }

    const contentBlocks: string[] = activeArticle.content
        ? activeArticle.content.split('\n\n')
        : [];

    return (
        <div
            id="article-modal"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={(e) => {
                if (e.target === e.currentTarget) closeArticle();
            }}
        >
            <div className="min-h-screen flex items-start justify-center p-4 md:p-8">
                <div className="bg-neutral-900 max-w-3xl w-full relative my-8 border border-white/10 shadow-2xl rounded-lg">

                    <button
                        onClick={closeArticle}
                        className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/60 backdrop-blur rounded-full hover:bg-pink-500 hover:text-white transition border border-white/10"
                    >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </button>

                    <div className="aspect-[16/9] overflow-hidden rounded-t-lg">

                        <img
                            src={activeArticle.image}
                            className="w-full h-full object-cover"
                            alt={activeArticle.title}
                        />
                    </div>

                    <div className="p-6 md:p-12">
                        <div className="inline-block px-3 py-1 bg-pink-500 text-white font-mono text-[10px] tracking-widest uppercase mb-6 rounded">
                            {activeArticle.categoryLabel}
                        </div>

                        <h1 className="font-black text-3xl md:text-5xl tracking-tight leading-[1.05] mb-6 text-white">
                            {activeArticle.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/10">
                            <img
                                src={activeArticle.portrait}
                                className="w-12 h-12 rounded-full object-cover"
                                alt={activeArticle.author}
                            />
                            <div>
                                <div className="text-sm font-medium text-white">{activeArticle.author}</div>
                                <div className="flex items-center gap-3 text-xs text-white/40 font-mono mt-1">
                                    <span>{activeArticle.date}</span>
                                    <span className="block w-px h-3 bg-white/20"></span>
                                    <span>{activeArticle.readTime} de lectura</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-white/75">
                            {contentBlocks.map((block: string, i: number) => {
                                const trimmed = block.trim();
                                if (!trimmed) return null;
                                if (trimmed.startsWith('## ')) {
                                    return (
                                        <h2
                                            key={i}
                                            className="font-black text-2xl md:text-3xl mt-12 mb-5 tracking-tight text-white"
                                        >
                                            {trimmed.substring(3)}
                                        </h2>
                                    );
                                }
                                return (
                                    <p
                                        key={i}
                                        className="text-white/70 text-base md:text-lg leading-relaxed mb-5 whitespace-pre-line"
                                    >
                                        {trimmed}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-4">
                                Comparte
                            </div>
                            <div className="flex items-center gap-3 flex-wrap">
                                <button
                                    onClick={copyLink}
                                    className="px-4 py-2 border border-white/10 hover:border-pink-500 hover:text-pink-400 transition font-mono text-xs uppercase tracking-widest text-white/60 rounded"
                                >
                                    Copiar enlace
                                </button>
                                <a className="px-4 py-2 border border-white/10 hover:border-pink-500 hover:text-pink-400 transition font-mono text-xs uppercase tracking-widest text-white/60 cursor-pointer rounded">
                                    Twitter
                                </a>
                                <a className="px-4 py-2 border border-white/10 hover:border-pink-500 hover:text-pink-400 transition font-mono text-xs uppercase tracking-widest text-white/60 cursor-pointer rounded">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

