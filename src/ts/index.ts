import { MagnaticObject } from "./utils/magnetic";
import { BackTopUI } from "./layouts/backTop";
import { Header } from "./layouts/header";
import { BarbaJSRoutingAnimation } from "./utils/barbaJSRoutingAnimation/BarbaJSRoutingAnimation";
import { HomePage } from "./pages/homePage";
import { AboutPage } from "./pages/aboutPage";
import { WorksPage } from "./pages/worksPage";
import { ContactPage } from "./pages/contactPage";



export const initScript = () => {
    Header()
    HomePage()
    MagnaticObject()
    BackTopUI()
    AboutPage()
    WorksPage()
    ContactPage()
}
BarbaJSRoutingAnimation()
initScript()
