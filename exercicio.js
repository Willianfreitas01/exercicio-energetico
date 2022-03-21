/* (valor unitário x quantidade + impostos) sobre cada carga.
 O valor unitário de cada energético é fixo e cada um custa R$ 4,50.
  As alíquotas de imposto que serão somados no valor são os seguintes: ICMS: 18% IPI: 4% PIS: 1,86% COFINS: 8,54% */
  function energetico(quantidade) {
    const icms = 18 / 100 //18% de algo 
    console.log(icms)
    const ipi = 4 / 100
    const pis = 1.86 / 100
    const cofins = 8.54 / 100
    const valorUnitario = 4.50 
    const somaPorcentagem = icms + ipi + pis + cofins
    const soma = valorUnitario * quantidade + somaPorcentagem
    const porcentagem =  soma*ipi
    console.log(porcentagem.toFixed())
    const porcentagemSoma = soma /100 
     /* console.log(porcentagemSoma) */ 
    return `Cliente:Supermercado Dosul ICMS: ${soma*icms} IPI:R$${soma*ipi}; PIS: R$${soma*pis}; COFINS: R$${soma*cofins}; TOTAL: R$${soma}`
}
console.log(energetico(500))