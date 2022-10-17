let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}
function adicionar () {   
    if (isNumero(num.value) && !inLista(num.value, valores)) {//valida se o que foi inserido é realmente um número, e se este número Não está na lista.
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Nª ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''//limpa o campo de texto após a mensagem.
    num.focus()//deixa o cursor ativo na caixa de texto
}
function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }else {
        let tot = valores.length//para saber quantos elementos o vetor de valores tem
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]            
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        parseFloat(media.toFixed(2))
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${tot}</strong> números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}