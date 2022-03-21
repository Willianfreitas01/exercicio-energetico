/* (valor unitário x quantidade + impostos) sobre cada carga.
 O valor unitário de cada energético é fixo e cada um custa R$ 4,50.
  As alíquotas de imposto que serão somados no valor são os seguintes: ICMS: 18% IPI: 4% PIS: 1,86% COFINS: 8,54% */
function energetico(quantidade) {
const icms = 18  / 100
const ipi = 4 / 100
const pis = 1.86  / 100
const cofins =8.54  / 100
const valorUnitario = 4.50
const valorBruto = quantidade * valorUnitario
 const impostoDeIcms = icms * valorBruto
 const impostoDeIpi = ipi * valorBruto
 const impostoDePis = pis * valorBruto
 const impostoDeCofins = cofins * valorBruto
 const somaTotal = impostoDeIcms + impostoDeIpi + impostoDePis + impostoDeCofins + valorBruto
 const somaImposto = impostoDeCofins + impostoDeIcms + impostoDePis + impostoDeIpi
 if(somaTotal > 6000){
return `Total Impostos: ${somaImposto}  Total Mercadorias: ${quantidade} Total Geral:${somaTotal} PARABÉNS VOCÊ GANHOU UM DESCONTO DE 10% EM SUA PRÓXIMA COMPRA`
}
return `Total Impostos: ${somaImposto}  Total Mercadorias: ${quantidade} Total Geral:${somaTotal}`
}
 console.log(energetico(50000))
 
//Esta empresa deseja dar uma bonificação/desconto, mas não sabe como bonificar os clientes que compraram grandes quantidades.
//Como questão bônus (não obrigatória), você pode sugerir um algoritmo para ajudar a bonificar os clientes.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  // console.log(quantidade/2)
//   const icms = 18 / 100 //18% de algo 
//   const ipi = 4 / 100
//   const pis = 1.86 / 100
//   const cofins = 8.54 / 100
//   const valorUnitario = 4.50
//   const somaPorcentagem = icms + ipi + pis + cofins
// console.log(somaPorcentagem)
//   const soma = (valorUnitario * quantidade + somaPorcentagem).toFixed(1)
// console.log(soma)
//   const porcentagem = soma * icms
//   const porcentagem2 = soma * ipi
//   const porcentagem3 = soma * pis
//   const porcentagem4 = soma * cofins
//   const somadorDePorcentagem = (porcentagem + porcentagem2 + porcentagem3 + porcentagem4).toFixed()
  // console.log(somadorDePorcentagem)
  // const somaTotal = somaPorcentagem + quantidade
  // console.log(somaTotal)
  //console.log(porcentagem.toFixed())
  //const porcentagemSoma = soma /100 
  /* console.log(porcentagemSoma) */
//   return `Cliente:Supermercado Dosul ICMS:R$${porcentagem.toFixed()} IPI:R$${porcentagem2.toFixed()}; PIS: R$${porcentagem3.toFixed()}; COFINS: R$${porcentagem4.toFixed()}; TOTAL: R$${soma}`
// }
// console.log(energetico(500))