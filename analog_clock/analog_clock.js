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

		function refresh_pointers() {
			hour_pointer.css('transform', 'rotate('+config['hours']*30+'deg)');
    		minutes_pointer.css('transform', 'rotate('+config['minutes']*6+'deg)');
    		seconds_pointer.css('transform', 'rotate('+config['seconds']*6+'deg)');
		}

        //set clock size
        $(this).css({'height': config['size'], 'width': config['size']});

        return this.each(function(){
        	$(this).append(hour_pointer);
        	$(this).append(minutes_pointer);
        	$(this).append(seconds_pointer);

    		refresh_pointers();
    		setInterval(function(){ 
    			config['seconds'] += 1;
    			if(config['seconds'] % 60 == 0) {
    				config['minutes'] += 1;
    			}
    			if(config['minutes'] % 60 == 0) {
    				config['hours'] += 1;
    			}
				refresh_pointers();
			}, 1000);

        	$(this).addClass('analog-clock')
        });
    };

})(jQuery);