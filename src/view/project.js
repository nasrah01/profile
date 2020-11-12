import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {CSSPlugin} from "gsap/CSSPlugin";
gsap.registerPlugin(ScrollTrigger, CSSPlugin);
import * as THREE from 'three';
import coffee from '../assets/coffee01.png';
import weather from '../assets/api.png';
import data from '../assets/login.png';
import coffeeMob from '../assets/coffeemobile.png';
import weatherMob from '../assets/apimobile.png';
import dataMob from '../assets/intranetmobile.png';

export const work = () => {

 console.log('container for project');
};


const canvas01 = document.querySelector('.project__canvas--01');
const canvas02 = document.querySelector('.project__canvas--02');
const canvas03 = document.querySelector('.project__canvas--03');

function createCanvas (canvas, image) {

	const insertImage = `<img src="${image}" alt="project image" class="canvas__image" />`;
	canvas.insertAdjacentHTML('beforeend', insertImage);
	
/* 		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera( 30, canvas.clientWidth / canvas.clientHeight, 0.1, 1000 );

		var renderer = new THREE.WebGLRenderer({
			antialias:true,
			alpha:true
		});
		//renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( canvas.clientWidth, canvas.clientHeight );
		renderer.setClearColor(0xFFFFFF);
		canvas.appendChild( renderer.domElement );

		camera.position.z = 6;

		var texture = new THREE.TextureLoader().load(image);
		var material = new THREE.MeshBasicMaterial( { map: texture } );
		var geometry = new THREE.PlaneGeometry(5,3,50,30);

		var flag = new THREE.Mesh( geometry, material );
		scene.add( flag );
		
		flag.rotation.set(-0.1, 0, 0);
		
		
		const clock = new THREE.Clock();

		window.addEventListener( 'resize', onWindowResize, false );

		function onWindowResize() {
			renderer.setSize( canvas.clientWidth, canvas.clientHeight);
			camera.aspect = canvas.clientWidth / canvas.clientHeight
			camera.updateProjectionMatrix();
		}
		
		function animate() {
		
			const t = clock.getElapsedTime()
				
			flag.geometry.vertices.map(v => {
		
				const waveX1 = Math.PI / 20 * Math.sin(v.x * 2 + t )
				const waveY1 = Math.PI / 22 * Math.sin(v.y * Math.PI / 10  + t)
				//const waveZ1 = Math.PI / 11 * Math.sin(v.z * Math.PI  + t / 1.2)
		
				v.z = waveX1 + waveY1
			})
			flag.geometry.verticesNeedUpdate = true; 
		
			requestAnimationFrame( animate );
			renderer.render( scene, camera );
		}
		animate(); */
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
