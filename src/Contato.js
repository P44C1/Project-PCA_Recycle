document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    
    // Simulação de envio
    setTimeout(function() {
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Mensagem:", mensagem);
        
        exibirMensagemEnviada();
    }, 1000); // Simulação de 1 segundo de tempo de envio
});

function exibirMensagemEnviada() {
    var mensagemEnviada = document.createElement("p");
    mensagemEnviada.textContent = "Mensagem enviada com sucesso!";
    mensagemEnviada.style.color = "green";
    
    var form = document.getElementById("contact-form");
    form.appendChild(mensagemEnviada);
    
    // Limpar o formulário após o envio (opcional)
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
}
