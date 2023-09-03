import { gsap } from 'gsap'

export const BackTop = () => {
    window.addEventListener( 'scroll', () => {
        window.scrollY > window.innerHeight / 2
            ? gsap.to( '.back-top', 0.2, {
                opacity: 1,
                scale: 1,
                ease: 'elastic.out',
            } )
            : gsap.to( '.back-top', 0.2, {
                opacity: 0,
                scale: 0.8,
                ease: 'expo.out',
            } )
    } )

    //  On click back top
    const backTopEl = document.querySelector<HTMLDivElement>( '.back-top' )
    backTopEl?.addEventListener( 'click', () => {
        scrollTo( 0, 0 )
    } )
}