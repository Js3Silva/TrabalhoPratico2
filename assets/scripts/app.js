const repos = [
    {
        title: "Site Responsivo",
        subtitle: "Layout Flex - medias queries",
        description: "Projeto feito com html, css utilizando Layout Flex.",
        stars: 1,
        users: 2,
        link: "repo.html"
    }
];

function createCard(repo) {
    return `
        <div class="col-md-4 mb-4">
            <a id="link" href="${repo.link}">
                <div class="card" style="width: 100%">
                    <div class="card-body">
                        <h5 class="card-title">${repo.title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                            ${repo.subtitle}
                        </h6>
                        <p class="card-text">
                            ${repo.description}
                        </p>
                        <i class="fa-regular fa-star" id="star"> ${repo.stars}</i>
                        <i class="fa-regular fa-user" id="person"> ${repo.users}</i>
                    </div>
                </div>
            </a>
        </div>
    `;
}

function loadRepos() {
    const container = document.getElementById('repo-container');
    repos.forEach(repo => {
        container.innerHTML += createCard(repo);
    });
}

// Carregar os repositórios quando a página carregar
window.onload = loadRepos;