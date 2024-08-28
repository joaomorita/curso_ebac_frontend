function Raca(nomeRaca){
    this.nomeRaca = nomeRaca;
}

function Animal(nomeRaca,nome, subRaca, pelagem,sexo, peso){
    Raca.call(this, nomeRaca);
    this.nome = nome
    this.subRaca = subRaca;
    this.pelagem = pelagem;
    this.sexo = sexo
    this.peso = peso;
}

function Cachorro(nomeRaca){
    Animal.call(this, nomeRaca,'Bob', 'Golden', 'Dourada', 'Macho', '3Okg')
}

function Gato(nome){
    Animal.call(this, nome, 'Lisa', 'Mainecoon', 'Cinza', 'Femea', '5kg')
}

function Leao(nome){
    Animal.call(this, nome, 'Dexter', 'leão-africano', 'Amarelo', 'Femea', '125kg')
}

const cachorro1 = new Cachorro('Cachorro');
const gato1 = new Gato('Gato');
const leao1 = new Leao('Leão');
console.log(cachorro1);
console.log(gato1);
console.log(leao1);