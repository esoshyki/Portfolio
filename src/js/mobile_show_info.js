const mobile_show_info = () => {
    const button = document.querySelector('._show_information');
    const content = document.querySelector('._content')
    const information = document.querySelector('._information');
    let hidden = true

    const show_info = () => {
        console.log(content.offsetWidth)
        if (hidden) {
            information.style.display = 'flex';
            information.style.flexDirection = 'column';
            button.style.transform = 'rotate(180deg)'
            hidden = false;
        }
        else {
            information.style.display = 'none';
            button.style.transform = 'rotate(0deg)'     
            hidden = true       
        }
    }

    const resize = () => {
        console.log(content.offsetWidth)
        if (content.offsetWidth > 600 ) {
            information.style.display = 'block';           
        }
    }

    button.addEventListener('click', show_info);
    window.addEventListener('resize', resize);
}

export default mobile_show_info