window.addEventListener("DOMContentLoaded",load);

function load (){
  console.log("js linket")

  document.querySelector("#click-bell").addEventListener("click",showDropdown); 
}

// classList giver adgang til at se og manipulere et elements classes

// Json array der indeholder notifikations content
const notificationArray = [
  {
    header: "Husk Brætspilscafe d. 15/11",
    text: "Brætspilscafe starter om en uge",
    posted: "3 timer siden",
  },
  {
    header: "Din begivenhed J-dag blev afholdt",
    text: "Vil du fortælle andre om hvordan det gik?",
    posted: "I går 18.00",
  },
  {
    header: "Du deltog til Semesterfest ",
    text: "Vil du dele en kommentar om din aften?",
    posted: "1 Okt. 03.00",
  },
];

let showNotifications = false;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDropdown() {
  document.querySelector("#notifications").classList.toggle("show");

  if (showNotifications) {
    showNotifications = false;
    removeNotifications();
  } else {
    showNotifications = true;
    displayNotifications();
  };
};

function removeNotifications () {
  document.querySelector("#notification-section").innerHTML = "";
};

function displayNotifications () {
  notificationArray.forEach((notification) => {
    
    const clone = document.querySelector("#notification-template").content.cloneNode(true);

    clone.querySelector(".notification-header").textContent = notification.header;
    clone.querySelector(".notification-text").textContent = notification.text;
    clone.querySelector(".date-time").textContent = notification.posted;

    document.querySelector("#notification-section").appendChild(clone);
  });
};