// Controle do menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Navegação entre módulos
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.module').forEach(mod => mod.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        let mod = document.getElementById(this.dataset.module);
        if(mod) mod.classList.add('active');
        this.classList.add('active');
        // Fecha o menu no mobile após clique
        if(window.innerWidth <= 768){
            sidebar.classList.remove('open');
        }
    });
});

// --- REBANHO ---
let rebanhoArr = JSON.parse(localStorage.getItem('rebanhoArr')) || [];

function atualizarListaRebanho() {
    const lista = document.getElementById('listaRebanho');
    lista.innerHTML = "";
    rebanhoArr.forEach((animal, index) => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${animal.nome}, Idade: ${animal.idade}, Raça: ${animal.raca}`;
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = "Excluir";
        btnExcluir.style.marginLeft = '10px';
        btnExcluir.onclick = () => {
            rebanhoArr.splice(index, 1);
            salvarRebanho();
            atualizarListaRebanho();
            atualizarDashboard();
        };
        li.appendChild(btnExcluir);
        lista.appendChild(li);
    });
}

function salvarRebanho() {
    localStorage.setItem('rebanhoArr', JSON.stringify(rebanhoArr));
    atualizarDashboard();
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

atualizarListaRebanho();

// --- REPRODUÇÃO ---
let reproducaoArr = JSON.parse(localStorage.getItem('reproducaoArr')) || [];

function atualizarListaReproducao() {
    const lista = document.getElementById('listaReproducao');
    lista.innerHTML = "";
    reproducaoArr.forEach((evento, index) => {
        const li = document.createElement('li');
        li.textContent = `Animal: ${evento.animal}, Tipo: ${evento.tipo}, Data: ${evento.data}`;
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = "Excluir";
        btnExcluir.style.marginLeft = '10px';
        btnExcluir.onclick = () => {
            reproducaoArr.splice(index, 1);
            salvarReproducao();
            atualizarListaReproducao();
        };
        li.appendChild(btnExcluir);
        lista.appendChild(li);
    });
}

function salvarReproducao() {
    localStorage.setItem('reproducaoArr', JSON.stringify(reproducaoArr));
}

document.getElementById('formReproducao').addEventListener('submit', function(e) {
    e.preventDefault();
    const animal = this.animal.value.trim();
    const tipo = this.tipo.value.trim();
    const data = this.data.value.trim();
    if(animal && tipo && data) {
        reproducaoArr.push({ animal, tipo, data });
        salvarReproducao();
        atualizarListaReproducao();
        this.reset();
    }
});

atualizarListaReproducao();

// --- PRODUÇÃO DE LEITE ---
let leiteArr = JSON.parse(localStorage.getItem('leiteArr')) || [];

function atualizarListaLeite() {
    const lista = document.getElementById('listaLeite');
    lista.innerHTML = "";
    leiteArr.forEach((registro, index) => {
        const li = document.createElement('li');
        li.textContent = `Animal: ${registro.animal}, Data: ${registro.data}, Litros: ${registro.litros}`;
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = "Excluir";
        btnExcluir.style.marginLeft = '10px';
        btnExcluir.onclick = () => {
            leiteArr.splice(index, 1);
            salvarLeite();
            atualizarListaLeite();
            atualizarDashboard();
        };
        li.appendChild(btnExcluir);
        lista.appendChild(li);
    });
}

function salvarLeite() {
    localStorage.setItem('leiteArr', JSON.stringify(leiteArr));
    atualizarDashboard();
}

document.getElementById('formLeite').addEventListener('submit', function(e) {
    e.preventDefault();
    const animal = this.animal.value.trim();
    const data = this.data.value.trim();
    const litros = this.litros.value.trim();
    if(animal && data && litros) {
        leiteArr.push({ animal, data, litros });
        salvarLeite();
        atualizarListaLeite();
        this.reset();
    }
});

atualizarListaLeite();

// --- COMPRAS ---
let comprasArr = JSON.parse(localStorage.getItem('comprasArr')) || [];

function atualizarListaCompras() {
    const lista = document.getElementById('listaCompras');
    lista.innerHTML = "";
    comprasArr.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Produto: ${item.produto}, Quantidade: ${item.quantidade}, Data: ${item.data}, Validade: ${item.validade}`;
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = "Excluir";
        btnExcluir.style.marginLeft = '10px';
        btnExcluir.onclick = () => {
            comprasArr.splice(index, 1);
            salvarCompras();
            atualizarListaCompras();
        };
        li.appendChild(btnExcluir);
        lista.appendChild(li);
    });
}

function salvarCompras() {
    localStorage.setItem('comprasArr', JSON.stringify(comprasArr));
}

document.getElementById('formCompras').addEventListener('submit', function(e) {
    e.preventDefault();
    const produto = this.produto.value.trim();
    const quantidade = this.quantidade.value.trim();
    const data = this.data.value.trim();
    const validade = this.validade.value.trim();
    if(produto && quantidade && data && validade) {
        comprasArr.push({ produto, quantidade, data, validade });
        salvarCompras();
        atualizarListaCompras();
        this.reset();
    }
});

atualizarListaCompras();

// --- FINANCEIRO ---
let financeiroArr = JSON.parse(localStorage.getItem('financeiroArr')) || [];

function atualizarListaFinanceiro() {
    const lista = document.getElementById('listaFinanceiro');
    lista.innerHTML = "";
    financeiroArr.forEach((entrada, index) => {
        const li = document.createElement('li');
        li.textContent = `Tipo: ${entrada.tipo}, Data: ${entrada.data}, Descrição: ${entrada.descricao}, Valor: R$${entrada.valor}`;
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = "Excluir";
        btnExcluir.style.marginLeft = '10px';
        btnExcluir.onclick = () => {
            financeiroArr.splice(index, 1);
            salvarFinanceiro();
            atualizarListaFinanceiro();
        };
        li.appendChild(btnExcluir);
        lista.appendChild(li);
    });
}

function salvarFinanceiro() {
    localStorage.setItem('financeiroArr', JSON.stringify(financeiroArr));
}

document.getElementById('formFinanceiro').addEventListener('submit', function(e) {
    e.preventDefault();
    const tipo = this.tipo.value.trim();
    const data = this.data.value.trim();
    const descricao = this.descricao.value.trim();
    const valor = this.valor.value.trim();
    if(tipo && data && descricao && valor) {
        financeiroArr.push({ tipo, data, descricao, valor });
        salvarFinanceiro();
        atualizarListaFinanceiro();
        this.reset();
    }
});

atualizarListaFinanceiro();

// --- DASHBOARD ---
function atualizarDashboard() {
    const totalAnimais = rebanhoArr.length;
    document.getElementById('total-animais').textContent = totalAnimais;

    const totalLeite = leiteArr.reduce((total, item) => total + parseFloat(item.litros || 0), 0);
    document.getElementById('total-leite').textContent = totalLeite.toFixed(2);
}

// Inicializa dashboard ao carregar
atualizarDashboard();
