const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const fristDiv = document.querySelector("#first");
const viewTodo = document.querySelector("#todopage");
const viewStatusSay = document.querySelector("#align-status-text");
const viewStatus = document.querySelector("#status-div");
const viewmusicgree = document.querySelector("#musicsay");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
function loginSumbit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greetings(username);
}

function greetings(username){
    greeting.innerHTML = `Welcome ${username}`;    //간단하게 바꿀수 있다. + 기호 사용 X
    greeting.classList.remove(HIDDEN_CLASSNAME);
    viewTodo.classList.remove(HIDDEN_CLASSNAME);
    viewStatus.classList.remove(HIDDEN_CLASSNAME);
    viewStatusSay.classList.remove(HIDDEN_CLASSNAME);
    viewStatus.style.display = "flex";
    viewStatusSay.style.display = "flex";
    viewmusicgree.classList.remove(HIDDEN_CLASSNAME);
    viewmusicgree.style.display = "flex";
}
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSumbit);
}else{
    fristDiv.style.removeProperty("display");
    fristDiv.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    greetings(savedUserName);
}

