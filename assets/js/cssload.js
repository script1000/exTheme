var DefStyle = document.querySelector('#def-style');



DefStyle.onload = function() {
    document.getElementById('loadstatus').append("CSS: true");
}

DefStyle.onerror = function() {
    document.getElementById('loadstatus').append("CSS: false");
}