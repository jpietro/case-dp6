// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Adição do Google Analytics
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    
ga('create', 'UA-12345-6', 'auto');

//Send Event
function sendGA(hitType, eventCategory, eventAction, eventLabel) {
    var params = {hitType, eventCategory, eventAction, eventLabel};
    ga('send', params)
}

// Cards Montadoras - Lorem, Ipsum e Dolor
$( ".card.card-montadoras" ).click(function(){
    data = $(this).data();
    sendGA('event', 'analise', 'ver_mais', data.name);
});

// Botão Entre em contato
$( ".menu-lista-link.menu-lista-contato" ).click(function(){
    sendGA('event', 'menu', 'entre_em_contato', 'link_externo');
});

// Botão Download PDF
$( ".menu-lista-link.menu-lista-download" ).click(function(){
    sendGA('event', 'menu', 'download_pdf', 'download_pdf');
});

// Campo Nome - Contato
$( "#nome" ).change(function(){
    var nome = $("#nome").val();
    if(nome){
        sendGA('event', 'contato', 'nome', 'preencheu');
    }
});

// Campo Email - Contato
$( "#email" ).change(function(){
    var email = $("#email").val();
    if(email){
        sendGA('event', 'contato', 'email', 'preencheu');
    }
});

// Campo Telefone - Contato
$( "#telefone" ).change(function(){
    var telefone = $("#telefone").val();
    if(telefone){
        sendGA('event', 'contato', 'telefone', 'preencheu');
    }
});

// Campo Nome - Aceito que entrem em contato
$( "#aceito" ).change(function(){
    var aceito = $("#aceito").val();
    if(aceito){
        sendGA('event', 'contato', 'aceito', 'preencheu');
    }
});

// Botão Enviar - Contato
$( ".contato button[type='submit']" ).click(function(){
    sendGA('event', 'contato', 'enviado', 'enviado');
});

// Envio de Visualização de Página
window.addEventListener('load', function() {
    ga('send', 'pageview', location.pathname);
});