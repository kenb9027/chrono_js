document.addEventListener("DOMContentLoaded", function () {

    var $start = document.querySelector(".start");
    var $stop = document.querySelector(".stop");
    var $reset = document.querySelector(".reset");
    var $minute = document.querySelector(".minute");
    var $second = document.querySelector(".second");
    var $millisecond = document.querySelector(".millisecond");

    function updateScreen() {
        $millisecond.textContent = chrono.result[6] + chrono.result[7] + chrono.result[8];
        $second.textContent = chrono.result[3] + chrono.result[4];
        $minute.textContent = chrono.result[0] + chrono.result[1];
    }

    $start.addEventListener("click", function () {
        chrono.start(updateScreen);

    });

    $stop.addEventListener("click", function () {
        chrono.stop();


    });

    $reset.addEventListener("click", function () {

        chrono.reset(updateScreen);


    });

})