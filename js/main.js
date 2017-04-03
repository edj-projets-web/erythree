var video = document.getElementById("video"),
    fraction = 0.8;

function rotate(element, angle) {
    var coord = $(element)[0].getBBox();
    var position = Number(coord.x + coord.width / 2) + ' ' + Number(coord.y + coord.height / 2);
    $(element).attr('transform', 'rotate(' + angle + ' ' + position + ')');
}

var radio = document.getElementById("radio");
var player = document.getElementById('audio');

$.get($(radio).data('image'), function(res) {
    var angle = 0;

    radio.appendChild(res.documentElement);

    $('#radio #button-left').click(function() {
        angle += 360 / 10;
        rotate(this, angle);
        player.play();
    });
});

$(function() {
    $(window).scroll(function() {
        //Position du scroll + moitié de l'écran visible
        var scroll = $(this).scrollTop() + window.innerHeight / 4;

        if (scroll > $('#info1').offset().top) {
            $('#info1').removeClass('hid')
        } else {
            $('#info1').addClass('hid')
        }

        if (scroll > $('#info2').offset().top) {
            $('#info2').removeClass('hid')
        } else {
            $('#info2').addClass('hid')
        }

        $(".footer").toggle($(this).scrollTop() > 280);

        //Condition pour démarrer et mettre en pause la vidéo dès lors qu'elle n'est plus visible
        if (scroll > $('#video').offset().top && scroll < $('#video').offset().top + $('#video').height()) {
            video.play();
        } else {
            video.pause();
        }
    });

    $(".smooth-scroll").click(function(event) {
        //prevent the default action for the click event
        event.preventDefault();

        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = parts[1];

        //get the top offset of the target anchor
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top;

        //goto that anchor by setting the body scroll top to anchor top
        $('html, body').animate({ scrollTop: target_top }, 700);
    });
});
