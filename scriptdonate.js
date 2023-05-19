// Função para configurar a validação da caixa de texto com base na opção selecionada
function configurarValidacao() {
    var informacaoInput = document.getElementById("informacao");
    var emailOption = document.getElementById("email");
    var celularOption = document.getElementById("celular");
  
    // Limpar qualquer validação existente
    informacaoInput.removeAttribute("pattern");
  
    // Se a opção "E-mail" for selecionada, configurar a validação para aceitar e-mails
    if (emailOption.checked) {
      informacaoInput.setAttribute("type", "email");
    }
    // Se a opção "Celular" for selecionada, configurar a validação para aceitar números
    else if (celularOption.checked) {
      informacaoInput.setAttribute("type", "tel");
      informacaoInput.setAttribute("pattern", "[0-9]{10,12}");
    }
  }
  
  // Função para lidar com o clique nos botões de doação
  function selecionarDoacao(valor) {
    var botoesDoacao = document.querySelectorAll(".button");
  
    // Remover a classe "selecionado" de todos os botões de doação
    botoesDoacao.forEach(function(botao) {
      botao.classList.remove("selecionado");
    });
  
    // Adicionar a classe "selecionado" ao botão clicado
    valor.classList.add("selecionado");
  }
  
  // Função para lidar com o clique no botão "DOAR!"
  function enviarDoacao() {
    var botaoSelecionado = document.querySelector(".selecionado");
    var valorDoacao;
  
    // Verificar se um botão foi selecionado
    if (botaoSelecionado) {
      valorDoacao = botaoSelecionado.textContent;
    } else {
      var outroValorInput = document.querySelector("input[type='number']");
      valorDoacao = outroValorInput.value;
    }
  
    // Aqui você pode adicionar o código para processar a doação com o valor obtido
    // Por exemplo, exibir uma mensagem de sucesso ou enviar os dados para um servidor
  
    // Limpar a seleção dos botões de doação e o valor inserido na caixa de texto
    var botoesDoacao = document.querySelectorAll(".button");
    botoesDoacao.forEach(function(botao) {
      botao.classList.remove("selecionado");
    });
    outroValorInput.value = "";
  }
  
  // Associar a função selecionarDoacao() ao clique nos botões de doação
  var botoesDoacao = document.querySelectorAll(".button");
  botoesDoacao.forEach(function(botao) {
    botao.addEventListener("click", function() {
      selecionarDoacao(botao);
    });
  });
  
  // Associar a função enviarDoacao() ao clique do botão "DOAR!"
  document
    .querySelector(".button-enviar")
    .addEventListener("click", enviarDoacao);
  
  // Associar a função configurarValidacao() ao evento de clique nas opções
  document.getElementById("email").addEventListener("click", configurarValidacao);
  document.getElementById("celular").addEventListener("click", configurarValidacao);