const botaoTrailer = document.querySelector('.botao-trailer');

//pegar a modal (video trailer)
const modal = document.querySelector('.modal');

//fechar o modal
const fecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video')

function alternarModal(){
    modal.classList.toggle("aberto");
}

//aparecer o modal
//acionar o botão do trailer ao clicar
botaoTrailer.addEventListener('click', () => {
    alternarModal();
    video.setAttribute("src","https://www.youtube.com/embed/cDNkh5WybZo")
})

fecharModal.addEventListener('click', () => {
    alternarModal();
    video.setAttribute("src", "");
})

//parar de tocar o audio do video do modal

