$( document ).ready(function() {
    $('#section_works').find('.col-sm-5').on('click',function(){
        window.open($(this).attr('data-url'),'_blank');
    });
});

$(document).on('click','a.nav-link,.navbar-header > a',function(event){
    event.preventDefault();
    var target = $(this).attr('href');
    $('html,body').animate({   
      scrollTop:$(target).offset().top
    },500);
});
