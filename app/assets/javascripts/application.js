// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui-1.10.4.custom.js
//= require twitter/bootstrap
//= require_tree .
$(document).ready(function () {
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

  $('a.external').on('click', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $(".modal-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="yes" allowtransparency="true" src="http://www.therubydummy.blogspot.mx"></iframe>');
    });
    $('#myModal').on('show.bs.modal', function () {

        $(this).find('.modal-dialog').css({
                  width:'100%', //choose your width
                  height:'100%',
                  'padding':'0'
           });
         $(this).find('.modal-content').css({
                  height:'100%',
                  'border-radius':'0',
                  'padding':'0'
           });
         $(this).find('.modal-body').css({
                  width:'auto',
                  height:'100%',
                  'padding':'0'
           });
    });
    var map;
    function initialize() {
        var mapOptions = {
            zoom: 10,
            center: new google.maps.LatLng(19.282093, -103.725880)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});
