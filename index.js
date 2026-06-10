/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// variables
const lengthResultEl = document.getElementById("meterEl")
const volumeResultEl = document.getElementById("literEl")
const massResultEl = document.getElementById("kilogramEl")
const inputValueEl = document.getElementById("inputEl")
const convertBtn = document.getElementById("convert-btn")
// functions
function resultInFeet(input){
  return (input * 3.281).toFixed(3)
}
function resultInMeter(input){
  return (input / 3.281).toFixed(3)
}
function resultInGallon(input){
  return (input * 0.264).toFixed(3)
}
function resultInLiter(input){
  return (input / 0.264).toFixed(3)
}
function resultInPounds(input){
  return (input * 2.204).toFixed(3)
}
function resultInKilograms(input){
  return (input / 2.204).toFixed(3)
}
convertBtn.addEventListener("click", function(){
    let inputValue = inputValueEl.value
    lengthResultEl.innerHTML = `
    <p>
      ${inputValue} meters = ${resultInFeet(inputValue)} feet | ${inputValue} feet = ${resultInMeter(inputValue)} meters
    </p>`
    volumeResultEl.innerHTML = `
    <p>
      ${inputValue} Liters = ${resultInGallon(inputValue)} Gallons | ${inputValue} Gallons = ${resultInLiter(inputValue)} Liters
    </p>`
    massResultEl.innerHTML = `
    <p>
      ${inputValue} Kilograms = ${resultInPounds(inputValue)} Pounds | ${inputValue} Pounds = ${resultInKilograms(inputValue)} Kilograms
    </p>`
})