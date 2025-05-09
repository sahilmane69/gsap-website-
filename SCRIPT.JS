let tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}})
let flagPoles = CSSRulePlugin.getRule(".card:before");

tl.to('h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})
tl.to('.form', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=2")
tl.from('.card', { scaleY: 0, stagger: .2}, "-=2")
tl.from(flagPoles, {  stagger: 1, opacity: 0, transform: 'translateY(100px)' }, "-=2")
tl.to('.title, .desc', { stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=2")
tl.to('footer', { opacity: 1}, "-=2")

var path = "M 10 100 Q 500 100 990 100"
var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
          path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

          gsap.to("svg path",{
               attr:{d:path},
               duration:0.3,
               ease:"power3.out"
           })
})

string.addEventListener("mouseleave",function(){
     gsap.to("svg path",{
          attr:{d:finalPath},
          duration:1.0,
          ease:"elastic.out(1,0.2)"
     })

})
const scroll = new LocomotiveScroll({
     el: document.querySelector('#main'),
     smooth: true
 });

// Creating the custom cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// GSAP Animation for cursor movement
gsap.to(cursor, {
  x: 0,
  y: 0,
  duration: 0.1,
  ease: 'power1.out'
});

// Track the mouse position and animate the cursor
document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: 'power1.out'
  });
});
