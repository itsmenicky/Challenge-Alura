const field_texto = document.getElementById("entrada-texto");
const saida_container = document.querySelector(".container-saida-texto");

function criptografar(){
    let saida_texto = document.createElement('p');
    let texto_criptografado = field_texto.value.replace(/e/gi, 'enter')
                                   .replace(/i/gi, 'imes')
                                   .replace(/a/gi, 'ai')
                                   .replace(/o/gi, 'ober')
                                   .replace(/u/gi, 'ufat');
    saida_texto.textContent = texto_criptografado;
    saida_texto.classList.add('saida-texto');
    saida_container.innerHTML = '';
    saida_container.appendChild(saida_texto);
}

function descriptografar(){
    let saida_texto = document.createElement('p');
    let texto_criptografado = field_texto.value.replace(/enter/gi, 'e')
                                   .replace(/imes/gi, 'i')
                                   .replace(/ai/gi, 'a')
                                   .replace(/ober/gi, 'o')
                                   .replace(/ufat/gi, 'u');
    saida_texto.textContent = texto_criptografado;
    saida_texto.classList.add('saida-texto');
    saida_container.innerHTML = '';
    saida_container.appendChild(saida_texto);
}