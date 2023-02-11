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

let position = 0
function move () {
    position++
    document.querySelector('.box').style.left = position + 'px'
    if (position >= 450) {
        return true
    }
    setTimeout(move,20)
}
   document.querySelector('.box').onclick = move
