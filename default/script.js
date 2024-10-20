const transition_el = document.querySelector('.transition');

window.onload = (e) => {
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
    
        anchor.addEventListener('click', e => {
            e.preventDefault();
            transition_el.classList.add('is-active');
            let target = e.target.href;
            setTimeout(() => {
                window.location.href = target;
            }, 500)
            

        })
    }
}

const menuBtn = document.getElementById('menuBtn');
const menuBtnRemover = document.getElementById('menuBtnRemover');
const leftBar = document.querySelector('.leftBar');

menuBtn.addEventListener('click', () => {
    leftBar.classList.toggle('active');    
});
menuBtnRemover.addEventListener('click', () => {
    leftBar.classList.toggle('active');  
});

function index() {
    transition_el.classList.add('is-active');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500)
}
function contato() {
    transition_el.classList.add('is-active');
    setTimeout(() => {
        window.location.href = 'contato.html';
    }, 500)
}
function carrinho() {
    transition_el.classList.add('is-active');
    setTimeout(() => {
        window.location.href = 'carrinho.html';
    }, 500)
}
function perfil() {
    transition_el.classList.add('is-active');
    setTimeout(() => {
        window.location.href = 'perfil.html';
    }, 500)
}
function sobreNos() {
    transition_el.classList.add('is-active');
    setTimeout(() => {
        window.location.href = 'sobreNos.html';
    }, 500)
}
function compra() {
    transition_el.classList.add('is-active');
    setTimeout(() => {
        window.location.href = 'compra.html';
    }, 500)
}



const headerUpInput = document.querySelector('.headerUpInput');
const headerUp = document.querySelector('.headerUp');


function inputAppear() {
    setTimeout(() => {
        headerUpInput.classList.remove('opacity');
    }, 500)

    headerUp.classList.add('opacity');
    
    setTimeout(() => {
        headerUp.classList.add('displayNone');
    }, 500);

    headerUpInput.classList.add('display');
};
function inputDisappear() {
    setTimeout(() => {
        headerUpInput.classList.remove('display');
    }, 500)

    headerUp.classList.remove('displayNone');
    
    setTimeout(() => {
        headerUp.classList.remove('opacity');
    }, 500);

    headerUpInput.classList.add('opacity');
};