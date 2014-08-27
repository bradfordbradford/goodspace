// Now, Now  //
$(document).ready(function($) {

    // POINTS
    /////////////////////////////////////////////////////////
    var waypoint_offset = 50;
    var stuck_top_spacing = 0;
    var top_spacing = '3em';
    var nav = $('#site-header');
    nav.waypoint(function(direction) {
      if (direction == 'down') {
              $(this).addClass('stuck')
              .stop().css("top", -nav.outerHeight()).animate({"top" : stuck_top_spacing});

            } if (direction == 'up') {
              $(this).removeClass('stuck').stop()
              .css("top", nav.outerHeight() + waypoint_offset).animate({"top" : top_spacing});
            };
    },
    {
      offset: function() {
      return -nav.outerHeight()-waypoint_offset;
    }
    });
    $('section').waypoint(function(direction) {
        var active_section;
        var navigation_links = $("#site-nav a");
        active_section = $(this);
        if (direction === "up") active_section = active_section.prev();
        var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
        navigation_links.removeClass("active");
        active_link.addClass("active");
    }, {
        offset: function() {
            return $.waypoints('viewportHeight') - $(this).height() + 260;
        }
    });

});