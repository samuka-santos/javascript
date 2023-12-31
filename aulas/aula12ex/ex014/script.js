function carregar() {
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.src = 'imgs/manhã.jpg'
        document.body.style.background = '#e3af0f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imgs/tarde.jpg'
        document.body.style.background = '#627998'
    } else if (hora > 18 && hora <= 24){ 
        // BOA NOITE!
        img.src = 'imgs/noite.jpg'
        document.body.style.background = '#031730'
    } else {
        // BOA MADRUGADA!
        img.src = 'imgs/madrugada.jpg'
        document.body.style.background = '#c33a21'
    }
}

