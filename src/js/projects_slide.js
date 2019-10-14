import mobile_show_info from './mobile_show_info'

const project_slide = () => {
    const theallow = document.querySelector('.theyallow');
    const repair = document.querySelector('.repair-design');
    const theallow_img = document.querySelector('._image-link');
    const repair_img = document.querySelector('._image-link');

    let theallow_active = true
    let dx = 0
    const changeContent = () => {
        console.log('change start')
        if (theallow_active) {
            theallow.style.display = 'none';
            repair.style.display = 'flex';
            theallow_active = false
        }
        else {
            theallow.style.display = 'flex';
            repair.style.display = 'none';
            theallow_active = true
        }
    }

    const changeContentMobile = () => {
        if (theallow_active) {
            theallow.style.display = 'none';
            repair.style.display = 'flex';
            dx = 0
        }
        else {
            theallow.style.display = 'flex';
            repair.style.display = 'none';
            dx = 0
        }
    }

    document.querySelector('._left_slider').addEventListener('click', changeContent);
    document.querySelector('._right_slider').addEventListener('click', changeContent);    

    const swipe = (event) => {
        const startX = event.touches[0].clientX
        let el;
        if (theallow_active) {
            el = theallow
        }

        const move = (e) => {
            dx = startX - e.touches[0].clientX
            console.log(`dx = ${dx}`)
            el.style.marginLeft = `${-dx}px`;
            if (dx > 100 ||dx < -100) {
                changeContentMobile()
                el.style.marginLeft = 0
                dx = 0  
                if (theallow_active === true) {
                    theallow_active = false;
                    console.log('here')
                    repair_img.addEventListener('touchstart', swipe, true);
                    theallow_img.removeEventListener('touchstart', swipe)
                    theallow_img.removeEventListener('touchmove', move)
                }
                else {
                    theallow_active = true
                    theallow_img.addEventListener('touchstart', swipe, true);
                    repair_img.removeEventListener('touchstart', swipe)
                    repair_img.removeEventListener('touchmove', move)
                }
            }
        }

        theallow_active ? theallow_img.addEventListener('touchmove', move) : repair_img.addEventListener('touchmove', move)

    }


    theallow_img.addEventListener('touchstart', swipe, true);
    

}

export default project_slide