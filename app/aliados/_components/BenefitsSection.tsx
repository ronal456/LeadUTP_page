import { BenefitCard } from "./BenefitsCard";

const benefits = [
    {
        icon: '/images/icons/icons8-user-groups-48.png',
        title: 'Acceso a Talento Excepcional',
        description: 'Conecta directamente con estudiantes altamente capacitados, apasionados por la tecnología y formados bajo rigurosos estándares académicos.',
    },
    {
        icon: '/images/icons/icons8-megaphone-48.png',
        title: 'Branding',
        description: 'Posiciona tu marca frente a una comunidad activa y comprometida de futuros profesionales.',
    },
    {
        icon: '/images/icons/icons8-handshake-heart-48.png',
        title: 'Co-creación de Eventos',
        description: 'Diseña y ejecuta hackathons, talleres técnicos y seminarios en conjunto con nuestro equipo.',
        image: '/images/eventos2.png',
        span: 'full' as const,
    },
]

export const BenefitsSection = () => (
    <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white/70 text-center mb-10">
            Beneficios para Aliados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => <BenefitCard key={b.title} {...b} />)}
        </div>
    </section>
)