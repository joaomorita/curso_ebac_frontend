const carroDoJoao = {
    modelo: 'Fieste',
    Fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function(){
        console.log('vruum')
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    Fabricante: 'Ford',
    anoModelo: 2022,
    anoFabricacao: 2021,
    acelerar: function(){
        console.log('vruum')
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao){
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log('acelerar')
    }
}

const carroDoJoao2 = new Carro('Fiesta', 'Ford', 2020, 2019)
const carroDaMaria2 = new Carro('Ka', 'Ford', 2022, 2021)

console.log(carroDaMaria2)
console.log(carroDoJoao2)