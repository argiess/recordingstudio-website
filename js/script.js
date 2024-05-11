const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// SCROLL EFFECT
const header = document.querySelector(".header");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 0){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
})

// HIDE SHOW HEADER SCROLL
// let lastScrollTop = 0;

// window.addEventListener("scroll", ()=>{
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if(scrollTop > lastScrollTop){
//         header.style.top = "-100px";
//     }
//     else{
//         header.style.top = "0";
//     }
//     lastScrollTop = scrollTop;
// })