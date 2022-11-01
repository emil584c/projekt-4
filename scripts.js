
// slide effect
const observer = new IntersectionObserver ((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



let indicator = document.querySelector('.indicator').children;
let main = document.querySelector('.items').children;

for (let i = 0; i < indicator.length; i++)
{
  indicator [i].onclick = function(){
    for(let x=0; x < indicator.length; x++){
      indicator[x].classList.remove('active');
    }
    
    this.indicator[x].classList.add('active');
    const displayItems = this.getAttribute('data-filter');


    for (let z = 0; x < main.length; z++){
      main [z].style.transform = 'scale(0)';
      setTimeout(() => {
        main[z].style.display = 'none'}, 500);

        if ((main[z].getAttribute('data-category') == displayItems || displayItems == 'all')){

            main [z].style.transform = 'scale(0)';
        setTimeout(() => {
          main[z].style.display = 'block'}, 500);
        }
    }
  }
}