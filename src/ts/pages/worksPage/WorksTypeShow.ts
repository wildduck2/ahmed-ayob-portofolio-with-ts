import { projectsData } from "../../../constants"
import { projects } from "../../../vite-env"

export const WorksTypeShow = ( filterType: string ) => {
    const projects: projects = projectsData


    console.log( filterType );

    const filteredItems = projects.filter( project => {

        return project.type === filterType ? project : ''
    } )

    return filteredItems.length === 0 ? projectsData : filteredItems
}