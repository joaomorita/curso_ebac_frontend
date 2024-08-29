class Pokemon{
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon){
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recebeuAtaque(){
        this.#hp -= 10;
    }

    exibeHp(){
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon{
    constructor(){
        super('Pikachu', 'Elétrico')
    }
}

const pikachu = new Pokemon('Pikachu', 'Elétrico');

// console.log(pikachu)
// pikachu.atacar('Choque do trovão')

const pikachuDoAsh = new Pikachu()
console.log(pikachuDoAsh.atacar())
console.log(pikachuDoAsh.recebeuAtaque())
console.log(pikachuDoAsh.exibeHp())
