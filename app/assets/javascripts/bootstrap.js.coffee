jQuery ->
  $("a[rel=popover]").popover()
  $(".tooltip").tooltip()
  $("a[rel=tooltip]").tooltip()

$("#myTab a").click (e) ->
  e.preventDefault()
  $(this).tab "show"
  return