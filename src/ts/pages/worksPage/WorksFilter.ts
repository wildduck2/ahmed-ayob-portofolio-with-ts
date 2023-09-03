import { projects } from "../../../vite-env"
import { AppendingFilterdWorks } from "./AppendingFiltedWorks"
import { AppendingFiltedShape } from "./AppendingFilterShpae"
import { WorksTypeShow } from "./WorksTypeShow"

export const WorksFilter = () => {
    const projectsContainer = document.querySelector( '.projects-wrapper' ) as HTMLDivElement

    const typeFilterButtons: NodeListOf<HTMLDivElement> =
        document.querySelectorAll( '.type button' )

    const shapeFilterButtton: NodeListOf<HTMLDivElement> =
        document.querySelectorAll( '.shape button' )

    // checking if the button shpae and show the propjects correct grid with animation
    typeFilterButtons.forEach( ( button ) => {
        button.addEventListener( 'click', () => {

            typeFilterButtons.forEach( ( button ) =>
                button.classList.remove( 'active' )
            )

            button.classList.add( 'active' )

            // Works Type Show
            const dataTypeForClickedBtn: string | null = button.getAttribute( 'data-type' )
            const filtedData: projects = WorksTypeShow( dataTypeForClickedBtn! )

            // Appending Filted Works
            const filteredDataElements = AppendingFilterdWorks( filtedData, projectsContainer )
            projectsContainer.innerHTML = filteredDataElements

            //  Appending Animation to the grid
            const currentShape = projectsContainer.classList.contains( 'menu' ) ? 'menu' : 'grid'
            AppendingFiltedShape( projectsContainer, currentShape )

        } )
    } )



    shapeFilterButtton.forEach( ( button ) => {
        button.addEventListener( 'click', () => {
            shapeFilterButtton.forEach( ( button ) =>
                button.classList.remove( 'active' )
            )

            const buttonData = button.getAttribute( 'data-shape' )
            button.classList.add( 'active' )

            // remove any prev class and add the current
            projectsContainer.classList.remove( 'grid' )
            projectsContainer.classList.remove( 'menu' )
            projectsContainer.classList.add( buttonData! )

            //  Appending Animation to the grid
            AppendingFiltedShape( projectsContainer, buttonData! )
        } )
    } )


}