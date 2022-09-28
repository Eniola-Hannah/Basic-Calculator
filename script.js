const callValue=(value)=>{
    firstDisplay.value += value
}
const operation=()=>{
    console.log(eval(firstDisplay.value));
    secondDisplay.value += `${eval(firstDisplay.value)}`
}
const erase=()=>{
    firstDisplay.value = ""
    secondDisplay.value = ""
}