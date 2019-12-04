import changeColor from './header_color'
import slider from './slider'
import project_slide from './projects_slide';
import mobile_show_info from './mobile_show_info';

export default class Portfolio {
    constructor() {

    }

    start() {
        changeColor()
        slider()
        project_slide()
        mobile_show_info()
    }

}