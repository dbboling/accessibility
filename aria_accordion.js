$(document).ready(function($) {
    scrollToPanel = true; // Scroll clicked panel to top of page
    pageOffset = 150; // Distance from top to scroll to when panel is clicked (ie. to compensate for a fixed header)
    
    $('#accordion').find('.accordion-toggle').click(function(){

      // If aria-hidden is set to true, expand it and collapse others
      if($(this).attr('aria-hidden') == 'true'){

        // Expand or collapse this panel
        $(this).parent().find('.accordion-content').css('display','none');
        $(this).parent().find('.accordion-toggle').attr('aria-hidden', 'true');
        $(this).find('.accordion-content').css('display','block');
        $(this).attr('aria-hidden', 'false');
        
        // Scroll to opened panel
        if(scrollToPanel == true){
          pageOffsetBase = $(this).offset();
          $('body,html').animate({ 
              scrollTop: pageOffsetBase.top - pageOffset 
          });
        }
    }

    // If aria-hidden is set to false, collapse it
    else if($(this).attr('aria-hidden') == 'false'){
        $(this).parent().find('.accordion-content').css('display','none');
        $(this).parent().find('.accordion-toggle').attr('aria-hidden', 'true');
    }

    // Do nothing if aria-hidden isn't set
    else{}
  });
        
    // Allow the enter key to function as left click
    $('.accordion-toggle').keyup(function(event){
        if(event.keyCode == 13){
            $(this).click();
        }
    });
});
