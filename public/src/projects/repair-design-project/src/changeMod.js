const button = document.querySelector('.change_mode_buttons_changeMode');
const cotnainer = document.querySelector('.change_mode_buttons')
const stylesheet = document.head.querySelector('#changeMode')
let buttonPushed = false;

const push = (e) => {
    if (!buttonPushed) {
        stylesheet.href = '../dist/mobile.css';
        buttonPushed = true;
        button.innerHTML = 'Desktop'
    }
    else {
        stylesheet.href = '../dist/style.css';    
        buttonPushed = false;
        button.innerHTML = 'Mobile'        
    }
}

button.addEventListener('click', push)
cotnainer.style.position = 'fixed'
cotnainer.style.left = '0'
cotnainer.style.top = '0'
cotnainer.style.width = '60px'