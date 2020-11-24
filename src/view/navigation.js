import {gsap} from "gsap";

    const bar = document.querySelector('.navigation__large');
    const burger = document.querySelector('.navigation__small');

    const naviLinks = `<ul class="navigation__menu"><li class="navigation__content"><a href="#index" class="navigation__ref">Home</a></li>
    <li class="navigation__content"><a href="#me" class="navigation__ref">About</a></li>
    <li class="navigation__content"><a href="#project" class="navigation__ref">Projects</a></li>
    <li class="navigation__content"><a href="#contact" class="navigation__ref">Contact</a></li></ul>`;

    bar.insertAdjacentHTML('beforeend', naviLinks);
    burger.insertAdjacentHTML('beforeend', naviLinks);

export const links = () => {
    const lineOne = document.querySelector('.navigation__one');
    const lineTwo = document.querySelector('.navigation__two');
    const lineThree = document.querySelector('.navigation__three');
    const items = document.querySelectorAll('.navigation__small li');
   console.log(items);
    const screen = document.querySelector('.navigation__small');
    const hamburger = document.querySelector('.navigation__container');

    const tl = gsap.timeline({paused: true, reversed: true});

    gsap.globalTimeline.timeScale(.7);


    tl
    .to(lineOne, { y:'-9px', transformOrigin: '50% 50%', duration: .2})
    .to(lineThree, { y:'9px', transformOrigin: '50% 50%', duration: .2}, '-=0.2')
    .to(lineTwo, {scale:0.1, transformOrigin: '50% 50%', duration: .3}, '-=.3')
    .add('rotate')
    .to(lineOne, {y:'5', duration: .3})
    .to(lineThree, {y:'-5',  duration: .3}, '-=.3') 
    .to(lineOne, {rotationZ:45, transformOrigin: '50% 50%', duration: .3})
    .to(lineThree, {rotationZ:-45, transformOrigin: '50% 50%',  duration: .3}, '-=.3') 
    .fromTo(screen,{ css: {width: "0%"}, ease: "Circ.easeIn"}, { css:{width: "100%"}, ease: "Circ.easeOut" , duration: .5}, '-=.6')
    .to(items, { css: {display: "block", x: 0, opacity: 1}, ease: "Power1.easeOut", duration: .3}, '-=.2')
    
    hamburger.addEventListener('click', () => {
        if (tl.reversed()) {
            tl.play();
        } else {
            tl.reverse();
        }    
    });

    items.forEach((item)  => {
        item.addEventListener('click',() => {
            
            tl.reverse();
            
        });
    }) 

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
    }; 
};
