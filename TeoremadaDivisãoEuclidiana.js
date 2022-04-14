// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let recebido = gets().split(" ");

let a = parseInt(recebido[0]);
let b = parseInt(recebido[1]);
let q = parseInt(a/b);
let r = a - b*q;

if(r < 0){
    r += Math.abs(b);
    q = (a-r)/b;
}

console.log(parseInt(q) + " " + parseInt(r));
