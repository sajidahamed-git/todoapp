import "./styles.css"
console.log('test succefulll');

console.log('ping pong');

const temp = document.querySelector('.xxyy')
console.log(temp);


function run(){
    console.log('runnig fast');
    dialog.showModal()
}

const addbutton = document.querySelector('.addbutton')

addbutton.addEventListener('click',run)

const dialog = document.querySelector("dialog")

const submit = document.querySelector('.submit')
submit.addEventListener('click', run)

