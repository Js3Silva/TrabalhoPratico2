# Trabalho Prático 2

Este repositório contém o **Trabalho Prático 2** da disciplina de Desenvolvimento Web, que consiste na adição de interatividade e dinamismo ao currículo digital desenvolvido na primeira etapa. Nesta fase, foram incorporadas funcionalidades utilizando JavaScript, JSON Server e a API do GitHub para melhorar a experiência do usuário e tornar o currículo mais interativo e dinâmico.

## Descrição do Projeto

O currículo digital foi expandido com as seguintes funcionalidades dinâmicas:

- **Interatividade com JavaScript**: Adicionadas animações, validações e manipulações do DOM para melhorar a usabilidade e a apresentação do currículo.
- **Integração com API do GitHub**: Recuperação dinâmica de informações sobre projetos hospedados no GitHub, como descrição, número de estrelas e linguagens utilizadas.
- **Uso de JSON Server**: Simulação de uma API REST para fornecer dados dinâmicos sobre conteúdos sugeridos e informações de contato, permitindo uma melhor experiência de navegação.

## Estrutura do Repositório

### Diretório `public`

Dentro do diretório `public`, estão organizados os seguintes arquivos e pastas:

- **index.html**: Arquivo principal HTML que agora incorpora as funcionalidades dinâmicas do currículo.
- **repo.html**: Página adicional que exibe detalhes específicos de projetos, incluindo dados recuperados da API do GitHub.

### Diretório `assets`

Dentro de `assets`, encontram-se os recursos estáticos:

- **css/main.css**: Estilização geral do currículo, agora complementada para suportar os elementos dinâmicos.
- **css/repo.css**: Estilos específicos para a página `repo.html`.
- **img/**: Pasta contendo as imagens utilizadas no currículo, incluindo fotos de perfil, logos e ícones.
- **scripts/**: Contém os arquivos JavaScript que adicionam interatividade ao currículo:
  - **app.js**: Script principal que controla a interatividade e as animações na página `index.html`.
  - **repo.js**: Script responsável por interagir com a API do GitHub e exibir as informações dinâmicas na página `repo.html`.

## Como Executar

Para executar o projeto:

1. Faça o download ou clone este repositório.
2. Certifique-se de que o `JSON Server` esteja instalado e configurado corretamente. Inicie o servidor JSON na pasta apropriada.
3. Abra o arquivo `index.html` em seu navegador preferido para visualizar a página inicial.
4. Navegue até `repo.html` para ver a integração com a API do GitHub e a exibição dinâmica dos projetos.

## Próximos Passos

Futuras melhorias podem incluir a adição de funcionalidades mais avançadas, como autenticação, armazenamento de preferências do usuário, e otimizações para dispositivos móveis.

## Contato

Para dúvidas ou sugestões, entre em contato através do e-mail [jonathansilvagw@gmail.com](mailto:jonathansilvagw@gmail.com).
