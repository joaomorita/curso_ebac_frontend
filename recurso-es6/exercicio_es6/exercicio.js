let alunos = [
    {nome: "João", nota: 6},
    {nome: "Renata", nota: 9},
    {nome: "Pedro", nota: 5},
    {nome: "José", nota: 4},
    {nome: "Messias", nota: 7}
]


function AcimaDaMedia (){
    const alunosAcimaDeSeis = alunos
    .filter(aluno => aluno.nota >= 6)
    .map(aluno => ({ nome: aluno.nome, nota: aluno.nota }));
    return console.log(alunosAcimaDeSeis)
}

AcimaDaMedia()



