/*
 * Subash selvaraj 2014
 * http://subashflash.blogspot.in/
 * https://github.com/sesubash/Javascript-Image-Resizer
 */

(function ($) {

	$.fn.searchbox = function(options){

		var searchbox = this;
		var defaults = {
			wrapper: '<div class="searchbox-wrapper"/>',
            method:"POST"
		};

		searchbox.settings = $.extend({}, defaults, options);
        var $window = $(window);
        
        searchbox.destroy = function(){
            searchbox.each(function(){
                $.removeData(this);
                var obj = $(this);
                var $input = obj.find("input");
                var $parent = obj.parent().parent();
                $input.unbind("click");
                $parent.unbind("click");
            });
        };

        return searchbox.each(function(i){

        	var obj = $(this);
            obj.addClass("search-box");
        	// wrap the item with outer div
        	obj.wrap(searchbox.settings.wrapper);
            obj.append("<div class='input-wrapper'><input class='search-input' type='text' name='"+searchbox.settings.name+"'></div>");
            obj.wrap("<form method='"+searchbox.settings.method+"' action='"+searchbox.settings.url+"'>");
        	var $input = obj.find("input");
            var $inputWrapper = obj.find(".input-wrapper");
        	var $parent = obj.parent().parent();
        	$parent.on("click", function(e){
        		$(this).toggleClass("active")
			    $input.focus();
			    e.preventDefault();
			    e.stopPropagation();
        	});
            
            if(searchbox.settings.position !== "undefined"){
                switch(searchbox.settings.position){
                    case "right":       
                                $inputWrapper.css("left", obj.width());
                                $inputWrapper.css("top", -obj.height()/2);
                                break;
                    case "left":
                                $inputWrapper.css("right", obj.width());
                                $inputWrapper.css("top", -obj.height()/2);
                                break;
                }
            }else{
                
            }

			$input.on("click", function(e){
			    e.preventDefault();
			    e.stopPropagation();
			});

			$(document).on("click",function(){
			    $parent.hasClass("active") ?  $parent.removeClass("active") : "";
			});

        });
	};

})(jQuery);