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

})

AOS.init();