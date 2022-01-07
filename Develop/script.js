// moment().format('dddd', "MMM Do YY");

window.setInterval(function (){
    $('#currentDay').html(moment().format('dddd MMM Do'))
}, 1000);

