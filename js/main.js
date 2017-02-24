function rotate(element, angle) {
	var coord = $(element)[0].getBBox();
	var position = Number(coord.x + coord.width/2) +' '+ Number(coord.y + coord.height/2);
	$(element).attr('transform', 'rotate(' + angle + ' ' + position + ')');
}

$.get('radio.svg', function(res) {
	var angle = 0;
	document.getElementById("radio").appendChild(res.documentElement);

	$('#radio #button-left').click(function(){
		angle += 10;
		rotate(this, angle);
	});

	$('#radio #button-right').click(function(){
		angle -= 10;
		rotate(this, angle);
	});
})

$("#info1").hide();
$("#info2").hide();

$(function () {
        $(window).scroll(function () {
             if ($(this).scrollTop() > 200 ) {
                $('#info1').fadeIn(500);
            } else {
                $('#info1').fadeOut(500);
            }

            if ($(this).scrollTop() > 400 ) {
                $('#info2').fadeIn(500);
            } else {
                $('#info2').fadeOut(500);
            }
    });
})