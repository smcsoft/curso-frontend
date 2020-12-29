let btnItems = document.querySelectorAll('.item .btn__item');
let slider_index = 0;

for(let i=0; i<btnItems.length; i++) {
    btnItems[i].addEventListener("click",function(e) {
        let btn = e.target;
        if(btn.className=='btn__item active') {
            removerClase();
        } else {
            removerClase();
            btn.classList.add('active');
        } 
    })
}

function removerClase() {
    for(let i=0; i<btnItems.length; i++) {
        btnItems[i].classList.remove('active');
    }
}

function show_slide(index) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot-nav');
    for (let i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.revove('active-dot');
    }
}

/*
$(document).ready(function() {
    var scroll = $(window).scrollTop();
    $('#posicion').text(scroll);
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        $('#posicion').text(scroll);
        /*Cambia el color del div cuando es distinto a 0/
        if(scroll>780){
            $('.container__header').css({
                background: '#aaa1a1' 
            });
        }else{
            $('.navbar').css({
                background: 'transparent'
            });
        }
    });
    });
*/