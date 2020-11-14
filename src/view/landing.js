import * as THREE from 'three';
import {gsap} from "gsap";
import heading from '../assets/code01.jpg';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass.js';
import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass.js';
import { MaskPass, ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';

export const bubble = () => {
    const content = document.getElementById('site__canvas');

			let camera, composer, renderer;
			let shape;

			init();
			animate();

			function init() {

				

				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 40;

				const scene1 = new THREE.Scene();
				
				const geometry = new THREE.CircleGeometry( 5, 32 );

				shape = new THREE.Mesh(geometry);
				
				scene1.add( shape );

				renderer = new THREE.WebGLRenderer();
				renderer.setClearColor(0xffffff);
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.autoClear = false;
				content.appendChild( renderer.domElement );

				const clearPass = new ClearPass();

				const clearMaskPass = new ClearMaskPass();

				const maskPass1 = new MaskPass( scene1, camera );

				const texture1 = new THREE.TextureLoader().load(heading);
				texture1.minFilter = THREE.LinearFilter;

				const texturePass1 = new TexturePass( texture1 );

				const outputPass = new ShaderPass( CopyShader );

				const parameters = {
					minFilter: THREE.LinearFilter,
					magFilter: THREE.LinearFilter,
					format: THREE.RGBFormat,
					stencilBuffer: true
				};

				const renderTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, parameters );

				composer = new EffectComposer( renderer, renderTarget );
				composer.addPass( clearPass );
				composer.addPass( maskPass1 );
				composer.addPass( texturePass1 );
				composer.addPass( clearMaskPass );
				composer.addPass( outputPass );

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

        		renderer.setSize( window.innerWidth, window.innerHeight );
			}
			
			function animate() {

				requestAnimationFrame( animate );

				const time = performance.now() * 0.001 + 6000;

				shape.position.z = Math.cos( time / 1.5 ) * 2;
				shape.position.x = Math.cos( time ) * 4;
				shape.rotation.x = time;
				shape.rotation.z = time / 2; 
				

				renderer.clear();
				composer.render( time );
			}
};

export const textReveal = () => {

	const reveal = gsap.timeline({delay: .5});

   	reveal.to("#start-box_1", { duration: 0.75, y: 0, opacity: 1})
	reveal.to("#start-box_2", { duration: 0.75, y: 0, opacity: 1}, '-=.5')
	reveal.to("#start-box_3", { duration: 0.75, y: 0, opacity: 1}, '-=.5')
	reveal.to("#start--name", { duration: 0.75, opacity: 1}, '-=.1')
	reveal.to(".navigation", { duration: 0.75, y: 0}, '-=.5');
}


function createCanvas (canvas, image) {
	
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