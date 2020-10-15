import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TextPlugin} from "gsap/TextPlugin";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const text = document.querySelector('.contact__title');
const contact = document.getElementById('contact');
let container = document.querySelector('#container');


export const textChange = () => {


 console.log('nothing to see here');

}

