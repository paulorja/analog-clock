(function($){

  $.fn.analogClock = function(settings){
    var date = new Date();

    var config = {
      'size': 400,
      'hours': date.getHours(),
      'minutes': date.getMinutes(),
      'seconds': date.getSeconds(),
      'speed': 1000,
      'animate': true,
      'toggleBtn': true,
      '24hours': false
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
      );
    }

    var hour_pointer = new_pointer('analog-clock-hour-pointer');
    var minutes_pointer = new_pointer('analog-clock-min-pointer');
    var seconds_pointer = new_pointer('analog-clock-sec-pointer');

    function refresh_pointers() {
      if(config['24hours']) {
        hour_pointer.css('transform', 'rotate('+config['hours']*15+'deg)');
      } else {
        hour_pointer.css('transform', 'rotate('+config['hours']*30+'deg)');
      }
      minutes_pointer.css('transform', 'rotate('+config['minutes']*6+'deg)');
      seconds_pointer.css('transform', 'rotate('+config['seconds']*6+'deg)');
    }

    function clock_labels() {
      var clock_labels = "";
      if(config['24hours']) {
        for (var i = 1; i<=24 ; i++) {
          clock_labels += '<div class="clock-label-out" style="transform: rotate('+(15*i)+'deg);">';
          clock_labels += '<div class="clock-label" style="transform: rotate(-'+(15*i)+'deg); font-size: '+config['size']*0.08+'px;">'+i+'</div>';
          clock_labels += '</div>';
        }
        for (var i = 1; i<=60 ; i++) {
          clock_labels += '<div class="clock-label-out-24h" style="transform: rotate('+(6*i)+'deg);">';
          clock_labels += '<div class="clock-label-24h" style="transform: rotate(-'+(6*i)+'deg); font-size: '+config['size']*0.03+'px;">'+i+'</div>';
          clock_labels += '</div>';
        }
      } else {
        for (var i = 1; i<=12 ; i++) {
          clock_labels += '<div class="clock-label-out" style="transform: rotate('+(30*i)+'deg);">';
          clock_labels += '<div class="clock-label" style="transform: rotate(-'+(30*i)+'deg); font-size: '+config['size']*0.08+'px;">'+i+'</div>';
          clock_labels += '</div>';
        }
      }
       
      return clock_labels;
    }

     function clock_center() {
       return $('<div>', {
         class: 'clock-center-bg',
       });
     }

     function toggle_clock() {
       toggle_clock_btn.prev().toggle();

       if(toggle_clock_btn.html() == 'Hide Clock') {
         toggle_clock_btn.html('Show Clock');
      } else {
        toggle_clock_btn.html('Hide Clock');
  		}
  	}

  	var clock_container = $('<div>', {
  		class: 'analog-clock-container',
  	});

  	var toggle_clock_btn = $('<button>', {
  		class: 'toggle-clock-btn',
  	}).html('Hide Clock');

    //set clock size
    $(this).css({'height': config['size'], 'width': config['size']});

    return this.each(function(){
    	$(this).addClass('analog-clock')

    	$(this).append(clock_container);
    	clock_container.append(hour_pointer);
    	clock_container.append(minutes_pointer);
    	clock_container.append(seconds_pointer);
    	clock_container.append(clock_labels);
    	clock_container.append(clock_center);
      	
    	if(config['toggleBtn']) {
		  $(this).append(toggle_clock_btn);

        toggle_clock_btn.click(function() {
    		  toggle_clock();
    	  });
    	}
      	

  		refresh_pointers();
  		if(config['animate']) {
  			setInterval(function(){ 
    			config['seconds'] += 1;
    			if(config['seconds'] % 60 == 0) {
    				config['minutes'] += 1;
    			}
    			if(config['minutes'] % 60 == 0 && config['seconds'] % 60 == 0) {
    				config['hours'] += 1;
    			}
				  refresh_pointers();
			  }, config['speed']);
  		}
    });
  };

})(jQuery);
