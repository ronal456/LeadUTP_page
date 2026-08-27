import Image from "next/image"
interface BenefitCardProps {
    icon: string
    title: string
    description: string
    image?: string
    span?: "full" | "half"
}
export const BenefitCard = ({ icon, title, description, image, span = 'half' }:
    BenefitCardProps) => (
    <div className={`text-3xl rounded-xl border border-slate-800 bg-slate-900/60 p-6 ${span === 'full' ? 'md:col-span-2' : ''} ${image ? 'flex flex-col md:flex-row items-center gap-6' : ''}`}
    >
        <div className={image ? 'flex-1' : ''}>
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Image src={icon} alt="" width={40} height={40} />
            </div>
            <h3 className="text-white font-semibold text-xl mb-1">{title}</h3>
            <p className="text-slate-400 text-lg leading-relaxed">{description}</p>
        </div>
        {image && (
            <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden ">
                <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
        )}
    </div>
)