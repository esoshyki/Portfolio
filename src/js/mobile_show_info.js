const mobile_show_info = () => {
    const button = document.querySelector('._show_information');
    const content = document.querySelector('._content')
    const information = document.querySelectorAll('._information');
    const body = document.querySelector('body');
    let hidden = true

    const show_info = () => {
        if (hidden) {
            information.forEach(el => {
                el.style.display = 'flex'
                el.style.flexDirection = 'column';
            })
            button.style.transform = 'rotate(180deg)'
            hidden = false;
        }
        else {
            information.forEach(el => {
                el.style.display = 'none'
            })
            button.style.transform = 'rotate(0deg)'     
            hidden = true       
        }
    }

    const resize = () => {
        const width = body.offsetWidth
        information.forEach(el => {
            el.style.display =  width > 600 ? 'block' : 'none'
        })
        if (width <= 600) {
            button.style.transform = 'rotate(0)';
            hidden = true
        }
    }

    window.addEventListener('resize', resize)
    button.addEventListener('click', show_info);

}

export default mobile_show_info