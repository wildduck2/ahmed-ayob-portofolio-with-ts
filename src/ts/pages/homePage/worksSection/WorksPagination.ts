export const WorksPagination = () => {
    const card = document.querySelector( '.card' ) as HTMLDivElement
    const cardWidth = card.clientWidth
    const corsouel = document.querySelector( '.card-slider' ) as HTMLDivElement
    const navigation = document.querySelectorAll( '.btn-nav' );

    let dragging: boolean = false;
    let prevPageX: number = 0
    let prevScrollLeft: number = 0

    corsouel.addEventListener( 'mousedown', ( e ) => {
        dragging = true;
        prevPageX = e.pageX;
        prevScrollLeft = corsouel.scrollLeft;
    } );

    corsouel.addEventListener( 'mousemove', ( e ) => {
        if ( dragging ) {
            e.preventDefault();
            let positonDiff = e.pageX - prevPageX;
            corsouel.scrollLeft = prevScrollLeft - positonDiff;
        }
    } );

    corsouel.addEventListener( 'mouseup', ( e ) => {
        dragging = false;
    } );

    navigation.forEach( ( button ) => {
        button.addEventListener( 'click', () => {
            if ( button.id === 'nav-left' ) {
                corsouel.scrollLeft += -cardWidth;
            } else {
                corsouel.scrollLeft += cardWidth;
            }
        } );
    } );
}

