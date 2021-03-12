'use strict'
window.addEventListener("load",()=>{
    
    //TARGET ELEMENTS TO CHANGE
    let background=document.querySelector("#background-change");
    let btn=document.querySelector("#btn-friends");
    let starChange=document.querySelector("#star-change");
    let starTarget=document.querySelector("#star-target");

    //EVENT COLOR CHANGE:
    btn.addEventListener("click",()=>{
        btn.classList.toggle('btn-colorChange');
        background.classList.toggle('body-colorChange');
    });

    //STAR COLOR CHANGE EVENT
    starChange.addEventListener("click",()=>{
        starTarget.classList.toggle("star-colorChange");
    });
});