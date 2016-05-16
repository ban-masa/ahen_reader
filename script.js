var timer1;
var prevy = -1;

function scroll_and_jump ()
{
    var y;
    contents.scrollBy(0, 1);
    y = contents.scrollY;
    if (y == prevy) {
        var url = contents.location.href;
        var start = url.lastIndexOf("_");
        var end = url.lastIndexOf(".");
        var str = url.substring(start + 1, end);
        var index = Number(str) + 1;
        var real_index = index - 17;
        var next_url;
        if ((real_index > 480) && (real_index <= 500)) {
            var start_index = real_index - 1 - ((real_index - 1)% 30);
            next_url = "http://dka-hero.com/hm" + String(start_index + 1) + "_" + String(start_index + 20) + "/pict_com_" + String(index) + ".html";
        } else if (real_index > 500) {
            var start_index = real_index - 1 - ((real_index - 1 - 500) % 30);
            next_url = "http://dka-hero.com/hm" + String(start_index + 1) + "_" + String(start_index + 30) + "/pict_com_" + String(index) + ".html";
        } else {
            var start_index = real_index - 1 - ((real_index - 1) % 30);
            next_url = "http://dka-hero.com/hm" + String(start_index + 1) + "_" + String(start_index + 30) + "/pict_com_" + String(index) + ".html";
        }
        contents.location.href = next_url;
        prevy = -1;
        timer1 = setTimeout(scroll_and_jump, 1000);
    } else {
        prevy = y;
        timer1 = setTimeout(scroll_and_jump, 20);
    }
}

$(function () {chrome.runtime.sendMessage(
    {
        type: "mode",
        value: 0
    },
    function (response) {
        if (response) {
            clearTimeout(timer1);
            scroll_and_jump();
        } else {
            clearTimeout(timer1);
        }
    }
);});
//window.alert("end");
