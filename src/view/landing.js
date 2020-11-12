import * as THREE from 'three';
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
				
				const geometry = new THREE.TorusKnotBufferGeometry( 5, 3, 100, 16 );

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
				shape.position.x = Math.sin( time ) * 2;
				shape.position.y = Math.sin( time ) * 2;
				shape.rotation.x = time;
				shape.rotation.z = time / 2; 
				

				renderer.clear();
				composer.render( time );
			}
};