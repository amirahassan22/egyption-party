// sidebar

$(".sidebar-icon p,.close").click(function () {
    if ($(".sidebar-area").css("width") == 250 + `px`) {
        $(".sidebar-area").css({ "width": "0", "transition": "width 500ms ease" });
        $(".slider-content").css({ "margin-left": "10px", "transition": "margin-left 500ms ease" });
    }
    else {
        $(".sidebar-area").css({ "width": "250", "transition": "width 500ms ease" });
        $(".slider-content").css({ "margin-left": "250px", "transition": "margin-left 500ms ease" });
    }
})

//smooth scroll
$('a').click(function(){
    let section = $(this).attr("href");
    if($(section).offset() != undefined){
        let offSetTop = $(section).offset().top;
        $("html,body").animate({scrollTop:offSetTop},500)
    }
})


// details

$(".singer-info:first").css("display", "block");
$(".singers h3").click(function () {
    $(this).next().slideToggle(500);
    $(".singer-info").not($(this).next()).slideUp(500)
})

// duration

function showCountDown() {
    const eventDate = new Date(2022, 6,30, 0, 0, 0)
    let dateNow = new Date();
    let remainingTime = eventDate.getTime() - dateNow.getTime();
    let remDay = remainingTime/(1000*60*60*24)-30
    let days  = Math.floor(remDay)
    let rem = remDay - days
    let hour = rem*24
    let remMin = (hour - Math.floor(hour))*60
    let remSec = Math.floor((remMin - Math.floor(remMin))* 60)
    document.querySelector("#days h3").innerHTML = `${days} D`
    $("#hours h3").text(`${Math.floor(hour)} H`);
    $("#minutes h3").text(`${Math.floor(remMin)} M`);
    $("#seconds h3").text(`${Math.floor(remSec)} S`);

    setTimeout(showCountDown,1000);
}
showCountDown()


// textarea
$(".contact-form p span").text("100")
document.querySelector("#userMsg").addEventListener('keyup', (function () {
    const maxChar = 100;
    let values = this.value;
    let remaingChar = maxChar - values.length;
    $(".contact-form p span").text(maxChar)
    if (remaingChar >= 0) {
        console.log(remaingChar);
        $(".contact-form p span").text(remaingChar)
    }
    else {
        console.log("exceeded");
        $(".contact-form p span").text("your available character finished")
    }
    // console.log(values);
}))
