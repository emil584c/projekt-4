// slide effect
const observer = new IntersectionObserver ((entries) =>{
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));






// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})




// tilmeld afmeld
const tilmeldKnap = document.querySelectorAll(".tilmeld-afmeld");

let values = Array.prototype.map.call(tilmeldKnap, function(el) {
    return el;
});
console.log(values);





values.forEach(buttonText => {
    buttonText.addEventListener('click', function handleClick(event) {
        console.log('box clicked', event);
      if (this.innerHTML == "Tilmeld"){
        this.innerHTML = "Afmeld";
      }
      else{
        this.innerHTML = "Tilmeld"
      }
        
     });
    });
