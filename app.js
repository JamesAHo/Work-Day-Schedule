var todayDate = moment().format('ddd, MMM Do YYYY');
// use jquery to write html elements
$("#currentDay").html(todayDate);

// use documenet.ready() to manipulate document safetly.

$(document).ready(function() {
    // console.log("document loaded!");
    // function for savedButton
    $(".saveBtn").click(function(){
        // console.log("click")
        // make variables for the notes and hours and save to localstorage
        var scheduleNotes = $(this).siblings(".description").val();
        var hours = $(this).parent().attr("id");
        localStorage.setItem(scheduleNotes, hours);
        

    });
    // using loop function over the timeline of the schdule to identify past, present and future time
    // past, present and future time can identify by different color
    // past = pink, future = green, present = lightblue
    function scheduleTimeline() {
        var currenttime = moment().hour();
        $(".time-block").each(function() {
            var timeinBlock = parseInt($(this).attr("id").split("hour")[1]);
        // .removeClass and .addClass used to create new class for identification if the current block time is past/future/present
        if (timeinBlock < currenttime) {
            // if currentime < timeinBlock => identify as past time with color lightblue
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currenttime === timeinBlock) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        })
        
        

    }
    // SAVED notes into localstorage if any. 
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    scheduleTimeline();
})