$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            email: 'Este e-mail é inválido, tente novamente'
        },
        submitHandler: function(form){
            form.submit()
            alert('Recebemos sua mensagem! Entraremos em contato dentro de 24 horas. Até já!')
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campo(s) inválido(s)`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-de-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})