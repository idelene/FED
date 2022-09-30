 console.log("neinnn");
 

 const cards = document.querySelector(".animate");

 const observer = new IntersectionObserver(entries => {
     
     entries.forEach(entry => {
         entry.target.classList.toggle("show", entry.isIntersecting)
     })
     console.log(entries);
     
 })
 
 cards.forEach(card => {
     observer.observe(cards[0]);
 })
 
 
 console.log("randos");