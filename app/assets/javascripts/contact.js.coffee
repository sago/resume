# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
$(document).ready ->
  $("#contact-tab a").click() if $("#contact").hasClass("active") is true
  $("input[type=reset]").on "click", ->
    $(".field_with_errors").removeClass "field_with_errors"
  return
return
