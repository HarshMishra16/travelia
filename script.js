const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load" ,()=>{
    preloader.classList.add("remove")
    
})

/* add event on multiple elements */
const addEventOnElements = function(elements,eventType,callback){
    for(let i = 0 , len = elements.length; i<len ; i++){
        elements[i].addEventListener(eventType , callback);
    }
}
/* navbar ttoggler */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const ovelay = document.querySelector("[data-overlay");

const toggleNav = function(){
    navbar.classList.toggle("active");
    ovelay.classList.toggle("active");
    document.body.classList("nav-active")
}

addEventOnElements(navTogglers , "click" , toggleNav);


const header = document.querySelector("[data-header");

window.addEventListener("scroll" , function(){
    header.classList[window.scrollY>100 ? "add" : "remove" ]("active")
})