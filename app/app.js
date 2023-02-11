const innInput = document.querySelector('#innInput')
const innCheck = document.querySelector('#innCheck')
const innResult = document.querySelector('.innResult')

const regExp = /^\d{14}$/

innCheck.onclick = () => {
    if (regExp.test(innInput.value)) {
        innResult.innerHTML = 'OK'
        innResult.style.color = 'green'
    } else {
        innResult.innerHTML = 'Wrong'
        innResult.style.color = 'red'
    }
}

let box = document.getElementById("box");
let right = 1;


function right() {
    box.style.right = 30 + "px";
    box.style.left = 30 * right + "px";
    right++;
}

let num = 0

const count = () => {
    num++
    console.log(num)
    if (position < 445) {
        count()
    }
}
