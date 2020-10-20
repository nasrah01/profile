import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {CSSPlugin} from "gsap/CSSPlugin";
gsap.registerPlugin(ScrollTrigger, CSSPlugin);
import * as THREE from 'three';
import coffee from '../assets/coffee01.jpg';
import data from '../assets/json.png';
import weather from '../assets/weather01.png';


let text01 = document.querySelector('.work__01');
let text02 = document.querySelector('.work__02');
let text03 = document.querySelector('.work__03');

export const work = () => {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.about__text',
      start: "bottom center",
      endTrigger: text02,
      end: "center center",
	  scrub: 1
    }
  });

  tl.from(text01, { 
    duration: 3, 
    scale: 6, 
    opacity: 0,
    ease: "expoScale(25, 1, power4.in)" 
  }, "<")
  tl.from(text02, { 
    duration: 3, 
    scale: 8, 
    opacity: .2,
    ease: "expoScale(25,1,power4.in)" 
  }, "<")
  tl.from(text03, { 
    duration: 3, 
    scale: 8,
    opacity: .2, 
    ease: "expoScale(25,1,power4.in)" 
  }, "<") 
};


const canvas01 = document.querySelector('.project__canvas--01');
const canvas02 = document.querySelector('.project__canvas--02');
const canvas03 = document.querySelector('.project__canvas--03');

function createCanvas (canvas, image) {
	
	
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000 );

	var renderer = new THREE.WebGLRenderer({
		antialias:true,
		alpha:true
	});
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( canvas.clientWidth, canvas.clientHeight );
	renderer.setClearColor(0xFFFFFF);
	canvas.appendChild( renderer.domElement );

	camera.position.z = 3;

	var texture = new THREE.TextureLoader().load(image);

	var material = new THREE.MeshBasicMaterial( { map: texture } );
	
	var geometry = new THREE.PlaneGeometry(5,3,50,30);
	console.log(geometry);

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
	animate();

}


export const projectImages = () => {
	createCanvas(canvas01, coffee);

	createCanvas(canvas02, weather);

	createCanvas(canvas03, data);
};

