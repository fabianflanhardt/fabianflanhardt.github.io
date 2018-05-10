$( document ).ready(function() {
    // Handler for .ready() called.
  
    var contentcontainer = $('#maincontent')[0];

    if (contentcontainer.firstElementChild.className == 'posts') {
        $('#toc-right').toc({ minimumHeaders: 1, listType: 'ol', showSpeed: 0, headers: '.post h1', title: 'Latest posts' });
    }
    else if (contentcontainer.firstElementChild.className == 'post') {
        $('#toc-right').toc({ minimumHeaders: 1, listType: 'ol', showSpeed: 0, headers: '.entry h2', title: 'Post content' });
    }
   
    /* this offset helps account for the space taken up by the floating toolbar. 
    $('#toc').on('click', 'a', function() {
        var target = $(this.getAttribute('href'))
        , scroll_target = target.offset().top
        $(window).scrollTop(scroll_target - 10);
        return false
    })
    */    
  });