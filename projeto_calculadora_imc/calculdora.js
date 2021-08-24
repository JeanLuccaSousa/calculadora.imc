
function calcular() {
    var txtp = document.querySelector("#peso")
    var txta = document.querySelector("#altura")
    var res = document.querySelector("#res")
    var p = (peso.value)
    var a = (altura.value)
    var p = parseFloat(p)
    var a = parseFloat(a)
    var imc = p / (a*a)
    imc = imc.toFixed(2)
   if(imc < 18.5) {

    res.innerHTML +='Seu imc é de '+ imc +'. Abaixo do peso'
    } else if(imc >= 18.5 && imc <= 24.99) {
        res.innerHTML +='Seu imc é de '+ imc +'. Portanto está normal'
    } else if(imc >= 25.0 && imc <= 29.9) {
        res.innerHTML +='Seu imc é de '+ imc +'. Levemente acima do peso'
    } else if(imc >= 30.0 && imc <= 34.99) {
        res.innerHTML +='Seu imc é de '+ imc +'. Obesidade grau I'
    } else if(imc >= 35.0 && imc <= 39.99) {
        res.innerHTML +='Seu imc é de '+ imc +'. Obesidade grau II (severa)'
    } else {
        res.innerHTML +='Seu imc é de '+ imc +'. Obesidade grau III (mórbida)'

    }

    }
