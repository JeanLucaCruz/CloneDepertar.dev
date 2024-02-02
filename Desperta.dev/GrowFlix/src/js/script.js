const growcastVideos = document.getElementById("growcast-videos");
const webinarVideos = document.getElementById("webinar-videos");
const uxUiVideos = document.getElementById("ux-ui-videos");
const geralVideos = document.getElementById("diversos-videos");
const videoModal = new bootstrap.Modal("#video-modal",{
    keyboard: false,
});
const iframe = document.getElementById("iframe-video")


function mostraTitulo(element) {
    element.classList.add("titulo-hover");
    element.children[1].style.display = "block";
  }
  
  function apagaTitulo(element) {
    element.classList.remove("titulo-hover");
    element.children[1].style.display = "none";
  }
  
   
  function renderizarVideos(categoria) {
    const container = document.getElementById(`${categoria}-videos`);
    const videosFiltrados = videos.filter(video => video.category === categoria);

    videosFiltrados.forEach(video => {
        const card = document.createElement('div');
        card.className = 'col-md-3';
        card.classList.add('card-div');
        card.innerHTML = `
            <div class="card" style="width: 20rem;" onmouseenter="mostraTitulo(this)" onmouseleave="apagaTitulo(this)">
                <img src="${video.img}" class="card-img-top img-fluid">
                <div class="card-body bg-black border-0" style="display:none">
                    <button data-link="${video.link}" onclick="abrirVideo(this)" id="botao-video" class="btn gap-0 border-0 text-light text-decoration-none d-flex align-items-center justify-content-around">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="play-svg bi bi-play-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                        </svg>
                        <span class="text-light fs-6 mx-2">${video.title}</span>
                    </button>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

 


function abrirVideo(element){
    const link = element.getAttribute("data-link");
    iframe.innerHTML = `
    <iframe src="${link}" id="youtube-player" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
    videoModal.show();
}

const botaoFechar = document.getElementById("botao-fechar");
botaoFechar.addEventListener('click', function() {
    let video = document.getElementById('youtube-player');
    video.remove();
  });


  

renderizarVideos('growcast');
renderizarVideos('webinar');
renderizarVideos('ux-ui');
renderizarVideos('diversos');