//Testando operador de spred

function spredTest(arr) {
    return [...arr];
}
console.log(spredTest("ola"))


const spredArray = (arr) => {
    return [...arr, 1, 2 ,3 ,4]
}
console.log(spredArray([44, 55]))

const objTest = {
    nome: "bruno",
    idade: 20,
    profissao: "dev"
}

console.log({...objTest, jogoFav: "Csgo"})