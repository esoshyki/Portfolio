export default class Portfolio {
    constructor() {

    }

    start() {
        console.log('started')
        const Header = document.querySelector('header');
        const HeaderH1 = Header.querySelector('h1');

        const headersColors = ['black', 'red', '#42D4AD', 'blue', '#e3d0c3']
        let count = 0

        const changeColor = () => {
            count +=1
            HeaderH1.style.color = headersColors[count%headersColors.length]
        }

        HeaderH1.addEventListener('click', changeColor)
    }

}