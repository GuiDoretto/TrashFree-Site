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

// Associar a função ao evento de clique nas opções
document.getElementById("email").addEventListener("click", configurarValidacao);
document.getElementById("celular").addEventListener("click", configurarValidacao);