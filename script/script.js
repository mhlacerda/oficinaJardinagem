const btnLogo = document.querySelector(".logo");
const menu = document.querySelector(".menu__conteudo");
const btnFolha = document.querySelector(".fa-seedling");

btnLogo.addEventListener ("click", ()=>{
  if (window.innerWidth < 940){
    menu.classList.toggle("escondido_menu");
  } 
});

btnFolha.addEventListener ("click", ()=>{
  if (window,innerWidth >= 940){
    menu.classList.toggle("escondido_menu");
  }
});

const itensMenu = document.querySelectorAll(".menu__conteudo li");
const linkMenu = document.querySelector(".menu__texto");

itensMenu.forEach(linkMenu => {
  linkMenu.addEventListener("click", ()=>{
    menu.classList.toggle("escondido_menu");
  });
});