'use strict';

let amount = document.getElementById('amount');
let guests = document.getElementById('guests');
let quality = document.getElementById('quality');
let tipAmount = document.getElementById('tip-amount');

function calculate() {
    const tip = ((amount.value * quality.value) / guests.value).toFixed();
    console.log(tip);
    amount.value = '';
    guests.value = '';
    quality.value = '';
    if (tip === 'NaN') {
        tipAmount.innerHTML = 'Tip $0 each';
        showTipAmount();
    } else {
        tipAmount.innerHTML = `Tip $ ${tip} each`;
        showTipAmount();
    }
}

function showTipAmount() {
    let x = tipAmount;
    x.className = 'show';
    setTimeout(function () {
        x.className = x.className.replace('show', '');
    }, 3000);
}
