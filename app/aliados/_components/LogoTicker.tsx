"use client"

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
                <h3 className='text-2xl font-bold text-white/70 text-center mb-10'>
                    Comunidades y empresas que confian en nosotros
                </h3>

                <div
                    className='overflow-hidden mt-8'
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    }}
                >
                    <div
                        className='flex gap-24 pr-24'
                        style={{
                            width: 'max-content',
                            animationName: 'ticker-scroll',
                            animationDuration: '12s',
                            animationTimingFunction: 'linear',
                            animationIterationCount: 'infinite',
                            animationPlayState: 'running',
                        }}
                    >
                        {logos.map(logo => (
                            <Image
                                src={logo.image}
                                key={`a-${logo.name}`}
                                alt={logo.name}
                                width={150}
                                className='flex-shrink-0'
                            />
                        ))}
                        {logos.map(logo => (
                            <Image
                                src={logo.image}
                                key={`b-${logo.name}`}
                                alt={logo.name}
                                width={150}
                                className='flex-shrink-0'
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes ticker-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            ` }} />
        </section>
    )
}