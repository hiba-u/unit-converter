const btn = document.getElementById("btn")
const inputEl = document.getElementById("number-input")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

function convertLength(length){

    const conversionRatio = 3.281;

    const meterToFeet = (length * conversionRatio).toFixed(3);
    const feetToMeter = (length / conversionRatio).toFixed(3);

    const arr = [meterToFeet, feetToMeter]
    return arr
}

function convertVolume(volume) {

    const conversionRatio = 0.264;

    const litersToGallons = (volume * conversionRatio).toFixed(3);
    const gallonsToLiters = (volume / conversionRatio).toFixed(3);

    const arr = [litersToGallons, gallonsToLiters]
    return arr
}

function convertMass(mass) {

    const conversionRatio = 2.204;

    const kgToPounds = (mass * conversionRatio).toFixed(3);
    const poundsToKg = (mass / conversionRatio).toFixed(3);

    const arr = [kgToPounds, poundsToKg]
    return arr
}


btn.addEventListener("click", function() {

    const val = inputEl.value

    const lengthArr = convertLength(val)
    const volumeArr = convertVolume(val)
    const massArr = convertMass(val)

    lengthEl.textContent = `${val} meters = ${lengthArr[0]} feet | ${val} feet = ${lengthArr[1]} meters`

    volumeEl.textContent = `${val} liters = ${volumeArr[0]} gallons | ${val} gallons = ${volumeArr[1]} liters`

    massEl.textContent = `${val} kilos = ${massArr[0]} pounds | ${val} pounds = ${massArr[1]} kilos`
})