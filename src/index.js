import './sass/main.scss';
import * as Navigate from './view/navigation';
import * as Projects from './view/project';
import * as Backdrop from './view/landing';


Backdrop.bubble();
Navigate.links();

if(window.innerWidth > 600) {
    Projects.work();
}
Projects.projectImages();
