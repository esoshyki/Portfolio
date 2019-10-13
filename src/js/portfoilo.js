import changeColor from './header_color'
import slider from './slider'
import project_slide from './projects_slide';

export default class Portfolio {
    constructor() {

    }

    start() {
        changeColor()
        slider()
        project_slide()
    }

}