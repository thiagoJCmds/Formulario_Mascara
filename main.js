$(document).ready(function () {
  
  $("#telefone").mask('(00) 00000-0000')
  $("#cpf").mask("000.000.000-92")
  $("#cep").mask("00.000-000")
  
  
  
  
  
  
  
  
  
  
    $("form").validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            },
            endereço:{
                required: true
            },
            cep:{
                required: true
            },
        },
        messages: {
            nome : "Por favor insira seu nome completo",

            email: "Por favor insira seu email",

            telefone: "Por favor insira seu telefone",

            cpf: "Por favor insira seu CPF",

            endereço: "Por favor insira seu endereço completo",

            cep: "Por favor insira seu CEP",
        }
    })
    
    $("button").click("submit", function (e){

        e.preventDefault()

        
        const nomeCompleto = $("#nome").val()
        const nomeValido = nomeCompleto.split(" ").length >=2

        if (nomeValido === false) {
            
            const pN = $(`<p id='p1'>Preencha com o nome completo</p>`).appendTo("#campo1")
          
            
        }
       
        else {
            $("#p1").hide(); 
        }    
        const endereçoCompleto = $("#endereço").val()
        const endereçoValido = endereçoCompleto.split(" ").length >=2
        if (endereçoValido === false) {
            
             const pE = $(`<p id="p2">Preencha com o endereço completo</p>`).appendTo("#campo2")
            
        }
        else {$("#p2").remove()}
      
        
        console.log("ok")
      
    });
    });

