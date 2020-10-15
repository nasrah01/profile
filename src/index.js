import './sass/main.scss';
import * as Navigate from './view/navigation';
import * as Projects from './view/project';
import * as AboutMe from './view/about';
import * as ContactInfo from './view/contact';
import heading from './assets/code01.jpg'

import * as THREE from 'three';

Navigate.links();
Projects.work();
Projects.projectImages();
ContactInfo.textChange();
AboutMe.showMe();


const mainNav = document.querySelectorAll('.navigation__ref');
const hamburgerNav = document.querySelectorAll('.navigation__link');

mainNav.forEach((list) => {
	list.addEventListener('click', () => {
		console.log(list);
		setTimeout(() => {
			removeHash();
		}, 5);
	});
});

hamburgerNav.forEach((nav) => {
	nav.addEventListener('click', () => {
		setTimeout(() => {
			removeHash();
		}, 5);
	});
});

function removeHash() {
	var uri = window.location.toString(); 
  
            if (uri.indexOf("#") > 0) { 
                var clean_uri = uri.substring(0,  
                                uri.indexOf("#")); 
  
                window.history.replaceState({},  
                        document.title, clean_uri); 
            } 
};


			const content = document.getElementById('site__canvas');
			import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
			import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
			import { TexturePass } from 'three/examples/jsm/postprocessing/TexturePass.js';
			import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass.js';
			import { MaskPass, ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
			import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';
			

			let camera, composer, renderer;
			let shape;

			init();
			animate();

			function init() {

				

				camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 4;

				const scene1 = new THREE.Scene();
				
				const geometry = new THREE.IcosahedronGeometry(2, 0);

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

				shape.position.y = Math.cos( time / 1.5 ) * 2;
				shape.position.x = Math.sin( time ) * 2;
				shape.rotation.x = time;
				shape.rotation.y = time / 2;

				renderer.clear();
				composer.render( time );
			}


			