function fetchWithRetry(url, options = {}, retries = 3, backoff = 3000) {
    return fetch(url, options).then(response => {
        if (!response.ok) {
            if (response.status === 403 && retries > 0) {
                // Limite de taxa excedido, espera e tenta novamente
                return new Promise(resolve => setTimeout(resolve, backoff))
                    .then(() => fetchWithRetry(url, options, retries - 1, backoff * 2));
            }
            throw new Error('Request failed');
        }
        return response.json();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const repoId = localStorage.getItem('clickedRepoId');
    const GITHUB_TOKEN = 'token';  

    if (repoId) {
        fetchWithRetry(`https://api.github.com/repositories/${repoId}`, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`
            }
        })
        .then(repo => {
            console.log('Repositório carregado:', repo);

            // Faz uma chamada para obter as linguagens do repositório
            return fetchWithRetry(repo.languages_url, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`
                }
            }).then(languages => {
                const languageKeys = Object.keys(languages);
                console.log('Linguagens carregadas:', languages);

                // Gera o HTML com as informações do repositório
                const repoHTML = `
                    <div class="container bg-light py-4">
                        <div class="pb-2 mb-4 text-dark border-bottom border-dark">
                            <h2>Repositório: ${repo.name}</h2>
                        </div>
                        <div class="row">
                            <div class="d-flex flex-wrap">
                                <div class="flex-grow-1">
                                    <h4 class="text-primary">Descrição:</h4>
                                    <p>${repo.description ? repo.description : 'Sem descrição disponível'}</p>
                                    <h4 class="text-primary">Data de Criação:</h4>
                                    <p>${new Date(repo.created_at).toLocaleDateString()}</p>
                                    <h4 class="text-primary">Linguagem Principal:</h4>
                                    <p>${repo.language ? repo.language : 'Não especificada'}</p>
                                </div>
                                <div class="star">
                                    <a href="#"><i class="fa-regular fa-star col-md-6" id="star">${repo.stargazers_count}</i></a>
                                    <a href="#"><i class="fa-regular fa-user" id="user"> ${repo.watchers_count}</i></a>
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <h4 class="text-primary">Link de Acesso:</h4>
                                <p><a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
                                <h4 class="text-primary">Tópicos:</h4>
                                <div class="languages">
                                    ${languageKeys.map(language => `<span class="language">${language}</span>`).join(' ')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Adiciona o HTML gerado ao container
                container.innerHTML = repoHTML;
            });
        })
        .catch(error => console.error('Erro ao carregar dados do repositório:', error));
    } else {
        container.innerHTML = '<p>Não há repositório selecionado.</p>';
    }
});
