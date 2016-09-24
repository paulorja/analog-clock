(function($){

    $.fn.analogClock = function(settings){
        var config = {
            'size': 400
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

    		hour_pointer.css('transform', 'rotate(140deg)');
    		minutes_pointer.css('transform', 'rotate(30deg)');
    		seconds_pointer.css('transform', 'rotate(2100deg)');

        	$(this).addClass('analog-clock')
        });
    };

})(jQuery);