import { FooterSection } from '../../layouts'
import { WorksFilter } from './WorksFilter'

export const WorksPage = () => {
    if (
        location.pathname ===
        '/ahmed-ayob-portofolio-with-ts/src/pages/works/index.html'
    ) {
        FooterSection()
        WorksFilter()
    }
}
