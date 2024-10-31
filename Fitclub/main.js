
const btnProgram = document.querySelectorAll('.btn_programas');

btnProgram.forEach(button => {
    const img = button.querySelector('img'); 
    const imgNormal = button.getAttribute('img-normal'); 
    const imgHover = button.getAttribute('img-hover');

    button.addEventListener('mouseover', () => {
        img.src = imgHover;
    });

    button.addEventListener('mouseout', () => {
        img.src = imgNormal;
    });
});

const btnRedes = document.querySelectorAll('.btn_redes');

btnRedes.forEach(button => {
    const img = button.querySelector('img'); 
    const imgNormal = button.getAttribute('img-normal'); 
    const imgHover = button.getAttribute('img-hover');

    button.addEventListener('mouseover', () => {
        img.src = imgHover;
    });

    button.addEventListener('mouseout', () => {
        img.src = imgNormal;
    });
});


document.addEventListener("scroll", function () {
    const header = document.querySelector(".cabecalho");

    if (window.scrollY > 5) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const voltarInicio = document.getElementById('voltarInicio');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'block'; // Exibir o botão
    } else {
        scrollToTopBtn.style.display = 'none'; // Ocultar o botão
    }
};

voltarInicio.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
};