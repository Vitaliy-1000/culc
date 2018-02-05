
const table = document.getElementsByTagName('table')[0];
    display = document.getElementById('display');
    buttonClean = document.getElementById('clean');

const clickIniter = function(event) {
    const {target} = event;
    let dataFromDisplay = display.value;
    if(target.localName === 'button'){
        if(target.id === 'clean'){
            display.value = '';
        } else if (target.id === 'result') {
            return result();
        } else if(target.id === 'plusOrMinus'){
            return revers();
        } else {      
            let getTextFromButtons = target.innerText;
            let  showNumber = dataFromDisplay + getTextFromButtons;
            display.value = showNumber;
            return display;
        }
    }
}

function result() {
    let dataFromDisplay = display.value;
    if(/[+]/.test(dataFromDisplay)) {
        let arr = dataFromDisplay.split("+");
        display.value = (+arr[0] + +arr[1]);
    } else if(/[-]/.test(dataFromDisplay)) {
        let arr = dataFromDisplay.split("-");
        console.log(arr)
        if(arr.length == 3) {
            display.value = (-arr[1] - (+arr[2]));
        } else {
        display.value = (+arr[0] - +arr[1]);
        };
    } else if(/[*]/.test(dataFromDisplay)) {
        let arr = dataFromDisplay.split('*');
        console.log(arr)
        display.value = (+arr[0] * +arr[1]);
    } else {
        let arr = dataFromDisplay.split("/");
        console.lof(arr)
        display.value = (+arr[0] / +arr[1]);
    }  
}

function revers() {
    let dataFromDisplay = display.value;
    if(/[+]/.test(dataFromDisplay)) {
        let arr = dataFromDisplay.split('+');
        console.log(arr)
        display.value = ('-' + arr[0]);
        console.log(display.value)
        return display.value;
    } else if(/[-]/.test(dataFromDisplay)){
        let arr = dataFromDisplay.split('-');
        display.value = (arr[0]);
        return display;
    }
}

table.addEventListener('click', clickIniter);