export const HeaderSlideMenu = ( headerHamburgerBtn: HTMLDivElement ) => {
    const headerSlideMenu = document.querySelector<HTMLDivElement>( '.menu-slide' )

    headerHamburgerBtn.classList.toggle( 'active-hamburger' )
    headerSlideMenu?.classList.toggle( 'active' )
}