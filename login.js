window.addEventListener("DOMContentLoaded",load);

// Json Javascript object notation --> Et array med objekter i.
const loginData = [
    {"brugernavn":"abc12345","kodeord":"kodeord1"},
    {"brugernavn":"def6789","kodeord":"kodeord2"}
];

function load(){
    console.log("JS VIRKER!");

    // Eventlistener som reagerer på at man klikker på "login" knappen. (e) for det her event.
    // => arrowfunction (kan få lov at lave en function uden et navn, men den kan ikke kaldes senere, den virker kun lige her)
    // PreventDefault() fordi der er en default på typen submit som vi gerne vil override.
    document.querySelector("#login-button").addEventListener("click", (e) => {
    e.preventDefault();

    // Variabler for at ungå at skrive det i funktionen.
    // queryselector er standarden at bruge, den kan bruges både til at target elementer ved brug af tags, id´er og class
    const usernameInput = document.querySelector("#username-input").value;
    const passwordInput = document.querySelector("#password-input").value;

    // vi bruger const fordi at det ikke er noget der skal ændre sig, vi bruger let når vi har en værdig vi ved der skal ændre sig

    for(let i = 0; i < loginData.length; i++){        
        if (loginData[i].brugernavn == usernameInput && loginData[i].kodeord == passwordInput){
            window.location = "index.html";
            break; // Stopper loopet hvis if-statement er true og den når til break (kan også bruges til andre ting)
        } else {
            document.querySelector("#invalid-input").innerHTML = "Brugernavn eller kodeord er forkert"; // Targeter en paragraf med invalid-input id, og replacer det med teksten.
        }
    }
});
};

// ingen kode der bare "hænger" uden at være i en function, det er generelt ikke godt. man kan ikke styrre hvornår det bliver kørt.
// den må/kan ikke queryselect hvis dom ikke er loaded, derfor er det vigtigt at eventlistenern er inde i load functionen.

