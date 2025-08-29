//Comentario crtl + ;
// javascript é uma linguagem fracamente tipada!
var texto= "Ola"  // aspas duplas contêm uma string
let texto2= 'Mundo'; // ponto e vírgula no final da linha é opcional
const texto3= "!" //aspas simples também servem para strings!

console.log(texto,texto2 , texto3) //console.log serve para imprimir algo no 
//virgula concatena com espaço, enquanto o sinal de + deixa tudo junto

texto = 'Helo'
let msg = `${texto} ${texto2} ${texto3}`
//use a crase junto de ${} para concatanar
// //tambem
console.log(msg) // posso declarar várias variáveis de uma vez

//texto3 = "teste"
// o exemplo acima mostra que é impossivel atribuir um novo valor 
// a uma constante

let numero = 4
console.log (typeof numero)

let obj = { nome: 'Joao', idade: 37 }
console.log (
    "nome da pessoa: ", obj.nome,
    "idade do meliante: ", obj.idade
)

console.log (typeof obj)
// objeto é sempre um elemento chave/valor

let arr = [ 'Joao', 'P.', 'T.', 'Siles' ]
console.log (arr [0], arr[3])
console. log (typeof arr)
