$(document).ready(function() {
  $("#transportaion-survey").submit(function(event) {
    event.preventDefault();
    $("#work-responses").show();
    $("input: checkbox[name=work-transportation]:checked").each(function() {
      const workTransportMode = $(this).val();
      $("#work-responses"),append(workTransportMode + "<br>");
    });
    
  });
});