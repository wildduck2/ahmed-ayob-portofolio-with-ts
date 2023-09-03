import { ScrollTrigger, gsap } from 'gsap/all';
import SplitType from 'split-type';

export const FooterAnimation = () => {
    gsap.registerPlugin( ScrollTrigger );


    const titleText = new SplitType( '.footer-title', {
        types: 'words, chars',
    } );

    const char = document.querySelectorAll( '.footer-title .char' );
    char.forEach( ( char ) => {
        char.addEventListener( 'mouseenter', () => {
            char.classList.add( 'animate__rubberBand' );
        } );
    } );
    char.forEach( ( char ) => {
        char.addEventListener( 'mouseleave', () => {
            setTimeout( () => {
                char.classList.remove( 'animate__rubberBand' );
            }, 700 );
        } );
    } );


    // the rounded shape animation trigger
    let tl = gsap.timeline( {
        scrollTrigger: {
            trigger: '.footer-seciton',
            start: '0% 100%',
            end: '50% 80%',
            scrub: 1,
        },
    } );
    tl.to(
        '.footer-shape',
        {
            height: 0,
            rotate: '0.001deg',
            ease: 'none',
        },
        0
    );

    // hamburger border animation trigger
    let tl2 = gsap.timeline( {
        scrollTrigger: {
            trigger: '.footer-seciton',
            start: 'top 50%',
        },
    } );

    tl2.to( '.hamburger-btn', { border: `1px solid transparent `, } );

    tl2.to( '.hamburger-btn', { border: `1px solid #625f5f `, } );

    tl2.to( '.menu-slide ', { border: `1px solid #625f5f `, }, '<' );

    tl2.to( '.rounded-div', { border: `1px solid #625f5f `, }, '<'
    );

    // footer elements animation fade in trigger
    let tl3 = gsap.timeline( {
        scrollTrigger: {
            trigger: '.footer-seciton',
            start: 'top 55%',
            end: '30% 80%',
        },
    } );
    tl3.fromTo(
        '.footer-title',
        1,
        {
            y: '100%',
        },
        {
            y: `-5px`,
            ease: 'elastic.out(1, 0.75)',
            rotate: '0.001deg',
        }
    );
    tl3.fromTo(
        '.footer-img',
        1,
        {
            scale: 0.5,
            opacity: 0,
        },
        {
            scale: 1,
            opacity: 1,
            ease: 'bounce.inout',
            rotate: '0.001deg',
        },
        '<'
    );
    tl3.fromTo(
        '.line',
        1,
        {
            width: 0,
        },
        {
            width: `100%`,
            rotate: '0.001deg',
        },
        '<.1'
    );
    tl3.fromTo(
        '.footer-btn',
        1,
        {
            x: `-65px`,
            scale: 0.8,
            opacity: 0,
        },

        {
            x: 0,
            scale: 1,
            opacity: 1,
            rotate: '0.001deg',
        },
        '<.3'
    );
    tl3.fromTo(
        '.footer-arrow',
        1,
        {
            x: 60,
            y: -60,
            opacity: 0,
        },
        { x: 0, y: 0, opacity: 1, rotation: 0.01 },
        '<.2'
    );
    tl3.fromTo(
        '.contact-btn',
        1,
        {
            y: `-100%`,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            rotate: '0.001deg',
        },
        '<'
    );
    tl3.fromTo(
        '.footer-col',
        1,
        {
            y: `-100%`,
            opacity: 0,
            stagger: 0.1,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            rotate: '0.001deg',
        },
        '<'
    );
}