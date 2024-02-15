 gsap.set(".sit",{
  y:15,
  opacity:0
 })
 gsap.set(".right img",{
  opacity:0,
  scale:0.4,
  y:30
 })
 
 let s=gsap.timeline();

 s.from(".left ,.right",{
   width:0,
   duration:1,
   ease:Expo.easeInOut,
   stagger:1
 })
 s.to(".sit",{
  duration:0.5,
 opacity:1,
  y:0,
  stagger:0.1,
  delay:-1
 })
 s.to(".right img",{
    opacity:1,
    y:0,
    scale:1,
    duration:1,
    delay:-1
 })