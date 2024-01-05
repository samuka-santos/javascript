var valores = []

function add() {
    let num = document.getElementById('txtnum')
    let lista = window.document.getElementById('val_add')
    let n = Number(num.value)
    let busca = valores.indexOf(n)
    let res = document.getElementById('res')

    if (n < 1 || n > 100 || busca != -1 || num.length == 0) {
        window.alert(`Valor inválido ou já encontrado na lista`)
    } else {
        res.innerHTML = ''
        valores.push(n)

        let item = document.createElement('option') // cria uma variável para uma opção do select
        item.text = `Valor ${n} adicionado` // não esquece do .text
        lista.appendChild(item) // add um option como c
    }

    num.value = '' // limpa a caixa de número e...
    num.focus() // coloca o foco na caixa para digitar, assim não precisando clicar na caixa de novo
}

function final() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        valores.sort()
        let res = document.getElementById('res')
        let quant_val = valores.length
        let mai_val = valores[quant_val - 1]
        let men_val = valores[0]
        let soma_val = 0

        for (let pos in valores) {
            soma_val += valores[pos]
        }

        let media_val = soma_val / quant_val
        media_val = media_val.toFixed(2) // Atribui o resultado de toFixed(2) de volta à variável

        res.innerHTML = `<p>Temos ao todo ${quant_val} números cadastrados. <br>
        O maior valor informado foi ${mai_val}.<br>
        O menor valor informado foi ${men_val}.<br>
        Somando todos os valores, temos ${soma_val}.<br>
        A média dos valores digitados é ${media_val}.</p>`
    }    
}