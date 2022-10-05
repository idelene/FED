// // JavaScript Document
console.log("hello, vouge, let you body music");

console.log("hello, vouge, let you body move to music");

const body = document.body;
var revealedMenu = document.querySelector("header section nav");
var hamburgerMenuKnop = document.querySelector("header > section button:first-of-type");
var scrollUp = "scroll-up";
var scrollDown = "scroll-down";
var lastScroll = 0;
var stay = window.scroll(0, 0)
var header = document.querySelector(".shyheader");



hamburgerMenuKnop.addEventListener("click", () => {
  revealedMenu.classList.add("zichtbareMenu");
})

var hamburgerMenuKruis = document.querySelector("#sluitknop");

console.log("header > section nav.zichtbareMenu button");

hamburgerMenuKruis.addEventListener("click", sluitMenu, console.log("not working??"));


function sluitMenu() {
  hamburgerMenuKruis = document.querySelector("header > nav")

  revealedMenu.classList.remove("zichtbareMenu")
}



window.addEventListener("scroll", () => {
  var currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.add(scrollDown);
    console.log("removing header workks??2 no")
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

