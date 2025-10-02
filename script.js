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

    
    const thorCardInner = document.getElementById('thor-card-inner');
    const btnVirarThor = document.getElementById('btn-virar-thor');
    const thorCardBack = document.querySelector('#historia-thor .flip-card-back');
    
    btnVirarThor.addEventListener('click', () => {
        thorCardInner.classList.toggle('is-flipped');
    });
    
    thorCardBack.addEventListener('click', () => {
        thorCardInner.classList.remove('is-flipped');
    });
    
    const lunaCardInner = document.getElementById('luna-card-inner');
    const btnVirarLuna = document.getElementById('btn-virar-luna');
    const lunaCardBack = lunaCardInner.querySelector('.flip-card-back');
    
    btnVirarLuna.addEventListener('click', () => {
        lunaCardInner.classList.toggle('is-flipped');
    });
    
    lunaCardBack.addEventListener('click', () => {
        lunaCardInner.classList.toggle('is-flipped');
    });
    
})

document.addEventListener('DOMContentLoaded', () => {
    const thorWrapper = document.getElementById('wrapper-thor');
    const lunaWrapper = document.getElementById('wrapper-luna');
    
    function desativarTodos() {
        thorWrapper.classList.remove('ativo');
        lunaWrapper.classList.remove('ativo');
    }
    
    thorWrapper.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        desativarTodos();
        thorWrapper.classList.add('ativo');
    });
    
    lunaWrapper.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        desativarTodos();
        lunaWrapper.classList.add('ativo');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    const modalVideoIrmaos = document.getElementById('modalVideoIrmaos');
    const videoPlayerIrmaos = document.getElementById('videoPlayerIrmaos');
    
    modalVideoIrmaos.addEventListener('shown.bs.modal', () => {
        videoPlayerIrmaos.play();
    });
    
    modalVideoIrmaos.addEventListener('hidden.bs.modal', () => {
        videoPlayerIrmaos.pause();
    });
    
});

document.addEventListener('DOMContentLoaded', function () {

    AOS.init({
        disable: 'mobile',
        duration: 800,
        once: true
    });

    if (window.innerWidth < 768) {
        const gatosWrapper = document.querySelectorAll('.gato-wrapper');
        gatosWrapper.forEach(wrapper => {
            wrapper.addEventListener('click', function (event) {
                event.preventDefault();
                const isAlreadyActive = this.classList.contains('mobile-active');
                gatosWrapper.forEach(g => g.classList.remove('mobile-active'));
                if (!isAlreadyActive) {
                    this.classList.add('mobile-active');
                }
            });
        });

        const cardsSignificado = document.querySelectorAll('.significado-card');
        cardsSignificado.forEach(card => {
            card.addEventListener('click', function () {
                this.classList.toggle('aberto');
            });
        });
    }
});