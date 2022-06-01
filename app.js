// Make variable to get current time using moment().format().
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // add event on the saved button.
    // When clicked on saved button, infomation will be saved into localstorage.
    $(".saveBtn").on("click", function () {
        // 
        var Plan = $(this).siblings(".description").val();
        var clock = $(this).parent().attr("id");

        // save plan and clock into locacl storage.
        localStorage.setItem(clock, Plan);
    })
   
    function timeTracker() {
        // var for curren hour using moment().hour();
        var currentHour = moment().hour();

        // Logic function to identify past/future/present.

        $(".time-block").each(function () {
            var Time = parseInt($(this).attr("id").split("hour")[1]);

            // past will indicate pink background color.
            // future will indicate green background color.
            // present will indicate lightblue background color.
            if (Time < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (Time === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // When page is refreshed, saved description will persist.
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
    // recall funcion.
    timeTracker();
})