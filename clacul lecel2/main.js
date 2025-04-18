import {sum, divu, mul, sip} from './calcul.js';
document.getElementById('btnClcu').addEventListener('click', function(e){
    e.preventDefault()
    const num1 = parseFloat(document.getElementById('num1').value)
    const num2 = parseFloat(document.getElementById('num2').value)
    const op = document.getElementById('opiration').value

    if(num1 && num2 && op){
        const zone = document.getElementById('claculZone')
        if(op == '+'){
            zone.innerHTML = sum(num1, num2)
        }
        if(op == '-'){
            zone.innerHTML = sip(num1,num2)
        }
        if(op == '*'){
            zone.innerHTML = mul(num1*num2)
        }
        if(op == '/'){
            zone.innerHTML = divu(num1/num2)
        }
    }else {
        alert('impossible')
    }
})