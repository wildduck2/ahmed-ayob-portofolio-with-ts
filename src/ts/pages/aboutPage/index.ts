import { FooterSection } from '../../layouts'
import { AboutAnimation } from './AboutAnimation'

export const AboutPage = () => {
    if (
        location.pathname ===
        '/ahmed-ayob-portofolio-with-ts/src/pages/aboutPage/index.html'
    ) {
        document.querySelector('header')?.classList.add('white-header')
        AboutAnimation()
        FooterSection()
    }
}
