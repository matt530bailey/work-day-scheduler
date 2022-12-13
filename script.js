$(document).ready(() => {

  $('#currentDay').ready(setInterval(() => { 
    $('#currentDay').text(dayjs().format('ddd DD, MMM YYYY hh:mm:ss')); 
      }, 1000));

  $('.saveBtn').on('click', function () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
  });
// timBlock.function

  function timeColor() {
    var currentTime = dayjs().format('HH');
"hour-9" == 09
    $('.time-block').each(function () {
      var timeBlock = parseInt($(this).attr('id').split('hour-')[1]);
      console.log("timeblock ", timeBlock, "currentTime: ", currentTime);
        // console.log("this: ", this.children[1]);
        // console.log("localStore", localStorage.getItem($(this).attr('id')));
        this.children[1].value = localStorage.getItem($(this).attr('id'))
      if (timeBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (timeBlock == currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }
  timeColor();
});
