$(document).ready(function(){
    console.log(document.querySelector('header input'))
    console.log($('#btn-cancelar'))

    $('header input').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoDaNovaImagem = $('#url-img-nova').val();

        const novoItem = $('<li style="display: none;"></li>');

        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

        $(`<div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
        </div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1500)
        $('#url-img-nova').val('')
    })
})