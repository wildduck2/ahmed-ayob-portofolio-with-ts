import { HomeSection } from './homeSection'
import { AboutSection } from './aboutSection'
import { WorksSection } from './worksSection'
import { SliderSection } from './sliderSection'
import { FooterSection } from '../../layouts'

export const HomePage = () => {
    if (location.pathname === '/ahmed-ayob-portofolio-with-ts/') {
        FooterSection()
        HomeSection()
        AboutSection()
        WorksSection()
        SliderSection()
    }
}
