window.addEventListener("DOMContentLoaded",load);
function load(){
    console.log("JS VIRKER!");
}


let loginData = [
    {"brugernavn":"abc12345","kodeord":"kodeord1"},
    {"brugernavn":"def6789","kodeord":"kodeord2"}
];

document.querySelector("#login-button").addEventListener("click", (e) => {
    e.preventDefault();

    const usernameInput = document.querySelector("#username-input").value;
    const passwordInput = document.querySelector("#password-input").value;

    let login = false;

    for(let i = 0; i < loginData.length; i++){
        console.log(usernameInput);
        
        if (loginData[i].brugernavn == usernameInput && loginData[i].kodeord == passwordInput){
            login = true;
            break;
        } else {
            document.querySelector("#invalid-input").innerHTML = "Brugernavn eller kodeord er forkert";
        }
    }
});