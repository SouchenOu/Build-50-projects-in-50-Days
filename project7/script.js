const pw = document.getElementById('pw')
const copy = document.getElementById('copy')
const length = document.getElementById('length')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')
const generate = document.getElementById('generate')



const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefjhigklmnepqrstuvwxyz'
const numbers = '0123456789'
const symbols = '@#$%^&*()_+!'



function getUpperCase() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getLowerCase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value
    let password = ''
    for (let i = 0; i < len; i++) {
        const x = generatX();
        password += x;
    }
    pwEl.innerText = password
}

function generateX()

{
    const xs = [];
    if (upper.checked) {
        xs.push(getUpperCase())
    }
    if (upper.checked) {
        xs.push(getLowerCase())
    }
    if (upper.checked) {
        xs.push(getNumbersCase())
    }
    if (upper.checked) {
        xs.push(getSymbolsCase())
    }
    return xs[Math.floor(Math.random() * xs.length)];
}
generate.addEventListener('click', generatePassword);