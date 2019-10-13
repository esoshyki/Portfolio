const slider = () => {
    const button = document.querySelector('.education__header__slide_down');
    const education = document.querySelector('.education__information');
    let up = true

    const handler = (e) => {
        console.log(up)
        let margin_top;
        const fps = 100;
        const reducer = 1000 / fps;

        const reduce = () => {
            margin_top += 5
            education.style.marginTop = `${margin_top}px`;
            if (margin_top <= 0) {
                setTimeout(reduce, reducer);
            }
            else {
                up = false
                button.style.transform = 'rotate(180deg)';
                console.log(up)
            }
        }

        const increase = () => {
            margin_top -= 5;
            education.style.marginTop = `${margin_top}px`;
            if (margin_top >= -300) {
                setTimeout(increase, reducer);
            }
            else {
                up = true
                button.style.transform = 'rotate(0deg)';
            }
        }


        if (up) {
            margin_top = -300
            setTimeout(reduce, reducer)
        }
        else {
            margin_top = 5;
            setTimeout(increase, reducer)

        }
    }

    button.addEventListener('click', handler)
}

export default slider