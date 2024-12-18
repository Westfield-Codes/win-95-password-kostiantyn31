
function setup() {
    let buttons = document.getElementById("buttons");
    let ok = document.createElement("button");
    ok.innerHTML="ok";
    buttons.appendChild(ok);
    ok.addEventListener("click", checkPassword);
    let cansel = document.createElement("button");
    cansel.innerHTML="cansel";
    buttons.appendChild(cansel);
}

function checkPassword() {
    let dialogs = document.getElementById("dialogs");
    let userName = dialogs.querySelector(':nth-child(2)').value;
    let password = dialogs.querySelector(':nth-child(4)').value;
    alert(userName);
}