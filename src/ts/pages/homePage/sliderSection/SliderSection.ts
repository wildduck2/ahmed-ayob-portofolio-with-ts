import { ScrollTrigger, gsap } from 'gsap/all'

export const SliderAnimation = () => {
    gsap.registerPlugin( ScrollTrigger )

    // the slider animation trigger
    let tl = gsap.timeline( {
        scrollTrigger: {
            trigger: '.slider-section',
            start: '0% 80%',
            end: '0% -80%',
            scrub: 1,
        },
        ease: 'power1.out',
    } )

    const ctx = gsap.context( () => {

        if ( window.innerWidth > 1500 ) {
            // tl.to( '.sliderone', { x: '-31%', rotation: 0.01 } )
            // tl.to( '.slidertwo', { x: '-22%', rotation: 0.01 }, '<' )
        } else {
            tl.to( '.sliderone', { x: '-17%', rotation: 0.01 } )
            tl.to( '.slidertwo', { x: '15%', rotation: 0.01 }, '<' )
        }
    } )
}
