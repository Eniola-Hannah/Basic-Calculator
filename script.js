var userInput =[]
const callValue=(value)=>{
    firstDisplay.value += value
    userInput.push(firstDisplay.value)
}
const operation=()=>{
    secondDisplay.value += `${eval(firstDisplay.value)}`
}
const erase=()=>{
    firstDisplay.value = ""
    secondDisplay.value = ""
    userInput=[]
}
const del=()=>{
    popLastItem = userInput.pop()
    firstDisplay.value = popLastItem
    if(popLastItem==undefined){
        firstDisplay.value=""
    }
}