let meuMap = new Map();
meuMap.set('nome', 'João');
meuMap.set('stack', 'html, css, js');
console.log(meuMap);

const nome = meuMap.get('nome');

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has('nome'))

//meuMap.clear()

console.log(meuMap.size);

for(let chave of meuMap.keys()){
    console.log(chave)
}

for(let valor of meuMap.values()){
    console.log(valor)
}

for(let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`)
}

meuMap.delete('stack');

console.log(meuMap)