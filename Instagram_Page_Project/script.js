var nome = "Facebook";
var idade = prompt("Qual sua idade");
var lista = [12, 15, 18, 21];
var count = 5;
//var n1 = prompt("Digite um número");
//var n2 = prompt("Agora digite outro número");
var brawny = [{nome:"Axe", Atributo:"Força"}, {nome:"Snapfire", Atributo:"Força"}, {nome:"Beastmaster", Atributo:"Força"}, {nome:"Juggernaut", Atributo:"Agilidade"}];


lista.push(24);
//lista.pop();
if(idade >= 18){
    alert("Tá tranquilo, pode entrar");
} else{
    alert("I'm gonna stop you right there");
}

while (count <= 15){
    console.log(count*7);
    count++;
}

function soma(n1, n2){
    return n1+n2;
}

alert(soma(25, 25));
//alert("Essa não é a página oficial do " + nome.replace("Facebook", "Instagram"));
console.log(idade);
console.log(lista);
console.log(lista[3]);
console.log(brawny);
alert(brawny[2].nome);
