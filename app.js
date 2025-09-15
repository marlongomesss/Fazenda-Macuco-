// Navegação entre módulos
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.module').forEach(mod => mod.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        let mod = document.getElementById(this.dataset.module);
        if(mod) mod.classList.add('active');
        this.classList.add('active');
    });
});

// Módulo Rebanho: armazenamento local dos dados
let rebanhoArr = JSON.parse(localStorage.getItem('rebanhoArr')) || [];

function atualizarListaRebanho() {
    const lista = document.getElementById('listaRebanho');
    lista.innerHTML = "";
    rebanhoArr.forEach((animal, index) => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${animal.nome}, Idade: ${animal.idade}, Raça: ${animal.raca} `;
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = "Excluir";
        btnExcluir.style.marginLeft = '10px';
        btnExcluir.onclick = () => {
            rebanhoArr.splice(index, 1);
            salvarRebanho();
            atualizarListaRebanho();
        };
        li.appendChild(btnExcluir);
        lista.appendChild(li);
    });
}

function salvarRebanho() {
    localStorage.setItem('rebanhoArr', JSON.stringify(rebanhoArr));
}

document.getElementById('formRebanho').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = this.nome.value.trim();
    const idade = this.idade.value.trim();
    const raca = this.raca.value.trim();
    if(nome && idade && raca) {
        rebanhoArr.push({ nome, idade, raca });
        salvarRebanho();
        atualizarListaRebanho();
        this.reset();
    }
});

// Atualiza a lista ao carregar a página
atualizarListaRebanho();
