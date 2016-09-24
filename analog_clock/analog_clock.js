(function($){

    $.fn.analogClock = function(settings){
        var config = {
            'size': 500
        };
        if (settings){$.extend(config, settings);}

        return this.each(function(){
        	$(this).append('Hello clock');
        	$(this).addClass('analog-clock')
        });
    };

})(jQuery);