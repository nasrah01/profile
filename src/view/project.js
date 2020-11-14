import coffee from '../assets/coffee01.png';
import weather from '../assets/api.png';
import data from '../assets/login.png';
import coffeeMob from '../assets/coffeemobile.png';
import weatherMob from '../assets/apimobile.png';
import dataMob from '../assets/intranetmobile.png';

const canvas01 = document.querySelector('.project__canvas--01');
const canvas02 = document.querySelector('.project__canvas--02');
const canvas03 = document.querySelector('.project__canvas--03');

function createCanvas (canvas, image) {

	const insertImage = `<img src="${image}" alt="project image" class="canvas__image" />`;
	canvas.insertAdjacentHTML('beforeend', insertImage);
	
}


export const projectImages = () => {

	if(window.innerWidth > 500) {
		createCanvas(canvas01, data);

		createCanvas(canvas02, weather);

		createCanvas(canvas03, coffee); 
	} else {
		createCanvas(canvas01, dataMob);

		createCanvas(canvas02, weatherMob);

		createCanvas(canvas03, coffeeMob); 
	}
	
};
