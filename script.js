//selectors
$(savedSchedule);

//functions
function savedSchedule() {
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  colorTimeBlocks();
  setInterval(colorTimeBlocks, 60000);
  $(".time-block").each(function() {
    var blockId = $(this).attr("id");
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });
  $(".saveBtn").on("click", handleSave);
$(".time-block").each(function() {
    var blockId = $(this).attr("id");
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });
    $(".saveBtn").on("click", handleSave);
}
