//selectors
$(savedSchedule);

//global variable

//functions



function savedSchedule() {
  // get current day and display on top of page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // color our time blocks and start interval to re-color every minute
  colorTimeBlocks();
  setInterval(colorTimeBlocks, 60000);

  // update time blocks with data in local storage
  $(".time-block").each(function() {
    var blockId = $(this).attr("id");
    // load saved data from local storage
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });

  // attach our handler for the save buttons
  $(".saveBtn").on("click", handleSave);


// update time blocks with data in local storage
$(".time-block").each(function() {
    var blockId = $(this).attr("id");
    // load saved data from local storage
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });

  // attach our handler for the save buttons
  $(".saveBtn").on("click", handleSave);
}
