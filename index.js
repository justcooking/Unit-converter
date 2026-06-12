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
const resetBtn = document.getElementById("reset-btn")
const errorPar = document.getElementById("errorEl")
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
errorPar.innerHTML = `<p>Enter a value between 0 and 1000</p>`
convertBtn.addEventListener("click", function(){
    let inputValue = inputValueEl.value
    if(isNaN(inputValue) || (inputValue <= 0)){
      errorPar.style.color = "red";
      errorPar.style.textShadow = "1px 1px 10px rgba(0,0,0,0.5)";
      errorPar.innerHTML = `<p>Please input a valid number</p>`
    }
    else{
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
    errorPar.innerHTML = `<p></p>`
    }
})
resetBtn.addEventListener("click",function(){
  lengthResultEl.innerHTML = `<p>Please Enter a value</p>`
  volumeResultEl.innerHTML = `<p>Please Enter a value</p>`
  massResultEl.innerHTML = `<p>Please Enter a value</p>`
  inputValueEl.value = 0
  errorPar.innerHTML = `<p></p>`
  errorPar.innerHTML = `<p>Enter a value between 0 and 1000</p>`
  errorPar.style.color = "whitesmoke";
  errorPar.style.textShadow = "0px 0px 0px black";
})
