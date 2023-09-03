import { gsap } from 'gsap'

export const AppendingFiltedShape = ( projectsContainer: HTMLDivElement, filterShape: string ) => {


    const tl1 = gsap.timeline()
    const tl2 = gsap.timeline()

    projectsContainer.classList.remove( 'grid' )
    projectsContainer.classList.remove( 'menu' )
    if ( filterShape === 'grid' ) {
        projectsContainer.classList.add( filterShape )

        tl2.from(
            `.propject`,
            0.5,
            {
                scale: 0.2,
                opacity: 0,
                y: `-50%`,
                stagger: { amount: 0.4 },
                ease: 'power2.out',
                clearProps: true
            },
            '<'
        )
    } else if ( filterShape === 'menu' ) {
        projectsContainer.classList.add( 'menu' )



        tl1.from(
            `.propject`,
            0.5,
            {
                scale: 0.2,
                opacity: 0,
                y: `-50%`,
                stagger: { amount: 0.4 },
                ease: 'power2.out',
                clearProps: true
            },
            '<'
        )
        tl1.from(
            '.seperator.li-sep',
            0.5,
            {
                transformOrigin: 'right',
                y: `-50%`,

                opacity: 0,
                width: 0,
                stagger: { amount: 0.5 },
                ease: 'power2.out',
                clearProps: true
            },
            '<'
        )
    }
}