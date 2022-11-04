// slide effect
const observer = new IntersectionObserver ((entries) =>{
    entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




// filteret


// let indicator = document.querySelector('.indicator').children;
// let main = document.querySelector('.items').children;

// for (let i = 0; i < indicator.length; i++)
// {
//   indicator [i].onclick = function(){
//     for(let x=0; x < indicator.length; x++){
//       indicator[x].classList.remove('active');
//     }
    
//     this.indicator[x].classList.add('active');
//     const displayItems = this.getAttribute('data-filter');


//     for (let z = 0; x < main.length; z++){
//       main [z].style.transform = 'scale(0)';
//       setTimeout(() => {
//         main[z].style.display = 'none'}, 500);

//         if ((main[z].getAttribute('data-category') == displayItems || displayItems == 'all')){

//             main [z].style.transform = 'scale(0)';
//         setTimeout(() => {
//           main[z].style.display = 'block'}, 500);
//         }
//     }
//   }
// }


// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})





const statuss = ['Tilmeld', 'Afmeld'];
const tilmeldKnap = document.querySelectorAll(".zipzap");

let values = Array.prototype.map.call(tilmeldKnap, function(el) {
    return el.textContent;
});
console.log(values);

let body = document.body

body.addEventListener('load', () => {
    for (let i = 0; i < values.length; i++) {
        values[i].addEventListener("click", function() {
            values[i].textContent = statuss[1];
        });
      } 
});