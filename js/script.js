$(document).ready(() => {
    $('.ceritanyaiklan .col-lg-6').css({
        'margin-top': '200px'
    })
    $('.ceritanyaiklan .col-lg-6 h3').click(() => {
        $('.ceritanyaiklan').css({
            'display': 'none'
        })
    })
})

$(window).scroll(function() {
    if ($(window).width() >= 992) {
        let wscroll = $(this).scrollTop();

        $('.bbob .bbbb').css({
            'transform': `translate(0px, ${wscroll}%)`
        })
        $('.bbob .obbb').css({
            'transform': `translate(0px, ${wscroll*2.2}%)`
        })
        $('.bbob .oobb').css({
            'transform': `translate(0px, ${wscroll*1.7}%)`
        })
    }
    let wscroll = $(this).scrollTop();
    if (wscroll > $('#jmbo2').offset().top - 360) {
        $('#jmbo2 .container .text-center').each((i) => {
            setTimeout(() => {
                $('#jmbo2 .container .text-center').eq(i).addClass('muncul')
            }, 300 * (i + 1));
        })

    }
})