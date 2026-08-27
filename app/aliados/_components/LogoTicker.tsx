import Image from 'next/image'
import aeditip from '@/public/images/logo-aeditip.webp'
import coneii from '@/public/images/logo-coneii.webp'
import cvmatcher from '@/public/images/logo-cv-matcher.webp'
import facetoface from '@/public/images/logo-face-to-face.webp'
import ibmz from '@/public/images/logo-ibm-z.webp'
import levo from '@/public/images/logo-levo-learning.webp'


const logos = [
    { name: "Aeditip", image: aeditip },
    { name: "Coneii", image: coneii },
    { name: "Cvmatcher", image: cvmatcher },
    { name: "Facetoface", image: facetoface },
    { name: "Ibmz", image: ibmz },
    { name: "Levo", image: levo }
]

export default function LogoTicker() {
    return (
        <section className='mt-16 py-2 overflow-x-clip'>
            <div className='container mx-auto'>
                <h3 className='text-center text-white/50 text-xl'>Comunidades y empresas que confian en nosotros</h3>
                <div className='overflow-hidden mt-8 mask-image[linear-gradient(to_right,transparent,_black_10%,black_90%,transparent)]'>
                    <div className='flex gap-24 pr-24'>
                        {logos.map(logo => (
                            <Image
                                src={logo.image}
                                key={logo.name}
                                alt={logo.name}
                                width={150}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )

}