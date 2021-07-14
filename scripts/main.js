'use strict'

const enterInput = document.getElementById('enter-number');
const resultInput = document.getElementById('result-input');
const optionsInput = document.getElementById('options-input');
const optionsOutput = document.getElementById('options-output');

function countCurrency() {
    let result = 0;
    // if (optionsInput.value == 'eur' && optionsOutput.value == 'uah') {
    //     result = enterInput.value * 32.3834;
    //     resultInput.value = result;
    // } else if (optionsInput.value == 'uah' && optionsOutput.value == 'eur') {
    //     result = enterInput.value * 0.0309;
    //     resultInput.value = result;
    // }
    if (optionsInput.value == 'eur') {
        if (optionsOutput.value == 'uah') {
            result = enterInput.value * 32.3834;
            resultInput.value = result;
        } else if (optionsOutput.value == 'usd') {
            result = enterInput.value * 1.1872;
            resultInput.value = result;
        } else if (optionsOutput.value == 'rub') {
            result = enterInput.value * 88.6050;
            resultInput.value = result;
        }
    }
    if (optionsInput.value == 'uah') {
        if (optionsOutput.value == 'eur') {
            result = enterInput.value * 0.0309;
            resultInput.value = result;
        } else if (optionsOutput.value == 'usd') {
            result = enterInput.value * 0.0367;
            resultInput.value = result;
        } else if (optionsOutput.value == 'rub') {
            result = enterInput.value * 2.7361;
            resultInput.value = result;
        }
    }
    if (optionsInput.value == 'usd') {
        if (optionsOutput.value == 'eur') {
            result = enterInput.value * 0.8423;
            resultInput.value = result;
        } else if (optionsOutput.value == 'uah') {
            result = enterInput.value * 27.2772;
            resultInput.value = result;
        } else if (optionsOutput.value == 'rub') {
            result = enterInput.value * 74.6336;
            resultInput.value = result;
        }
    }
    if (optionsInput.value == 'rub') {
        if (optionsOutput.value == 'eur') {
            result = enterInput.value * 0.0113;
            resultInput.value = result;
        } else if (optionsOutput.value == 'usd') {
            result = enterInput.value * 0.0134;
            resultInput.value = result;
        } else if (optionsOutput.value == 'uah') {
            result = enterInput.value * 0.3655;
            resultInput.value = result;
        }
    }
}

enterInput.addEventListener('input', countCurrency);