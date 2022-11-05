window.addEventListener("DOMContentLoaded",load);

//Registrere hvor mange pixels der bliver scrollet
let scrollposition = window.scrollY

const header = document.querySelector("#header")

//definere hvornår headeren skal skifte style
const scrollChange = 15

//Functioner der tilføjer og fjerner class="header-glass"
function addClass(element){
  element.classList.add("header-glass");
}

function removeClass(element){
  element.classList.remove("header-glass");
}

function load (){
  console.log("js linket")

  //eventlistener der lytter efter om scroll finder sted og hvor meget
  window.addEventListener('scroll', (e) => { 
    scrollposition = window.scrollY;

    //Ved scroll mere en eller ligmed scroll positionen tilføjes class ellers fjernes den
    if (scrollposition >= scrollChange) { 
      addClass(header) 
    } 
    else { 
      removeClass(header) 
    }
  });
};
