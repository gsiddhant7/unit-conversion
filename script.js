const convertBtn = document.querySelector('.convert-btn')
const inputNum = document.querySelector('.input-num')
let lengthConv = document.getElementById('ans1')
let volumeConv = document.getElementById('ans2')
let massConv = document.getElementById('ans3')

let numValue = Number(inputNum.value)
    //calculations
    let feetValue = numValue * 3.28084
    let meterValue = numValue / 3.28084
    let literValue = numValue / 3.78541
    let gallonValue = numValue * 3.78541
    let kiloValue = numValue * 2.20462
    let poundValue = numValue / 2.20462

convertBtn.addEventListener("click",()=>{
    let numValue = Number(inputNum.value)
    //calculations
    let feetValue = numValue * 3.28084
    let meterValue = numValue / 3.28084
    let literValue = numValue * 3.78541
    let gallonValue = numValue / 3.78541
    let kiloValue = numValue / 2.20462
    let poundValue = numValue * 2.20462

    lengthConv.innerHTML = `${numValue} meters = ${feetValue.toFixed(3)} feet | ${numValue} feet = ${meterValue.toFixed(3)} meters`
    volumeConv.innerHTML = `${numValue} liters = ${gallonValue.toFixed(3)} gallons | ${numValue} gallons = ${literValue.toFixed(3)} liters`
    massConv.innerHTML = `${numValue} kilos = ${poundValue.toFixed(3)} pounds | ${numValue} pounds = ${kiloValue.toFixed(3)} kilos`
    
})