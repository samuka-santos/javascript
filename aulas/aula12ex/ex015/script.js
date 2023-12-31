function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // FullYear significa o ano com 4 dígitos
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id','foto')
        // praticamente add um <img id="foto"> no HTML

        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src','imgs/homem-bebe.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','imgs/homem-jovem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','imgs/homem-adulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src','imgs/homem-idoso.jpg')
            }
            document.body.style.background = '#186fd3'

        } else if (fsex[1]) {
            gênero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src','imgs/mulher-bebe.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','imgs/mulher-jovem.jpg')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src','imgs/mulher-adulta.jpg')
            } else {
                // Idosa
                img.setAttribute('src','imgs/mulher-idosa.jpg')
            }
            document.body.style.background = '#ee38df'

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado: ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}