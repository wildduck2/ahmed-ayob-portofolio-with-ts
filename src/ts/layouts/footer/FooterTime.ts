export const FooterTime = () => {
    const localTime = document.querySelector( '.time-data' ) as HTMLDivElement
    const versionData = document.querySelector( '.version-data' ) as HTMLDivElement

    const local = new Date()
    let minits: number | string = local.getMinutes()
    let hours: number | string = local.getHours()

    // maing period pm and am
    let period = hours > 12 ? 'PM' : 'AM'
    // foramating minites below 10
    minits = minits < 10 ? `0${minits}` : minits
    // making 12h formate
    hours = hours > 12 ? hours - 12 : hours
    // foramating hours below 10
    hours = hours < 10 ? '0' + hours : hours

    localTime.textContent = `${hours}:${minits} ${period}`
    versionData.textContent = `${local.getFullYear()} © Edition`
    setInterval( () => {
        localTime.textContent = `${hours}:${minits} ${period}`
    }, 59000 )
}