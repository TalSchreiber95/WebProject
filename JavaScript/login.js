const myf= document.querySelector("#loginForm");
const msg= document.querySelector("#msg");
const username= document.querySelector("#Uinput");
const password= document.querySelector("#Pinput");
const userlist= document.querySelector("#users");
const div= document.querySelector("#divid");
const btn = document.querySelector(".login-in");
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(checkUsername(username.value) && chackPassword(password.value))
    {
        const li=document.createElement('li');
        li.classList.add("users")
        li.appendChild(document.createTextNode(username.value));
        userlist.appendChild(li);
        username.value='';
        password.value='';
    }
    else{
        msg.style.color="red";
        msg.textContent="not valid args!";
        setTimeout(() => msg.remove(), 3000);
    }

});
function checkUsername(user){
    if(user===''){
        return false;
    }
    else{
        return true;
    }
}
function chackPassword(pass){
    if(pass===''){
        return false;
    }
    else{
        return true;
    }
}