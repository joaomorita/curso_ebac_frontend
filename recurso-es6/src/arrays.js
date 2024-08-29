const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for(let i = 0; i < redesSociais.length; i++){
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRede, indice){
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRede}`)
})

const alunos = ['Maria', 'João', 'Pedro', 'Paulo', 'Isaias']

const alunos2 = alunos.map(function(itemAtual){
    itemAtual = {
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual
})

console.log(alunos2)