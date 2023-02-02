let header = document.querySelector(".list-nav");
let nav = document.querySelector("header")
let menu = document.querySelector(".bx-menu");
let closee = document.querySelector(".bx-menu-alt-right");
let sec1 = document.querySelector(".intro")
menu.addEventListener("click", function(){
    header.classList.add("showheadr")
  closee.addEventListener("click",function(){
    header.classList.remove("showheadr")
  })
})
// stiky nav bar
let h = new IntersectionObserver(function (entries) {
  let [entri] = entries;
  console.log(entri)
  if (!entri.isIntersecting) {
    nav.classList.add("stic")
  } else {
    nav.classList.remove('stic');
  }
},(options = {
  root: null,
  threshold: 0.2,}));
let observer = h.observe(sec1);

// slide
let slide = document.querySelectorAll(".slide")
let textes = document.querySelectorAll(".text")
let left = document.querySelector(".bx-chevron-left")
let right = document.querySelector(".bx-chevron-right")
let currentsld = 0;
let maxsld = slide.length - 1;
left.addEventListener("click", function () {
  currentsld++;
  if (currentsld == maxsld + 1) {
    currentsld = 0;
  }
  slide[currentsld].classList.remove("hideslide");
  slide[maxsld - currentsld].classList.add("hideslide");
});
right.addEventListener("click", function () {
  if (currentsld == 0) {
    currentsld = maxsld + 1;
  }
  currentsld--;
  slide[currentsld].classList.remove("hideslide");
  slide[maxsld - currentsld].classList.add("hideslide");
});
// smoth scrool
let button1 = document.querySelectorAll(".contact")
let button2 = document.querySelectorAll(".suit")
let contacts = document.querySelector(".contactus")
let sec = document.querySelector(".solution")
button1.forEach(function(b){
  b.addEventListener('click',function(e){
   e.preventDefault()
   contacts.scrollIntoView({behavior:'smooth'})
   console.log(sec)
 })
})  
button2.forEach(function(b){
  b.addEventListener('click',function(e){
   e.preventDefault()
   sec.scrollIntoView({behavior:'smooth'})
   console.log(sec)
 })
})  
// coutdwon
let sec2 = document.querySelector(".Statistic")
let isFirstTime = true
let a = new IntersectionObserver(
  function (entries) {
    let [entri] = entries;
    if(!entri.isIntersecting) return
    if(entri.isIntersecting == true && isFirstTime === true){
    let counters = document.querySelectorAll(".number")
    let interval = 5000
    counters.forEach(function(count){
      let start = 0
      let end = count.dataset.num
      let duration = Math.floor((interval/end))
     let a = setInterval(function(){
      start+= 1 
      count.textContent = start
      if(start == end){
        clearInterval(a)
        isFirstTime = false
        console.log(isFirstTime)
      }
    },duration)
  })
  }
  console.log("reached")
  },
  (options = {
    root: null,
    threshold: 0.2,
  })
);
let observe = a.observe(sec2);