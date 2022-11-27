import './style.css'


document.querySelector('#app').innerHTML = `
<div class="credit-card">
<div class="credit-card-front">
    <div class="card-type">
        Cartão de Crédito
    </div>

    <img class="flag" src="./visa-logo.png">

    <div class="card-number">
        #### #### #### ####
    </div>
    <div class="card-holder">
        Fulano de Tal
    </div>
    <div class="expiration">
        06/2021
    </div>
</div>
<div class="credit-card-back">
    <div class="stripe"></div>
    <div class="ccv-block">
        123
    </div>
    <div class="flag">
        <img class="flag" src="./visa-logo.png">
    </div>
</div>
</div>
`


