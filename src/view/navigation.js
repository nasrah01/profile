import * as THREE from 'three';
import {gsap} from "gsap";
import { AmbientLight, Camera, PerspectiveCamera, Scene, PointLight } from 'three';

export const links = () => {
    const lineOne = document.querySelector('.navigation__one');
    const lineTwo = document.querySelector('.navigation__two');
    const lineThree = document.querySelector('.navigation__three');
    const burger = document.querySelectorAll('.navigation__line');
    const items = document.querySelectorAll('.navigation__content');
    const screen = document.querySelector('.navigation__large');
    const hamburger = document.querySelector('.navigation__container');

    const tl = gsap.timeline({paused: true, reversed: true});

    gsap.globalTimeline.timeScale(.7);


    tl
    .to(lineOne, { y: 8, yoyo: true, ease: "Power1.easeInOut", duration: .2})
    .to(lineThree, { y: -8, yoyo: true, ease: "Power1.easeInOut", duration: .2}, '-=0.2')
    .to(lineOne, {rotation:-45, duration: .3})
    .to(lineTwo, {rotation:45,  duration: .3}, '-=.3')
    .to(lineThree, {rotation:45,  duration: .3}, '-=.3') 
    .to(burger, {css:{backgroundColor:"#594839", backgroundImage: 'linear-gradient(315deg, #594839 0%, #594839 74%)'}, duration: .1, ease:"Power1.easeOut"}, '-=.1')
    .fromTo(screen,{ css:{width: "0"}, ease: "Circ.easeIn"}, { css:{width: "100%"}, ease: "Circ.easeOut" , duration: .5}, '-=.1')
    .staggerFrom(items, 0.5, {opacity: 0, y: 25, ease: "Power1.easeOut"}, 0.2, "-=0.7")
    .to(items, 0.2, {css:{color:"#000"}});


    hamburger.addEventListener('click', () => {
        if (tl.reversed()) {
            tl.play();
        } else {
            tl.reverse();
        }
    });

    items.forEach((item)  => {
        item.addEventListener('click',() => {
            if (tl.reversed()) {
                tl.play();
            } else {
                tl.reverse();
            }
        });
    })

/* 
            const mainNav = document.querySelectorAll('.navigation__ref');

        mainNav.forEach((list) => {
            list.addEventListener('click', () => {
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
        }; */
};
