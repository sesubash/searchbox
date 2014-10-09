searchbox
=========

Jquery plugin for expandable search input.

How to use
==========

  <b>HTML:</b><br>
  <i>&lt;div class="search"&gt;&lt;/div&gt;<br/></i>
  <b>Usage of plugin:</b><br>
  <i>$(".search").searchbox({<br>
      &nbsp;&nbsp;&nbsp;&nbsp;name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"search",<br>
      &nbsp;&nbsp;&nbsp;&nbsp;method:&nbsp;&nbsp;&nbsp;"POST",<br>
      &nbsp;&nbsp;&nbsp;&nbsp;url:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"someurl.php",<br>
      &nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;&nbsp;"right",<br>
      &nbsp;&nbsp;&nbsp;&nbsp;ajax:&nbsp;&nbsp;true,<br>
      &nbsp;&nbsp;&nbsp;&nbsp;ajaxOptions:&nbsp;&nbsp;{<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;success:&nbsp;&nbsp;function(success){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert(success);<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;error:&nbsp;&nbsp;function(error){<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert(error);<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
      &nbsp;&nbsp;&nbsp;&nbsp;}<br>
  });</i>

TODO: 
    1. Add option to make position of the serachbox as inline, right now it is absolute.
<a href="http://jsfiddle.net/Lw3CN/24/embedded/result/">Demo</a>
