const button = document.querySelector('.buttons_change_view_changeMode');
const body = document.querySelector('body')
const stylesheet = document.head.querySelector('#mobile')
let buttonPushed = false;

const push = (e) => {
    if (!buttonPushed) {
        stylesheet.href = './mobileMode.css';
        buttonPushed = true;
        button.innerHTML = 'Desktop'
    }
    else {
        stylesheet.href = './mobile.css';    
        buttonPushed = false;
        button.innerHTML = 'Mobile'        
    }
    
    console.log(stylesheet.href)
}

button.addEventListener('click', push)
