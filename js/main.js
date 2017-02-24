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

	// $('#radio #button-right').click(function(){
	// 	angle -= 10;
	// 	rotate(this, angle);
	// });
})

$(function () {
        $(window).scroll(function () {
             if ($(this).scrollTop() > 200 ) {
                $('#info1').removeClass('hid')
            } else {
                $('#info1').addClass('hid')
            }

            if ($(this).scrollTop() > 400 ) {
                $('#info2').removeClass('hid')
            } else {
                $('#info2').addClass('hid')
            }
    });
})