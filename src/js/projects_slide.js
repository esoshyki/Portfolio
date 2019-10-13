const project_slide = () => {
    const theallow = document.querySelector('.theyallow');
    const repair = document.querySelector('.repair-design');
    let theallow_active = true
    const changeContent = () => {
        if (theallow_active) {
            theallow.style.display = 'none';
            repair.style.display = 'grid';
            theallow_active = false
        }
        else {
            theallow.style.display = 'grid';
            repair.style.display = 'none';
            theallow_active = true
        }
    }
    document.querySelector('._left_slider').addEventListener('click', changeContent);
    document.querySelector('._right_slider').addEventListener('click', changeContent);    
}

export default project_slide