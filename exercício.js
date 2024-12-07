// Classe de abstração
class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

// Classe que herda de Veiculo
class Carro extends Veiculo {
  constructor(marca, modelo, ano, portas) {
    super(marca, modelo, ano); // Chama o construtor da classe Veiculo
    this.portas = portas;
  }
}

// Classe que herda de Veiculo
class Moto extends Veiculo {
  constructor(marca, modelo, ano, tipo ) {
    super(marca, modelo, ano); // Chama o construtor da classe Veiculo
    this.tipo = tipo;
  }
}

const carro1 = new Carro("Honda", "Civic", 2021, 4);
const carro2 = new Carro("Fiat", "Uno", 2023, 4);
const moto = new Moto("Honda", "CG", 2024, "Tracker");

console.log(carro1);
console.log(carro2);
console.log(moto);
