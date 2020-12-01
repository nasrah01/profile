import coffee from '../assets/coffee01.png';
import weather from '../assets/api.png';
import data from '../assets/login.png';

const canvas01 = document.querySelector('.project__canvas--01');
const canvas02 = document.querySelector('.project__canvas--02');
const canvas03 = document.querySelector('.project__canvas--03');

const coffeeLink = "https://titan.dcs.bbk.ac.uk/~nabrah01/coffee/index.html";
const apiLink = "https://titan.dcs.bbk.ac.uk/~nabrah01/wd/fma/task2/apiweather.html";
const intranetLink = "https://titan.dcs.bbk.ac.uk/~nabrah01/intranet/index.php";

function createCanvas (canvas, image, link) {

	const insertImage = `<a href="${link}" target="_blank"><img src="${image}" alt="project image" class="canvas__image" /></a>`;
	canvas.insertAdjacentHTML('beforeend', insertImage);
	
}


export const projectImages = () => {

		createCanvas(canvas01, data, intranetLink);

		createCanvas(canvas02, weather, apiLink);

		createCanvas(canvas03, coffee, coffeeLink); 
	
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
