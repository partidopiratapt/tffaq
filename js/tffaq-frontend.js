$(window).load(function() {
    $("#tffaq-tabs").tabs({
        cookie: {}
    }).show();
    $('a.tffaq-question').click(function() {
        var tfaid = $(this).data("options").id;
        $('#tffaq-answer-' + tfaid).toggle();
        $('#tffaq-tabs-2 #tffaq-answer-' + tfaid).toggle();

    });

});