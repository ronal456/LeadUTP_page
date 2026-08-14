import Image from "next/image";
import leadlogo from "@/public/images/leadutplogo.png";
import utplogo from "@/public/images/logoutp.png";

export default function AlliedHero() {
    return (
        <section className="min-h-screen text-center relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <div className="relative w-full h-full opacity-30">
                    <Image
                        src={leadlogo}
                        alt="Fondo LEAD"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            <div className="absolute left-6 bottom-10 z-10 flex items-center gap-4">
                <Image
                    src={utplogo} alt="Logo de UTP"
                    width={160} />
            </div>
            <div className="container mx-auto relative z-10 py-32">
                <div className="flex justify-center mb-6">
                    <div className="inline-flex py-2 px-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-sm tracking-wide shadow-lg shadow-pink-500/30">
                        Learn &nbsp;·&nbsp; Explore &nbsp;·&nbsp; Aspire &nbsp;·&nbsp; Discover
                    </div>
                </div>

                <h1 className="text-7xl md:text-8xl font-extrabold text-center mt-2 leading-tight
                    bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 bg-clip-text text-transparent
                    drop-shadow-[0_2px_24px_rgba(199,46,96,0.5)]">
                    LEAD

                </h1>

                <h2 className="text-3xl font-semibold text-center mt-4
                    text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
                    Construyendo el futuro, juntos.
                </h2>

                <p className="text-center mx-auto text-lg mt-6 max-w-2xl leading-relaxed
                    text-slate-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]
                    [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]">
                    Agradecemos profundamente a nuestros aliados estratégicos. Su apoyo
                    continuo nos permite empoderar a la próxima generación de líderes
                    tecnológicos e innovadores.
                </p>
            </div>
        </section>
    )
}