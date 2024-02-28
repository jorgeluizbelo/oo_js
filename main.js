// A entrega deste exercício consiste em:

// • Crie uma classe de uma abstração;

// • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;

// • Crie pelo menos três instâncias de objetos;

// • No repositório do curso crie uma branch chamada oo_js e armazene o código do exercício.

// • Envie o link do repositório através da plataforma. 

class Carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidade = 0;
    }
}

class CarroEsportivo extends Carro {
    constructor(marca, modelo, ano, cor, potencia) {
        super(marca, modelo, ano, cor);
        this.potencia = potencia;
    }
}

class CarroFamiliar extends Carro {
    constructor(marca, modelo, ano, cor, capacidade) {
        super(marca, modelo, ano, cor);
        this.capacidade = capacidade;
    }
}

// Criando instâncias de objetos
const ferrari488 = new CarroEsportivo("Ferrari", "488 GTB", 2023, "Vermelho", "700cv");
const porsche911 = new CarroEsportivo("Porsche", "911", 2024, "Azul", "600cv");
const toyotaCorolla = new CarroFamiliar("Toyota", "Corolla", 2024, "Prata", 5);

// Mostrando as instâncias no console
console.log("Carro Esportivo 1:", ferrari488);
console.log("Carro Esportivo 2:", porsche911);
console.log("Carro Familiar:", toyotaCorolla);


