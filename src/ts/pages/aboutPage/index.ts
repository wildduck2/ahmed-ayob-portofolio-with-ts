import { FooterSection } from "../../layouts";
import { AboutAnimation } from "./AboutAnimation";

export const AboutPage = () => {
    if ( location.pathname === '/src/pages/aboutPage/index.html' ) {
        document.querySelector( 'header' )?.classList.add( 'white-header' )
        AboutAnimation()
        FooterSection()
    }
}
