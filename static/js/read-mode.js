$(".read-button").click(function() {
    var $this = $(this);
    var $divBtnGrp = $('.btnGroup');
    var $divDisqus = $('.disqus-comments');
    var $divContainer = $('.container');
    var $divSide = $('.sidebar');
    $this.toggleClass("show");
    $divBtnGrp.toggleClass("x-margin");
    $divContainer.toggleClass("read-mode");
    $divSide.toggleClass("hide-el");
    $divDisqus.toggleClass("hide-el");
    $(".banneradtop").toggleClass("hide-el");
    if ($this.hasClass("show")) {
        document.body.style.backgroundColor = '#ddd';
        $('h1').css({ 'color' : '#000' });
        $('h2').css({ 'color' : '#000' });
        $('h3').css({ 'color' : '#000' });
    } else {
        document.body.style.backgroundColor = '#fff';
        $('h1').css({ 'color' : '#696969' });
        $('h2').css({ 'color' : '#696969' });
        $('h3').css({ 'color' : '#696969' });
    }
});
