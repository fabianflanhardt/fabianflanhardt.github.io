
// highlight first toc item after page load
$(document).ready(function(){
  // get all clickable headers on the page
  var $headers = $('.clickable-header');
  // Select first item's ID Attribute
  var firsttocid = $($headers[0]).attr('id');
  // select parent item of link in right sidebar, that points to first discovered header
  var ListNode = $('.rightcontainer [href="#'+ firsttocid +'"]').parent()
  ListNode.addClass('active');
});

// query active section when scrolling and highlight items
$(document).ready(function(){
  // $sections incleudes all of the container divs that relate to menu items.
  var $headers = $('.clickable-header'); 
  
  // The user scrolls
  $(window).scroll(function(){
    
    // currentScroll is the number of pixels the window has been scrolled
    var currentScroll = $(this).scrollTop();
    
    // $currentSection is somewhere to place the section we must be looking at
    var id
    
    // We check the position of each of the divs compared to the windows scroll positon
    $headers.each(function(){
      // divPosition is the position down the page in px of the current section we are testing      
      var divPosition = $(this).offset().top;
      
      // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
      // the -1 is so that it includes the div 1px before the div leave the top of the window.
      if( divPosition - 25 < currentScroll ){
        // We have either read the section or are currently reading the section so we'll call it our current section
        id = $(this).attr('id');
        
        // If the next div has also been read or we are currently reading it we will overwrite this value again. 
        //This will leave us with the LAST div that passed.
      }
    })

    // keep first item highlighted as long as there is no other result
    if (!id) {
      id = $($headers[0]).attr('id');
    }

    // This is the bit of code that uses the currentSection as its source of ID
    $('li').removeClass('active');
    var ListNode = $('.rightcontainer [href="#'+ id +'"]').parent()
    ListNode.addClass('active');
  });
});