import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
export const HeroAnimation = () => {
    gsap.registerPlugin( ScrollTrigger )

    const ctx = gsap.context( () => {

        const tl = gsap.timeline( {
            scrollTrigger: {
                trigger: '.about-section',
                start: `top 100%`,
                end: `top 20%`,
                scrub: 1,

            },
            clearProps: true,

        } )

        tl.to(
            '.hero-img',
            {
                height: '90vh',
                rotation: 0.01,
            }
        )
        tl.to(
            '.home-arrow',
            {
                y: '-200',
                rotation: 0.01,
            },
            '<'
        )
        tl.fromTo(
            '.h-anime',
            { y: `0` },
            {
                y: '-100',
                rotation: 0.01,
                stagger: 0.1,
            },
            '<'
        )
    } )

    return () => ctx.revert()
}