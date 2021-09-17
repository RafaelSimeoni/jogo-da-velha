let jogador, vencedor = null
let jogadorSelecionado = document.querySelector('#jogador-selecionado')
let vencedorSelecionado = document.querySelector('#vencedor-selecionado')
let quadrados = document.querySelectorAll('.quadrado')

mudarJogador('X')

function escolherQuadrado(id) {

    if (vencedor !== null) {
        return
    }

    let quadrado = document.querySelector(`#${id}`)

    if (quadrado.innerHTML !== '') {
        return
    }

    quadrado.innerHTML = jogador
    quadrado.style.color = '#000'

    if (jogador === 'X') {
        jogador = 'O'
    } else {
        jogador = 'X'
    }

    mudarJogador(jogador)
    checarVencedor()
}

function mudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checarVencedor() {
    let quadrado1 = document.querySelector('#quadrado1')
    let quadrado2 = document.querySelector('#quadrado2')
    let quadrado3 = document.querySelector('#quadrado3')
    let quadrado4 = document.querySelector('#quadrado4')
    let quadrado5 = document.querySelector('#quadrado5')
    let quadrado6 = document.querySelector('#quadrado6')
    let quadrado7 = document.querySelector('#quadrado7')
    let quadrado8 = document.querySelector('#quadrado8')
    let quadrado9 = document.querySelector('#quadrado9')

    if (checarSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3)
        mudarVencedor(quadrado1)
        return
    }

    if (checarSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6)
        mudarVencedor(quadrado4)
        return
    }

    if (checarSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9)
        mudarVencedor(quadrado7)
        return
    }

    if (checarSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7)
        mudarVencedor(quadrado1)
        return
    }

    if (checarSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8)
        mudarVencedor(quadrado2)
        return
    }

    if (checarSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9)
        mudarVencedor(quadrado3)
        return
    }

    if (checarSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9)
        mudarVencedor(quadrado1)
        return
    }

    if (checarSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7)
        mudarVencedor(quadrado3)
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#5cb85c'
    quadrado2.style.background = '#5cb85c'
    quadrado3.style.background = '#5cb85c'
}
function checarSequencia(quadrado1, quadrado2, quadrado3) {
    let sequenciaIgual = false

    if (quadrado1.innerHTML != '' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        sequenciaIgual = true
    }

    return sequenciaIgual
}

function reiniciar() {
    vencedor = null
    vencedorSelecionado.innerHTML = ''

    for(let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(`quadrado${i}`)
        quadrado.style.background = '#eee'
        quadrado.innerHTML = ''
        
    }
}