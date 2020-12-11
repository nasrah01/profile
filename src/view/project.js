import coffee from '../assets/coffee01.png';
import weather from '../assets/api.png';
import data from '../assets/login.png';

const canvas01 = document.querySelector('.project--01');
const canvas02 = document.querySelector('.project--02');
const canvas03 = document.querySelector('.project--03');

const coffeeLink = "https://titan.dcs.bbk.ac.uk/~nabrah01/coffee/index.html";
const apiLink = "https://titan.dcs.bbk.ac.uk/~nabrah01/wd/fma/task2/apiweather.html";
const intranetLink = "https://titan.dcs.bbk.ac.uk/~nabrah01/intranet/index.php";

function createCanvas (canvas, image, link, num) {

	const insertImage = `<a href="${link}" target="_blank" class="canvas project__canvas--${num}"><img src="${image}" alt="project image" class="canvas__image canvas__image--${num}" /></a>`;
	canvas.insertAdjacentHTML('afterend', insertImage);
	
}


export const projectImages = () => {

		createCanvas(canvas01, data, intranetLink, "01");

		createCanvas(canvas02, weather, apiLink, "02");

		createCanvas(canvas03, coffee, coffeeLink, "03"); 
	
};

export const popup = () => {

	const container = document.getElementById('popup');
	const open = document.querySelector('.popup__window');
	const close = document.querySelector('.popup__close');

	container.addEventListener('click', () => {
		open.style.display = 'block';
	});

	close.addEventListener('click', () => {
		open.style.display = 'none';
	});
};
