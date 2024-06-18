document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    container.innerHTML = `
        <div class="container bg-light py-4">
            <div class="pb-2 mb-4 text-dark border-bottom border-dark">
                <h2>Repositório: Site responsivo</h2>
            </div>
            <div class="row">
                <div class="d-flex flex-wrap">
                    <div class="flex-grow-1">
                        <h4 class="text-primary">Descrição:</h4>
                        <p>Trata-se de um modelo para uma loja virtual de carros, no qual é composto apenas pela página inicial. <br>
                        A página é composta por um cabeçalho com menu e logo, barra lateral, conteúdo e footer.<br>
                        <br>
                        Projeto da semana 2 da matéria de Desenvolvimento de Interfaces Web.
                        </p>
                        <h4 class="text-primary">Data de Criação:</h4>
                        <p>22/03/2024</p>
                        <h4 class="text-primary">Linguagem:</h4>
                        <p>HTML E CSS</p>
                    </div>
                    <div class="star">
                        <a href="#"><i class="fa-regular fa-star col-md-6" id="star">1</i></a>
                        <a href="#"><i class="fa-regular fa-user" id="user"> 2</i></a>
                    </div>
                </div>
                <div class="flex-grow-1">
                    <h4 class="text-primary">Link de Acesso:</h4>
                    <p><a href="https://github.com/Js3Silva/SITE-RESPONSIVO" target="_blank">https://github.com/Js3Silva/SITE-RESPONSIVO</a></p>
                    <p></p>
                    <h4 class="text-primary">Tópicos:</h4>
                    <div class="languages">
                        <span class="language">HTML</span>
                        <span class="language">CSS</span>
                    </div>
                </div>
            </div>
        </div>
    `;
});
