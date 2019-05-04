$(document).ready(function () {
  $(document).scroll(function () {
    var top = $(document).scrollTop();
    var viewport = $("#sidebar-right")[0].offsetTop;
    var parentwidth = $('#sidebar-right').width();
    if (top >= viewport) {
      $('#toc-right').addClass("fixed").width(parentwidth);
    }
    else if ($('#toc-right').hasClass('fixed')) {
      $('#toc-right').removeClass('fixed')
    }
  });
});