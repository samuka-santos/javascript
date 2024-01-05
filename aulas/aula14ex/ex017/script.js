function gerar() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
            /*
            var r = num * i
            res.innerHTML += `<li>${num} x ${i} = ${r}</li><br>`
            */
        }
    }
}