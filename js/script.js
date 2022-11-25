$(function(){
	
	var note = $('#note'),
		ts = new Date(2022, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		ts = (new Date()).getTime() + 1*1*30*60*1000;
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " дн." + ( days==1 ? '':'' ) + ", ";
			message += hours + " час." + ( hours==1 ? '':'' ) + ", ";
			message += minutes + " мин." + ( minutes==1 ? '':'' ) + " и ";
			message += seconds + " сек." + ( seconds==1 ? '':'' ) + " <br />";
			
			if(newYear){
				message += "осталось до конца акции!";
			}
			else {
				message += "осталось от текущего момента до окончания акции!";
			}
			
			note.html(message);
		}
	});
	
});

$(function() {
	$('.rev_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	})
})