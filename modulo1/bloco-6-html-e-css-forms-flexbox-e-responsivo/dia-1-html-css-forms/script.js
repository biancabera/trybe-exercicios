// 3.Interrompa o comportamento padrão do botão submit utilizando o método preventDefault() .
const botaoEnviar = document.getElementById('submit-btn')
botaoEnviar.addEventListener('click', interrompendoBotao);

function interrompendoBotao(event) {
    event.preventDefault(); 
}
// 4.Crie um botão que limpe as informações contidas nos campos;
const botaoApagar = document.getElementById('clear-btn');
botaoApagar.addEventListener('click', limparCampos);

function limparCampos() {
    const inputs = document.querySelectorAll('input');
    for (let index = 0; index < inputs.length; index += 1) {
      const inputUsuario = inputs[index];
      inputUsuario.value = '';
      inputUsuario.checked = false;
    }
    const textArea = document.querySelector('textarea');
    textArea.value = '';
  }