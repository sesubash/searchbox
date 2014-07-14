/*
 * Author      : Subash Selvaraj
 * website     : http://subashflash.blogspot.in/
 * Plugin url  : https://github.com/sesubash/searchbox
 * Created date: 14-07-2014
 * Last updated: 14-07-2014
 */

(function ($) {
    $.fn.searchbox = function(options){
        var searchbox = this;
        var defaults = {
            wrapper: '<div class="searchbox-wrapper"/>',
            method:"POST"
        };
        searchbox.settings = $.extend({}, defaults, options);

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
            // wrap the item with outer parent div
            obj.wrap(searchbox.settings.wrapper);
            // add the input field to the plugin
            obj.append("<div class='input-wrapper'><input class='search-input' type='text' name='"+searchbox.settings.name+"'></div>");
            // wrap the input field with a <form/> 
            obj.wrap("<form method='"+searchbox.settings.method+"' action='"+searchbox.settings.url+"'>");

            var $input = obj.find("input");
            var $inputWrapper = obj.find(".input-wrapper");
            var $parent = obj.parent().parent();

            //
            $parent.on("click", function(e){
                $(this).toggleClass("active");
                $input.focus();
                e.preventDefault();
                e.stopPropagation();
            });

            // set the postion of wrapper based on the option
            if(searchbox.settings.position !== "undefined"){
                switch(searchbox.settings.position){
                    case "right":
                                $inputWrapper.css("left", obj.width());
                                break;
                    case "left":
                                $inputWrapper.css("right", obj.width());
                                break;
                }
            }else{// by default set the position of wrapper to the right side of search icon
                $inputWrapper.css("left", obj.width());
            }

            // adjust the vertical position of wrapper
            $inputWrapper.css("top", -obj.height()/2);

            // prevent the search wrapper from closing it when clickon the input field
            $input.on("click", function(e){
                e.preventDefault();
                e.stopPropagation();
            });

            // close the input wrapper on clicking anywhere else other than input box
            $(document).on("click",function(){
                $parent.hasClass("active") ?  $parent.removeClass("active") : "";
            });
        });
    };
})(jQuery);