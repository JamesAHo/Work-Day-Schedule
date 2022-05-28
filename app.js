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
    function scheduleTimeline() {
        var currenttime = moment().hour();
        var time = parseInt($(this).attr("id").split("hour")[1]);
        console.log(time)

    }
})