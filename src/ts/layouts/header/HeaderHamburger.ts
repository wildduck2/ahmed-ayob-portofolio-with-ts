import { HeaderSlideMenu } from "./HeaderSlideMenu"

export const HeaderHamburger = () => {
    const headerHamburgerBtn = document.querySelector<HTMLDivElement>( '.hamburger-button-wrapper' )
    const blurLayout = document.querySelector<HTMLDivElement>( '.blur-shape' )
    const mobileMenu = document.querySelector<HTMLDivElement>( '.mobile-menu' )

    // Show hamburger on scroll 
    window.addEventListener( 'scroll', () => {
        window.scrollY > 80
            ? headerHamburgerBtn?.classList.add( 'show-hamburger-scroll' )
            : headerHamburgerBtn?.classList.remove( 'show-hamburger-scroll' )
    } )

    const showMenuHide = () => {
        HeaderSlideMenu( headerHamburgerBtn! )
        blurLayout?.classList.toggle( 'active-blur-shape' )

    }

    // Show menu on hamburger click 
    headerHamburgerBtn?.addEventListener( 'click', showMenuHide )
    mobileMenu?.addEventListener( 'click', showMenuHide )

    // Hide menu on click on blur layout
    blurLayout?.addEventListener( 'click', showMenuHide )

}
