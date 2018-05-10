$(document).ready(function() {
    $(document).scroll(function() {
      var top = $(document).scrollTop();
      var viewport = $("#sidebar-right")[0].offsetTop;
        if (top >= viewport ) {
            $('.toc-right').addClass("fixed");
        } else if ($('.toc-right').hasClass('fixed')) {
        $('.toc-right').removeClass('fixed')}
    });
  });