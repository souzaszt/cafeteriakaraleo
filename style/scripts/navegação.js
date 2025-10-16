
async function carregarPagina(idPagina) {
    try {
        const resposta = await fetch(`paginas/${idPagina}.html`);
        const conteudo = await resposta.text();
        document.getElementById(idPagina).innerHTML = conteudo;
        mostrarPagina(idPagina);
        
        // Carrega o CSS específico da página
        const linkCSS = document.createElement('link');
        linkCSS.rel = 'stylesheet';
        linkCSS.href = `styles/${idPagina}.css`;
        document.head.appendChild(linkCSS);
    } catch (erro) {
        console.error('Erro ao carregar a página:', erro);
    }
}

function mostrarPagina(idPagina) {
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => pagina.classList.remove('active'));
    
    document.getElementById(idPagina).classList.add('active');
    
    const linksNavegacao = document.querySelectorAll('.link-navegacao');
    linksNavegacao.forEach(link => link.classList.remove('active'));
    
    const linkAtivo = Array.from(linksNavegacao).find(link => 
        link.getAttribute('onclick').includes(idPagina)
    );
    
    if (linkAtivo) {
        linkAtivo.classList.add('active');
    }
    
    window.scrollTo(0, 0);
}

// Função para mostrar a página selecionada
function mostrarPagina(idPagina) {
    // Esconder todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => pagina.classList.remove('active'));
    
    // Mostrar página selecionada
    document.getElementById(idPagina).classList.add('active');
    
    // Atualizar navegação
    const linksNavegacao = document.querySelectorAll('.link-navegacao');
    linksNavegacao.forEach(link => link.classList.remove('active'));
    
    // Scroll para o topo
    window.scrollTo(0, 0);
}

// Inicializar a página correta baseada na URL
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pagina = urlParams.get('pagina');
    
    if (pagina && document.getElementById(pagina)) {
        mostrarPagina(pagina);
    }
});