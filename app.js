const livros = require('./dataBase')



//pegar um input 

const readline = require('readline-sync')

const entradainicial = readline.question('Deseja buscar um livro?S/N')
if(entradainicial.toLocaleUpperCase==='S'){
    var i = 0
    console.log('Essas são as categorias disponiveis:');
    livros.map((livro)=>{
         i++
        console.log(i+")"+livro.categoria)
        
})
    

    const entradaCate = readline.question('Qual categoria voce escolhe?')

const retorno  = livros.filter(livro=>livro.categoria === entradaCate)
    console.table(retorno)
}else{
        console.log('Essas são as categorias:')
        const livrosOrder = livros.sort((a,b)=>a.paginas - b.paginas)
        console.table(livrosOrder)
}