import { FloatImage } from "./FloatImage";
import { WorksFilter } from "./WorksFilter";

export const WorksPage = () => {
    const validationEl = document.querySelector(".works-section-container");
    if (!validationEl) return;
    WorksFilter();
    FloatImage();
};
