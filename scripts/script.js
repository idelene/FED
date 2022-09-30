// // JavaScript Document
console.log("hello, vouge, let you body music");

 console.log("hello, vouge, let you body move to music");





 const body = document.body;
 var revealedMenu = document.querySelector("header section nav");
 var hamburgerMenuKnop = document.querySelector("header > section button:first-of-type");
 var scrollUp = "scroll-up";
var scrollDown = "scroll-down";
var lastScroll = 0;
  
 hamburgerMenuKnop.addEventListener("click", () => {
    revealedMenu.classList.add("zichtbareMenu");
 })












 var hamburgerMenuKruis = document.querySelector("#sluitknop");

 console.log("header > section nav.zichtbareMenu button");
 
 hamburgerMenuKruis.addEventListener("click", sluitMenu , console.log("not working??"));
 
 
 
 function sluitMenu(){
     hamburgerMenuKruis  = document.querySelector("header > nav")
     
     revealedMenu.classList.remove("zichtbareMenu")
   }
   



 var header = document.querySelector(".shyheader");





 
//  let didScroll = false;

//  window.onscroll = () => didScroll = true;

// function removeHeader (){

//     if ( didScroll = true ) {
//         header.classList.add("scroll-Down");
        
//         console.log('Someone scrolled me!')
//     }

// }

// removeHeader ()

//  window.onscroll = () => didScroll = true;
 
// setInterval(() => {
//     if ( didScroll ) {
//         didScroll = false;
//         console.log('Someone scrolled me!')
//     }
// }, 250);

  
 window.addEventListener("scroll", () => {
   var currentScroll = window.pageYOffset;
   if (currentScroll <= 0) {
    header.classList.add(scrollDown);
    console.log("removing header workks??2 no")
     return;


   }

   console.log("removing header workks??")
  
   if (currentScroll > lastScroll && !header.classList.contains(scrollDown)) {
     // down
     header.classList.remove(scrollUp);
     header.classList.add(scrollDown);
     console.log("removing header workks??")
   } else if (
     currentScroll < lastScroll &&
     header.classList.contains(scrollDown)
   ) {
     // up
     header.classList.remove(scrollDown);
     header.classList.add(scrollUp);
     console.log("removing header workks??2")
   }
   lastScroll = currentScroll;
 });







// var hamburgerMenuKnop = document.querySelector("header > section button:first-of-type");
// var revealedMenu = document.querySelector("header section nav");

// hamburgerMenuKnop.addEventListener("click", toggleMenu);
    


// function toggleMenu() {
//     revealedMenu.classList.toggle("zichtbareMenu");

// }

