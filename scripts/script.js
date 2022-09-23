// // JavaScript Document
 console.log("hello, vouge, let you body move to music");



var hamburgerMenuKnop = document.querySelector("header section > img");
var revealedMenu = document.querySelector("header section nav");

hamburgerMenuKnop.addEventListener("click", toggleMenu);
    


function toggleMenu() {
    revealedMenu.classList.toggle("zichtbareMenu");

}

var hamburgerMenuKruis = document.querySelector("header section nav div")

hamburgerMenuKruis.addEventListener("click", sluitMenu)


function sluitMenu(){
    hamburgerMenuKruis  = document.querySelector("header > nav")
    
    revealedMenu.classList.remove("zichtbareMenu")
  }
  