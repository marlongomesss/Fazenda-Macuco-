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


