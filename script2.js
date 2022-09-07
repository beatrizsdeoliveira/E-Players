//jQuery
$(document).ready(function () {

    $(".btn-buy").click(function(){
        alert("Este produto não está disponível");
    });
    
});

function mostraEscondeMenu() {
    let navbar = document.querySelector(".menu");
    navbar.classList.toggle("mostraEscondeMenu");
}

