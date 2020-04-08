
// Shape move to position
function decorationAnimate() {
    let tl = gsap.timeline({onComplete:decorationRotate});
    gsap.set('.shape', {duration: 2,transformOrigin:"50% 50%"});

    tl.fromTo('.block__main-picture', {opacity:0}, {opacity: 1, duration: 0})

    tl.from('.shape-1', {duration: 2, y:-150 , rotate:"90"}, '+=5');
    tl.from('.shape-2', {duration: 2, x:"-130"}, "-=1");
    tl.from('.shape-3', {duration: 4, y: "-370", rotate:"-180"}, "-=4");
    tl.from('.shape-4', {duration: 2, rotate:"270", x: 150},"-=2");
    tl.from('.shape-5', {duration: 2, y: 150},"-=2");
    tl.from('.shape-5', {delay: 2});

    tl.timeScale(2.2);
}

// Animate it
function decorationRotate() {

    let tl = gsap.timeline({repeat: -1, repeatDelay: 1});
    gsap.set('.shape', {duration: 2,transformOrigin:"50% 50%"});

    // 0
    tl.from('.shape-1', {duration: 2, rotate:"-360" ,ease:"power1.inOut"});
    tl.to('.shape-1', {duration: 2, rotate:"-360", ease:"power1.inOut"}, "+=1");

    // 5 sec
    tl.fromTo('.shape-2', {x: 0},{duration: 2, x: 170, ease:"power2.inOut"} ,"-=5");
    tl.from('.shape-2', {duration: 2, x: -150, ease:"bounce"}, "-=2");
    

    // 10 sec
    tl.from('.shape-3', {duration: 2, rotate:"360", ease:"power1.inOut"}, "-=5");
    tl.to('.shape-3', {duration: 2, rotate:"360", ease:"power1.inOut"}, "-=2");

    // 15 sec
    tl.from('.shape-4', {duration: 2, rotate:"360",ease:"power1.inOut"}, "-=5");
    tl.to('.shape-4', {duration: 2, rotate:"360",ease:"power1.inOut"}, "-=2");
    
    // 20 sec
    tl.from('.shape-5', { duration: 2, rotate:"360",ease:"power1.inOut", transformOrigin:"50% 100%"}, "-=5");
    tl.to('.shape-5', { duration: 2, rotate:"360",ease:"power1.inOut", transformOrigin:"50% 100%"}, "-=2");

    tl.timeScale(0.6);
}

// Main animation
function anim(){
    let main = gsap.timeline();

   
    main.from('.block__header-logo', {duration: 1, opacity: "0", y: "-150", x: 150, ease: "power3"},"");
    main.from('.block__header-text', {duration: 2, opacity: "0", y: "-150", x: -150, ease: "back",onComplete:decorationAnimate});
   

    main.from('.block__main-city', {duration: 1, opacity: "0", y: "-150", x: -150, ease: "power3"},"-=0.5");
    main.from('.block__main-date', {duration: 1, opacity: "0", y: "-150", x: -150, ease: "power3"},"-=0.5");
    main.from('.block__main-registration', {duration: 1, opacity: "0", y: "-150", x: -150, ease: "power3"},"-=0.5");


    main.from('.block__main-title', {duration: 1, opacity: "0", y: "150", x: -150, ease: "power3"},"-=0.5");

    main.timeScale(1);

}

anim();