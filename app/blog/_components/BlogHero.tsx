'use client';

interface BlogHeroProps {
    className?: string;
}

export default function BlogHero({ className }: BlogHeroProps) {
    return (
        <section className={`relative overflow-hidden min-h-screen flex flex-col justify-center mb-10 ${className ?? ''}`}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-purple-600/25 to-pink-500/20 blur-[140px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pt-28 pb-16 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[12px] tracking-[0.3em] uppercase">
                        <span className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />
                        Learn · Explore · Aspire · Discover
                    </div>

                    <h1 className="text-[clamp(3rem,10vw,7rem)] font-black leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500">
                        LEAD UTP
                    </h1>

                    <div className="relative inline-block">
                        <span className="absolute inset-0 w-full h-full -skew-x-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg" />
                        <span className="relative inline-block px-6 py-2 -skew-x-6  rounded-lg">
                            <span className="inline-block skew-x-6 text-white font-extrabold text-3xl tracking-wide uppercase">
                                Blog
                            </span>
                        </span>
                    </div>

                    <p className="text-sm md:text-base text-white/50 max-w-xl leading-relaxed">
                        Una bitácora abierta de la comunidad LEAD UTP. Ensayos, revisiones y conversaciones
                        de quienes están aprendiendo a liderar mientras estudian ingeniería.
                    </p>

                    <div className="flex items-center gap-4 flex-wrap">
                        <a
                            href="#articles"
                            className="font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2"
                        >
                            Leer Artículos
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className="text-[19px] font-mono text-white/40 uppercase tracking-widest">La comunidad en números</span>
                        <span className="flex-1 h-px bg-white/10" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { value: '1', label: 'Comunidad' },
                            { value: '6', label: 'Áreas de Impacto' },
                            { value: '∞', label: 'Ideas por compartir' },
                            { value: '∞', label: 'Proyectos por realizar' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="border border-white/10 p-5 bg-white/[0.02]"
                            >
                                <div className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-purple-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-[13px] font-mono text-white/35 uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
