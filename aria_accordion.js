$(document).ready(function($) {
  $('#accordion').find('.accordion-toggle').click(function(){  // When ".accordion-toggle" is clicked
    $(this).parent().find('.accordion-content').css('display','none');  // Hide everything in everything in ".accordion-content" classes
    $(this).parent().find('.accordion-toggle').attr('aria-hidden', 'true');  //  Let aria know the content inside ".accordion-toggle" is hidden
    $(this).find('.accordion-content').css('display','block');  // Show the .accordion-content that was clicked
    $(this).attr('aria-hidden', 'false');  // Let aria know it's showing
  });
});
