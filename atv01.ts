export{};

let nomeProduto1:string = 'Pão Fracês';
let precoUnitario1:number = 0.75;
let quantidade1:number = 12;

nomeProduto2 = 'Bolo de Cenoura';
precoUnitario2 = 18.5;
quantidade2 = 2;

aberta = true;

subtotal1 = precoUnitario1 * quantidade1;
subtotal2 = precoUnitario2 * quantidade2;
total = subtotal1 + subtotal2;

let paesAno:number	 = 1_250_000;

let Categoria = 0x1A;

console.log(nomeProduto1+": "+ quantidade1+" x R$"+precoUnitario1+" = R$ "+subtotal1);
console.log(nomeProduto2+": "+ quantidade2+" x R$"+precoUnitario2+" = R$ "+subtotal2);
console.log('Total: R$ '+total);
console.log('Padaria aberta?'+ aberta);
console.log('Pães vendidos no ano: '+ paesAno);
console.log('Categoria: '+Categoria);
