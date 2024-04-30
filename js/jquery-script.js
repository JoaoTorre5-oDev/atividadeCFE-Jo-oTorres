// efeito esconder formulario de cadastro 

$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastro").sliderToggle("slow");
        $("#section-login").sliderToggle("slow");
        $("#botao-cadastrar").hide();
    });
});


        
