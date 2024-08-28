const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
});

const ingredientes = document.querySelector("btn");

function mostrarIngredientes(){
    let titulo = document.querySelector(".ingredientesHamburguer")
    document.querySelector('.ingredientesHamburguer').style.display =  "inline-block"

    var remove = document.querySelector('.btn')
     document.querySelector('.btn').style.display =  "none"
    var remove = document.querySelector('.titulo')
     document.querySelector('.titulo').style.display =  "none"
}

function removerCardapio(){
    let ingredientes = document.querySelector(".ingredientesHamburguer");
    ingredientes.style.display = "none"; 

    var remove = document.querySelector('.btn')
    document.querySelector('.btn').style.display =  "inline-block"
   var remove = document.querySelector('.titulo')
    document.querySelector('.titulo').style.display =  "inline-block"

}


