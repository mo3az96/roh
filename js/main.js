
$(document).ready(function () {
    $(".rocket").addClass("in")
    ////////////////// timer
    function makeTimer() {

        var endTimeVal = $('#timer').attr("data-time");
        var endTime = new Date(endTimeVal);
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }


        $("#days").html(days + "<h6>Days</h6>");
        $("#hours").html(hours + "<h6>Hrs</h6>");
        $("#minutes").html(minutes + "<h6>Min</h6>");
        $("#seconds").html(seconds + "<h6>Sec</h6>");
    }

    setInterval(function () { makeTimer(); }, 1000);
});