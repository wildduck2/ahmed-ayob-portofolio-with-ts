import { FooterSection } from "../../layouts"
import { WorksFilter } from "./WorksFilter"


export const WorksPage = () => {
    if ( location.pathname === '/src/pages/works/index.html' ) {
        FooterSection()
        WorksFilter()

    }
}
