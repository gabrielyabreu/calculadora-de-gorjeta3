let conta = 0
let pessoas = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta )

function receberValorConta(evento) {
    conta = Number(evento.target.value)
    
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
    if(evento.target.value === "0") {
      const paragrafoErro = document.querySelector(".pessoas #erro")
      paragrafoErro.style.display = "block"

      const divErro = document.querySelector(".pessoas .input-box")
      divErro.setAttribute("id", "erro-div")
    }
}