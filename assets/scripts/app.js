document.addEventListener('DOMContentLoaded', function () {
    const perfilContainer = document.getElementById('perfil-container');
    const repoContainer = document.getElementById('repo-container');
    const carouselInner = document.getElementById('carousel-inner');
    const carouselIndicators = document.getElementById('carousel-indicators');

    const githubToken = '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'; // Substitua pelo seu token de acesso pessoal do GitHub
    const githubHeaders = {
        Authorization: `token ${githubToken}`
    };

    // URLs para perfis sociais
    const linkedin_url = "https://www.linkedin.com/in/jonathan-sena13/";
    const instagram_url = "https://www.instagram.com/js3_silva/";

    // Função para carregar perfil do usuário do GitHub
    function carregarPerfilUsuario() {
        fetch('https://api.github.com/users/Js3Silva', { headers: githubHeaders })
            .then(response => response.json())
            .then(user => {
                console.log('Perfil do usuário carregado:', user);

                // Limpa o conteúdo da div perfil-container antes de adicionar os dados do perfil
                perfilContainer.innerHTML = '';

                // Cria a estrutura HTML com os dados do perfil
                const profileHTML = `
                    <div class="pb-2 mb-4 text-dark border-bottom border-dark">
                        <h2>Perfil</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${user.avatar_url}" alt="Imagem de Perfil" class="img-thumbnail" height="250px" width="250px">
                        </div>
                        <div class="col-md-8">
                            <h3>${user.name ? user.name : 'Nome não disponível'}</h3>
                            <p>${user.bio ? user.bio : 'Biografia não disponível'}</p>
                            <p><strong>Localização:</strong> ${user.location ? user.location : 'Localização não disponível'}</p>
                            <p id="user-perfil"><a href="#"><i class="fa-regular fa-user text-primary"> ${user.followers}</i></a></p>
                            <p><strong>Site:</strong> ${user.blog ? `<a href="${user.blog}" target="_blank">${user.blog}</a>` : 'Site não disponível'}</p>
                            <div>
                                <a href="mailto:${user.email}" target="_blank" class="btn btn-light"><i class="fa-solid fa-envelope"></i></a>
                                <a href="${user.html_url}" target="_blank" class="btn btn-light"><i class="fa-brands fa-github"></i></a>
                                <a href="${linkedin_url}" target="_blank" class="btn btn-light"><i class="fa-brands fa-linkedin"></i></a>
                                <a href="${instagram_url}" target="_blank" class="btn btn-light"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                `;

                // Adiciona o HTML gerado à div perfil-container
                perfilContainer.innerHTML = profileHTML;
            })
            .catch(error => console.error('Erro ao carregar perfil do usuário:', error));
    }

    // Função para carregar repositórios do usuário do GitHub
    function carregarRepositoriosUsuario() {
        fetch('https://api.github.com/users/Js3Silva/repos', { headers: githubHeaders })
            .then(response => response.json())
            .then(data => {
                console.log('Repositórios carregados:', data);

                if (Array.isArray(data)) {
                    data.forEach(repo => {
                        // Construção do card do repositório
                        const card = document.createElement('div');
                        card.className = 'col-md-4 mb-4';
                        card.innerHTML = `
                            <a href="repo.html?id=${repo.id}" class="text-decoration-none text-dark repo-link" data-repo-id="${repo.id}">
                                <div class="card h-100">
                                    <div class="card-body d-flex flex-column justify-content-between">
                                        <h5 class="card-title">${repo.name}</h5>
                                        <p class="card-text">${repo.description ? repo.description : 'Sem descrição'}</p>
                                        <div class="d-flex justify-content-center align-items-center mt-3">
                                            <i class="far fa-star me-1" id="star"></i> ${repo.stargazers_count}
                                            <i class="far fa-user ms-3 me-1" id="person"></i> ${repo.watchers_count}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        `;
                        repoContainer.appendChild(card);
                    });

                    // Adiciona o evento de clique aos links dos repositórios
                    const repoLinks = document.querySelectorAll('.repo-link');
                    repoLinks.forEach(link => {
                        link.addEventListener('click', function (event) {
                            const repoId = this.getAttribute('data-repo-id');
                            localStorage.setItem('clickedRepoId', repoId);
                        });
                    });
                } else {
                    console.error('Erro: dados de repositórios não estão no formato esperado.');
                }
            })
            .catch(error => console.error('Erro ao carregar repositórios:', error));
    }

    // Função para carregar destaques para o carrossel do JSON Server
    function carregarDestaques() {
        fetch('http://localhost:3001/destaques')
            .then(response => response.json())
            .then(destaques => {
                console.log('Destaques carregados:', destaques);

                destaques.forEach((destaque, index) => {
                    const isActive = index === 0 ? 'active' : ''; // Define o primeiro item como ativo

                    // Criação do indicador
                    const indicator = document.createElement('button');
                    indicator.type = 'button';
                    indicator.setAttribute('data-bs-target', '#carouselExampleIndicators');
                    indicator.setAttribute('data-bs-slide-to', index.toString());
                    indicator.setAttribute('aria-label', `Slide ${index + 1}`);
                    if (isActive) indicator.className = 'active';
                    carouselIndicators.appendChild(indicator);

                    // Criação do item do carrossel
                    const carouselItem = document.createElement('div');
                    carouselItem.className = `carousel-item ${isActive}`;
                    carouselItem.innerHTML = `
                        <a href="${destaque.link}" target="_blank">
                            <img src="${destaque.imageUrl}" class="d-block w-100" alt="${destaque.title}"
                                height="300px" width="auto">
                        </a>
                    `;
                    carouselInner.appendChild(carouselItem);
                });
            })
            .catch(error => console.error('Erro ao carregar destaques:', error));
    }
    // Carregar perfil do usuário ao carregar a página
    carregarPerfilUsuario();

    // Carregar repositórios do usuário ao carregar a página
    carregarRepositoriosUsuario();

    // Carregar destaques para o carrossel ao carregar a página
    carregarDestaques();
});