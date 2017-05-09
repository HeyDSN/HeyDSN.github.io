$(".read-button").click(function() {
    var $this = $(this);
    var $divBtnGrp = $('.btnGroup');
    var $divDisqus = $('.disqus-comments');
    var $divContainer = $('.container');
    var $divSide = $('.sidebar');
    $this.toggleClass("show");
    $divBtnGrp.toggleClass("x-margin");
    $divContainer.toggleClass("read-mode");
    $(".banneradtop").toggle();
    if ($this.hasClass("show")) {
        $divSide.hide('slow');
        $divDisqus.hide();
        document.body.style.backgroundColor = '#ddd';
    } else {
        $divSide.show('slow');
        $divDisqus.hide();
        document.body.style.backgroundColor = '#fff';
    }
});

/*
var div = $('someDiv');
console.log(div.style('color'));
div.style('color', 'red');
console.log(div.style('color'));
div.style('color', 'blue', 'important');
console.log(div.style('color'));
console.log(div.style().getPropertyPriority('color'));
*/
//document.getElementById("sidebar").style.display = "none";