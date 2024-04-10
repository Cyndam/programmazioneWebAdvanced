$(document).ready(function(){
    $('.cambia-testo').click(function(){
        $('p').text("il testo del paragrafo è stato cambiato")
    })

    $('li').click(function(){
        $('li').removeClass('selected');
        $(this).addClass('selected');
    })
    $('.aggiungi-elemento'.click(function(){
        var valore = $('.campo-testo').val();
        var nuovoElemento = '<li>' + valore + '</li>';
        $('.lista-elementi').append(nuovoElemento);

        $('.campo-testo').val("");
    }))
})