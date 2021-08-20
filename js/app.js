

new TypeIt(".type", {
    speed :200,
    loop: true,
    waitUntilVisile :true,
})
.type("Min Pyae Sone", {dealay :400})
.pause (500)
.delete(9)

.go();

// gsap)
gsap.from(".navbar-brand", {opacity:1,duration: 1,delay:0.5, y: -10});
gsap.from(".navbar-toggler", {opacity:2,duration: 1,delay:1, x: -20});
gsap.from(".about-img", {opacity:0,duration: 1,delay:1.5, x: -200});
gsap.from(".content-home h3", {opacity:0,duration: 1,delay:2, y: -50});
gsap.from(".content-home h1", {opacity:0,duration: 1,delay:2.5, y: -40});
gsap.from(".content-home h4", {opacity:0,duration: 1,delay:3, y: -30});
gsap.from(".nav-item", {opacity:0,duration: 1,delay:1.2, y: 50,stagger:0.2});


AOS.init({
    duration:1200,
});








