document.addEventListener('DOMContentLoaded', () => {

    const gatoThorImg = document.getElementById('gato-thor');
    const gatoLunaImg = document.getElementById('gato-luna');

    const wrapperThor = document.getElementById('wrapper-thor');
    const wrapperLuna = document.getElementById('wrapper-luna');
    
    gatoThorImg.addEventListener('click', () => {
        wrapperThor.classList.add('ativo');
        wrapperLuna.classList.remove('ativo');
    });

    gatoLunaImg.addEventListener('click', () => {
        wrapperLuna.classList.add('ativo');
        wrapperThor.classList.remove('ativo');
    });

    AOS.init({
        duration: 800,
    });

    const thorCardInner = document.getElementById('thor-card-inner');
    const btnVirarThor = document.getElementById('btn-virar-thor');
    const thorCardBack = document.querySelector('#historia-thor .flip-card-back');

    btnVirarThor.addEventListener('click', () => {
        thorCardInner.classList.toggle('is-flipped');
    });

    thorCardBack.addEventListener('click', () => {
        thorCardInner.classList.remove('is-flipped');
    });

})
