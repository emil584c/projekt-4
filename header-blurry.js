//Registrere hvor mange pixels der bliver scrollet
let scrollpos = window.scrollY

const header = document.querySelector("#header")

//definere hvornår headeren skal skifte style
const scrollChange = 15

//variabler med functioner der tilføjer og fjerner class="header-glass"
const addClass = () => header.classList.add("header-glass")
const removeClass = () => header.classList.remove("header-glass")

//eventlistener der lytter efter om scroll finder sted og hvor meget
window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

//Ved scroll mere en eller ligmed scroll positionen tilføjes class ellers fjernes den
  if (scrollpos >= scrollChange) { addClass() 
}
  else { removeClass(); }
}
)