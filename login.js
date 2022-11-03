window.addEventListener("DOMContentLoaded",load);
function load(){
    console.log("JS VIRKER!");
}


let loginData = [
    {"brugernavn":"abc12345","kodeord":"kodeord1"},
    {"brugernavn":"def6789","kodeord":"kodeord2"}
];

const usernameInput = document.querySelector("#username-input").value
const passwordInput = document.querySelector("#password-input").value

document.querySelector("#login-button").addEventListener("click", (e) => {
    e.preventDefault();

    let login = false;

    for(let i = 0; i < loginData.length; i++){
        if (loginData.brugernavn == usernameInput && loginData.kodeord == passwordInput){
            login = true;
            break;
        } else {
            document.querySelector("#invalid-input").innerHTML = "Brugernavn eller kodeord er forkert";
        }
    }
});