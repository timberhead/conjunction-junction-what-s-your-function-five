
var today = moment().format("dddd, MMMM Do YYYY")
$("#currentDay").text(today);
console.log(today);





$(".saveBtn").on("click", function () {

    console.log(this);
    var text = $(this).siblings(".description").val()
    console.log(text);
    var time = $(this).siblings(".description").attr("id")
    console.log(time);
    localStorage.setItem(time, text);

})

$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))


function rowUpdater() {
    var currentHour = moment().hours();


    $(".time-block").each(function () {

        var rowHour = $(this).children(".description").attr("id")

        if (rowHour < currentHour) {
            $(this).addClass("past");
        }

        else if (rowHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
                ;
        }

        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })




}

rowUpdater()









