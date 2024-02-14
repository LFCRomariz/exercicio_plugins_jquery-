$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
  });

  $.validator.addMethod("validaCpf", function(value, element) {
    return this.optional(element) || /^[0-9]{11}$/.test(value);
  }, "Por favor, digite um CPF válido.");

  $("#formCadastro").validate({
    rules: {
      cpf: {
        validaCpf: true
      }
    },
    messages: {
      cpf: {
        validaCpf: "Por favor, digite um CPF válido."
      }
    },
    errorPlacement: function(error, element) {
      error.appendTo("#mensagemErro");
    }
  });

  function cadastrar() {
    if ($("#formCadastro").valid()) {

      alert('Cadastro realizado com sucesso!');
      
      $('#nomeCompleto, #email, #telefone, #cpf, #endereco, #cep').val('');

      $('#mensagemErro').text('');
    }
  }