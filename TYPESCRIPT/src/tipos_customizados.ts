type alunos = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos = [
    {
        nome: 'Carlos',
        cursos: ['Front-end', 'UX/UI'],
        idade: 27,
    },
    {
        nome: 'Ana',
        cursos: ['Front-end', 'Python'],
        idade: 23
    }
]

alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 29
})

const novoAluno: alunos = {
    nome: 'Lucas',
    idade: 32
}

function exibeAluno(aluno:alunos){
    console.log(aluno.nome)
}