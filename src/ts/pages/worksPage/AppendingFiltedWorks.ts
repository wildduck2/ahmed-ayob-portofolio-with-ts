import { projects } from "../../../vite-env";

export const AppendingFilterdWorks = ( filtedData: projects, projectsContainer: HTMLDivElement ) => {

    const currentShape = projectsContainer.classList.contains( 'menu' )

    const FilteredDataElments = filtedData.map( data => {
        const project = `
                <li class="propject">
                    <img
                        class="card__img-filtered"
                        src="${data.imgSrc}"
                        alt="card__background "
                    />
                    <div>
                        <div>
                            <span class="name">${data.name}</span
                            ><span class="service">${data.service}</span
                            ><span class="date">${data.year}</span>
                        </div>
                    ${!currentShape ? ` <div>
                        <svg
                            width="24"
                            height="24"
                            fill="white"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                            ></path></svg
                        ><svg
                            width="24"
                            height="24"
                            fill="white"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M17,6H7C6.4,6,6,6.4,6,7s0.4,1,1,1h7.6l-8.3,8.3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0L16,9.4V17c0,0.6,0.4,1,1,1s1-0.4,1-1V7C18,6.4,17.6,6,17,6z"
                            ></path>
                        </svg>
                    </div>`: ''}
                    </div>
                </li>
                <div class="seperator li-sep"></div>
        `
        return project
    } )




    const ulHeader = `
    ${!currentShape ? `   <li class="propject-table-line">
                <span class="client-name">client</span
                ><span class="services-name">services</span
                ><span class="serivices-date">year</span>
            </li>
            <div class="seperator"></div>`: ''
        }
    <div class="projects-conatiner-animation">${FilteredDataElments.join( '' )}</div>`


    return ulHeader

}