(function($){

    $.fn.analogClock = function(settings){
    	var date = new Date();

        var config = {
            'size': 400,
            'hours': date.getHours(),
            'minutes': date.getMinutes(),
            'seconds': date.getSeconds(),
        };
        if (settings){$.extend(config, settings);}

		function new_pointer(class_name) {
			return $('<div>', {
		    			class: 'analog-clock-pointer-out',
					})
					.append(
						$('<div>', {
							class: 'analog-clock-pointer'
						})
						.append(
							$('<div>', {
								class: class_name
							})
						)
					)
					;
		}

		var hour_pointer = new_pointer('analog-clock-hour-pointer');
		var minutes_pointer = new_pointer('analog-clock-min-pointer');
		var seconds_pointer = new_pointer('analog-clock-sec-pointer');

        //set clock size
        $(this).css({'height': config['size'], 'width': config['size']});

        return this.each(function(){
        	$(this).append(hour_pointer);
        	$(this).append(minutes_pointer);
        	$(this).append(seconds_pointer);

    		hour_pointer.css('transform', 'rotate('+config['hours']*30+'deg)');
    		minutes_pointer.css('transform', 'rotate('+config['minutes']*6+'deg)');
    		seconds_pointer.css('transform', 'rotate('+config['seconds']*6+'deg)');

        	$(this).addClass('analog-clock')
        });
    };

})(jQuery);