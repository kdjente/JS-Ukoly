function parseDate(akoText) {
    const day = akoText.slice(0,2)
    const month = akoText.slice(3,5)
    const year = akoText.slice(6,10)

    const objekt = {
        day: Number(day), 
        month: Number(month),
        year: Number(year)
    }
    return objekt
}

let datum = prompt("Zadaj datum (DD.MM.YYYY)")
let objekt = parseDate(datum)

document.body.innerHTML = `{ day: ${objekt.day}, month: ${objekt.month}, year: ${objekt.year} }`