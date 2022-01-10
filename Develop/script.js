window.setInterval(function (){
    $('#currentDay').html(moment().format('ddd MMM Do'))
}, 1000);

$('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var key = $(this).parent().attr('id');

    localStorage.setItem(key, value)
});

function updateTimeFormat() {
    var currentHour = moment().hours();


    $('.time-block').each(function () {
        var elementHour = parseInt($(this).attr('id'))

        if (elementHour < currentHour) {
            $(this).addClass('past')
        } else if (elementHour === currentHour) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }

    })
};

updateTimeFormat();
// saved in local storage
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));