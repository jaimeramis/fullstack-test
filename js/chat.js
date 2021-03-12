'use strict'
window.addEventListener("load",()=>{

//TARGET ELEMENTS
let message=document.querySelector("#message");
let chatContent=document.querySelector("#chat-content");

//EVENT
message.addEventListener("keydown", (ev)=> {
    if (ev.key === 'Enter' && message.value.length>0) {
        console.log("Enter event WORKS");

        //CREATE ELEMENTS
        getElements();
        message.value=""; //RESET VALUE TO 0 WHEN THE EVENT WORKS
    }
});

//FUNCTION THAT CREATE ELEMENTS OF THE CHAT
const getElements=()=>{
    let cajaPadre=document.createElement("DIV");
        cajaPadre.classList.add("chat-content");

    let cajaUser=document.createElement("DIV");
        cajaUser.classList.add("user-message2");
        cajaUser.innerHTML=`<p>${message.value}</p>`;

    
    let cajaImage=document.createElement("A");
        cajaImage.setAttribute("href","index.html");
        cajaImage.classList.add("user-profile-img2");

        chatContent.append(cajaPadre);
        cajaPadre.append(cajaUser);
        cajaPadre.append(cajaImage);
}
});//LOAD