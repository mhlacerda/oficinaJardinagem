const btnLogo = document.querySelector(".logo");
const itensMenu = document.querySelectorAll(".menu__conteudo li");
const btnFolha = document.querySelector(".fa-seedling");
const menu = document.querySelector(".menu");
const menuFlutuante = document.querySelector(".menu-flutuante");

// btnLogo.addEventListener ("click", ()=>{
//   if (window.innerWidth < 940){
//     menu.classList.toggle("escondido");
//   } 
// });

// btnFolha.addEventListener ("click", ()=>{
//   if (window,innerWidth >= 940){
//     menu.classList.toggle("escondido");
//   }
// });

btnLogo.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

btnFolha.addEventListener('click', () => {
  menu.classList.toggle('ativo');
});

menuFlutuante.addEventListener("click", () =>{
  menu.classList.toggle('ativo');
});

const linkMenu = document.querySelector(".menu__texto"); /*são as li*/

itensMenu.forEach(item => {
  item.addEventListener("click", ()=>{
    menu.classList.remove("ativo");
  });
});

