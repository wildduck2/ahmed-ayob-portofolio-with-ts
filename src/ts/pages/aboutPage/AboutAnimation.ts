import { ScrollTrigger, gsap } from 'gsap/all'

export const AboutAnimation = () => {
    gsap.registerPlugin( ScrollTrigger )

    const tl = gsap.timeline( {
        scrollTrigger: {
            trigger: '.second-col-about',
            start: 'top 30%',
            end: '150% bottom',
            scrub: 1.14,
        },
    } )
    tl.to(
        '.animation-shape-img',
        3,
        {
            height: '8vh',
            ease: 'power1.out',
        },
        '<'
    )


    const tl2 = gsap.timeline( {
        scrollTrigger: {
            trigger: '.third-col-about',
            start: 'top center',
            end: 'bottom bottom',
        },
    } )

    tl2.from( `.third-col-about div *`, {
        y: `-100%`,
        opacity: 0,
        stagger: {
            amount: 0.1,
        },
        ease: 'power1.out',
    } )

    tl2.from(
        `.third-col-about img`,
        {
            y: `20%`,
            opacity: 0,
            ease: 'power1.out',
        },
        '<'
    )
}