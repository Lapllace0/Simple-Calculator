let display = document.getElementById('display')

let storeData = ''
function keyAppend(Numb) {    
    if(display.value == '' && isNaN(Numb)) {
        display.value = 'incorrect'
        setTimeout(() => {
            display.value = ''
            storeData = ''
        }, 1000)
    } else {
        if (Numb != '*') {
            display.value += Numb
            storeData += Numb
        } else {
            display.value += 'x'
            storeData += '*'
        }
    }
    console.log(storeData)
}

function calculate() {
    try {
        display.value = eval(storeData)
        storeData = display.value
    } 
    catch(error) {
        display.value = 'Incorrect Input'
        setTimeout(() =>{
            a = ''
            display.value = ''
        }, 1000)
    }
}

function clearKey() {
    display.value = ''
    storeData = ''
}