var video = document.getElementById("video"),
fraction = 0.8;

function rotate(element, angle) {
	var coord = $(element)[0].getBBox();
	var position = Number(coord.x + coord.width/2) +' '+ Number(coord.y + coord.height/2);
	$(element).attr('transform', 'rotate(' + angle + ' ' + position + ')');
}

$.get('radio.svg', function(res) {
	var angle = 0;
	document.getElementById("radio").appendChild(res.documentElement);
	player = document.getElementById('audio');

	$('#radio #button-left').click(function(){
		angle += 10;
		rotate(this, angle);
		player.play();
	});
})

$(function () {
        $(window).scroll(function () {
        	//Position du scroll + moitié de l'écran visible
        	var scroll = $(this).scrollTop()+window.innerHeight/4;

             if (scroll > $('#info1').offset().top ) {
                $('#info1').removeClass('hid')
            } else {
                $('#info1').addClass('hid')
            }

            if (scroll > $('#info2').offset().top ) {
                $('#info2').removeClass('hid')
            } else {
                $('#info2').addClass('hid')
            }

            //Condition pour démarrer et mettre en pause la vidéo dès lors qu'elle n'est plus visible
            if (scroll > $('#video').offset().top && scroll < $('#video').offset().top+$('#video').height() ) {
                video.play();
            } else {
                video.pause();
            }
    });
})
