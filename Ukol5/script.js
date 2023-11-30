const salary = (wage, hours, days) => {
    
    return wage * hours * days
}

const wage = 600
const hours = 8
const days = 20

console.log(salary(wage, hours, days))

const taxed = (castka, procento) => {
    return castka - (castka * procento / 100)
}

const castka = salary(wage, hours, days)
const procento = 15

console.log(taxed(castka, procento))

//console.log(salary(wage, hours, days) - taxed(castka, procento))



