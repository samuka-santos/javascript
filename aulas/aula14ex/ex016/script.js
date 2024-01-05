
function contar() {
    let ini = Number(window.document.getElementById('txti').value)
    let fim = Number(window.document.getElementById('txtf').value)
    let pas = Number(window.document.getElementById('txtp').value)
    // não esqueça do '.value' dentro de Number()
    var res = window.document.getElementById('res')
    res.innerHTML = '' // limpar a saída anterior antes de começar a contagem

    if (ini.lenght == 0 || fim.lenght == 0 || pas.lenght == 0) { // não é ini == null ou ini == undefined
        res.innerHTML = 'Impossível contar! Faltam dados'
    } else {
        res.innerHTML = 'Contando: <br>'

        if (pas <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            pas = 1
        }

        if (ini < fim) {
            // CONTAGEM CRESCENTE
            for (let num = ini; num <= fim; num += pas) { // coloque 'var num' para evitar que se torne uma variável global
                res.innerHTML += `${num} \u{1F449} `
            }
        } else {
            // CONTAGEM REGRESSIVA
            for (let num = ini; num >= fim; num -= pas) { // coloque 'var num' para evitar que se torne uma variável global
                res.innerHTML += `${num} \u{1F449} `
            }
        }
        res.innerHTML += `&#x1F3C1;`
        
    }



}
