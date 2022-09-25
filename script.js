firstDisplay.value = 0;

const callValue=(value)=>{
    firstDisplay.value += value
}
const operation=()=>{
    console.log(eval(firstDisplay.value));
    secondDisplay.value += `${eval(firstDisplay.value)}`
}
const clear=()=>{
    eval(display.value = "")
    console.log("e dey work")
}