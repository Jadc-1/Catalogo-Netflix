function criarFilmes() {
    // Seleciona o container onde os filmes serão exibidos
    const container = document.getElementById('filmes-container');

    // Itera sobre cada filme no array filmes_netflix
    filmes_netflix.forEach(filme => {
        // Cria uma div para o filme
        const filmeDiv = document.createElement('div');
        filmeDiv.classList.add('filme');

        // Adiciona o cartaz do filme
        const imagem = document.createElement('img');
        imagem.src = filme.cartaz;
        imagem.alt = `Poster do filme ${filme.titulo}`;

        // Adiciona o título do filme
        const titulo = document.createElement('h3');
        titulo.textContent = filme.titulo;

        // Adiciona a imagem e o título na div do filme
        filmeDiv.appendChild(imagem);
        filmeDiv.appendChild(titulo);

        // Adiciona a div do filme ao container
        container.appendChild(filmeDiv);
    });
}

// Chama a função para criar os filmes
criarFilmes();