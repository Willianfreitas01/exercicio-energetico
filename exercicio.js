/* (valor unitário x quantidade + impostos) sobre cada carga.
 O valor unitário de cada energético é fixo e cada um custa R$ 4,50.
  As alíquotas de imposto que serão somados no valor são os seguintes: ICMS: 18% IPI: 4% PIS: 1,86% COFINS: 8,54% */
function energetico(quantidade) {
  const icms = 18 //18% de algo 
  const ipi = 4
  const pis = 1.86
  const cofins = 8.54
  const valorUnitario = 4.50
  const somaPorcentagem = icms + ipi + pis + cofins

  const soma = valorUnitario * quantidade
  console.log(soma)
  //const porcentagem =  soma*ipi
  //console.log(porcentagem.toFixed())
  //const porcentagemSoma = soma /100 
  /* console.log(porcentagemSoma) */
  return `Cliente:Supermercado Dosul ICMS: ${(soma * icms).toFixed(1)} IPI:R$${(soma * ipi).toFixed(1)}; PIS: R$${(soma * pis).toFixed(1)}; COFINS: R$${(soma * cofins).toFixed(1)}; TOTAL: R$${soma}`
}
console.log(energetico(500))