$(function(){

    //Abrir janela modal de HTML

    function ModalHTML(){

        $('#html').click(function(){
            $('.ModalHTML').fadeIn();
        })
    
        setTimeout(function() {
            $('.ModalHTML').fadeOut();
        }, 5000);

    }

    ModalHTML();

    //JAnela Modal JS

    function ModalJS(){
        $('#js').click(function(){
            $('.ModalJS').fadeIn();
        })
    
        setTimeout(function() {
            $('.ModalJS').fadeOut();
        }, 5000);
    }

    ModalJS();

    //Janela Modal De CSS

    function ModalCSS(){
        $('#css').click(function(){
            $('.ModalCSS').fadeIn();
        })
    
        setTimeout(function(){
            $('.ModalCSS').fadeOut();
        }, 5000);
    }

    ModalCSS();

})