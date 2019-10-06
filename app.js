// HTML document ready
$(function() {
  // Event handler for details button clicks
  $("button").click(function() {
    // Show and hide details text
    $(this).next(".details").toggle();
  });
});
