// Dados iniciais para Fazenda Macuco
let sistemaFazenda = {
    propriedade: {
        nome: "Fazenda Macuco",
        proprietario: "João Silva",
        endereco: "Zona Rural, Município ABC",
        area_total: 120,
        atividade_principal: "Produção de Leite"
    },
    rebanho: [],
    reproducao: [],
    producao_leite: [],
    compras: [], // Rações, suplementos e medicamentos
    financeiro: {
        receitas: [],
        despesas: [],
        saldo_atual: 0
    }
};

// Função para navegar entre módulos
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.module').forEach(mod => mod.classList.remove('active'));
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        let mod = document.getElementById(this.dataset.module);
        if(mod) mod.classList.add('active');
        this.classList.add('active');
    });
});

// Inicializações e funções para alimentar interface etc. devem ser implementadas aqui


// Armazena os dados localmente
let rebanhoArr = [];

document.getElementById('formRebanho').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = this.nome.value;
    const idade = this.idade.value;
    const raca = this.raca.value;
    rebanhoArr.push({ nome, idade, raca });
    atualizarListaRebanho();
    this.reset();
});

function atualizarListaRebanho() {
    const lista = document.getElementById('listaRebanho');
    lista.innerHTML = "";
    rebanhoArr.forEach(animal => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${animal.nome}, Idade: ${animal.idade}, Raça: ${animal.raca}`;
        lista.appendChild(li);
    });
}
