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
    function scheduleTimeline() {
        var currenttime = moment().hour();
        $(".time-block").each(function() {
            var timeinBlock = parseInt($(this).attr("id").split("hour")[1]);
        // .removeClass and .addClass used to create new class for identification
        if (currenttime < timeinBlock) {
            // if currentime < timeinBlock => identify as past time with color lightblue
            $(this).removeClass()
        }
        })
        
        

    }
    scheduleTimeline();
})