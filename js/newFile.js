//efeito de esconder formulário de cadastro
$(document).ready(function () {

    $("#botao-cadastrar").click(function () {

        $("#form-cadastrar").sliderToggle("slow");
        $("#section-login").sliderDown("slow");
        $("#botao-cadastrar").hide();
    });
});
