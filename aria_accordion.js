  $(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

      //If aria-hidden is set to true, expand it and collapse others
      if($(this).attr('aria-hidden') == 'true'){

      //Expand or collapse this panel
        $(this).parent().find('.accordion-content').css('display','none');
        $(this).parent().find('.accordion-toggle').attr('aria-hidden', 'true');
        $(this).find('.accordion-content').css('display','block');
        $(this).attr('aria-hidden', 'false');
    }

    //If aria-hidden is set to false, collapse it
    else if($(this).attr('aria-hidden') == 'false'){
        $(this).parent().find('.accordion-content').css('display','none');
        $(this).parent().find('.accordion-toggle').attr('aria-hidden', 'true');
    }

    //Do nothing if aria-hidden isn't set
    else{}
  });
        
    //Allow the enter key to function as left click
    $('.accordion-toggle').keyup(function(event){
        if(event.keyCode == 13){
            $(this).click();
        }
    });
});
