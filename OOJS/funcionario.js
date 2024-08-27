function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + ' diz oi')
    }
}

function Funcionario(nome, cargo, salario){
    this.nome = nome;
    this.cargo = cargo;
    let _salario = salario;

    // getter
    this.getSalario = function(){
        return _salario;
    }

    // setter
    this.setSalario = function(valor){
        if(typeof valor === 'number'){
            _salario = valor;
        }
    }

    this.aumento = function(){
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    Pessoa.call(this, nome)
}

function Estagiario(nome){
    Funcionario.call(this, nome, 'Estagiário', 2000);

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario)
    }
}


const funcionario1 = new Funcionario('Maria', 'dev', 5000);
const funcionario2 = new Estagiario('Pedro');

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())