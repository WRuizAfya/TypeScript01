export{};

/*
Receba nomeDigitado: string = ' maria da silva '.
Crie a função formatarNome(nome: string): string, que:
remove os espaços nas pontas (trim) e os espaços duplicados (split + filter + join);
deixa a primeira letra de cada palavra maiúscula, exceto em "da", "de" e "do".

Converta precoLido = '12.40' para number com Number(), e quantidadeLida = '3un' com parseInt().
Declare clienteFidelidade: boolean = true. Clientes fiéis ganham 5% de desconto.
Monte o cupom com uma única template string de várias linhas. Use padStart para que o número do cupom tenha 6 dígitos (42 vira 000042).
Saída esperada:

CUPOM Nº 000042
Cliente: Maria da Silva
Item: 3 x R$ 12.40
Subtotal: R$ 37.20
Desconto fidelidade: R$ 1.86
TOTAL: R$ 35.34
*/

let nomeDigitado: string = '         maria      da        sIlva        ';

precoLido = '12.40';
quantidadeLida = '3un';
let clienteFidelidade: boolean = true;
numCupom = 42;

function maiusculizar(a: string){
	return String(a).charAt(0).toUpperCase() + String(a).slice(1).toLowerCase();
}

function formatarNome(nome: string): string{
	
	nomeS = nome.split(' ');
	
	nome = '';
	
	for(i = 0; i < nomeS.length; i++){
		nomeS[i].trim().length;
		if(nomeS[i].length > 1)
			nome = nome + maiusculizar(nomeS[i])+ " ";
	};
	return nome;
};

total = 0
console.log(formatarNome(nomeDigitado));
let CupomBase: string = `
Cupom N° ${String(numCupom).padStart(6,'0')} \n
Cliente: ${formatarNome(nomeDigitado)} \n
Item: ${parseInt(quantidadeLida,10)} x R$ ${Number(precoLido)} \n
Subtotal: R$ ${parseInt(quantidadeLida,10) * Number(precoLido)}\n
Desconto fidelidade: R$ ${(parseInt(quantidadeLida,10) * Number(precoLido)*0.05).toFixed(2)} \n
TOTAL: R$ ${((parseInt(quantidadeLida,10) * Number(precoLido)-(parseInt(quantidadeLida,10) * Number(precoLido)*0.05))).toFixed(2)} \n
`;

console.log(CupomBase);
