import './style.css'
const formulario = document.querySelector('#formulario');
const numeroCartao = formulario.numeroCartao;
const nome = formulario.nome;
const dataDeVencimento = formulario.dataDeVencimento;
const codigoSeguranca = formulario.ccv;

document.querySelector('#cartao').innerHTML = `
<div class="credit-card">
<div class="credit-card-front">
    <div class="card-type">
        Cartão de Crédito
    </div>

    <img class="flag" src="./visa-logo.png">

    <div class="card-number">
      #0#0#0#0#0#0#0#0#0#0#
    </div>
    <div class="card-holder">
        nome Cliente

    </div>
    <div class="expiration">
         Data vencimento
    </div>
</div>
<div class="credit-card-back">
    <div class="stripe"></div>
    <div class="ccv-block">
        ###
    </div>
    <div class="flag">
        <img class="flag" src="./visa-logo.png">
    </div>
</div>
</div>
`
formulario.addEventListener('submit', event => {
  event.preventDefault()   
  document.querySelector('#cartao').innerHTML = `
<div class="credit-card">
<div class="credit-card-front">
    <div class="card-type">
        Cartão de Crédito
    </div>

    <img class="flag" src="./visa-logo.png">

    <div class="card-number">
        ${numeroCartao.value}
    </div>
    <div class="card-holder">
        ${nome.value}

    </div>
    <div class="expiration">
         ${dataDeVencimento.value}
    </div>
</div>
<div class="credit-card-back">
    <div class="stripe"></div>
    <div class="ccv-block">
        ${codigoSeguranca.value}
    </div>
    <div class="flag">
        <img class="flag" src="./visa-logo.png">
    </div>
</div>
</div>
`
})


