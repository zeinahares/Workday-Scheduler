
// [x] the current day is displayed at the top of the calendar when calendar opens
// [X] WHEN I scroll down THEN I am presented with timeblocks for standard business hours
// [X] each timeblock is color coded to indicate whether it is in the past, present, or future (CHANGE CLASSES, ADD REMOVE FUTURE & PAST & PRESENT)
// [X] WHEN I click into a timeblock THEN I can enter an event
// [ ] WHEN I click the save button for that timeblock THEN the text for that event is saved in local storage
// [ ] WHEN I refresh the page THEN the saved events persist

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
console.log('hi');
$(function () {
  // set the value of each time in day.js inside html 
  // set the value of #hour-9 to 09
  $('#hour-9').children('.hour').val(dayjs().hour(09).format('HH'));
  // set the value of #hour-10 to 10, etc
  $('#hour-10').children('.hour').val(dayjs().hour(10).format('HH'));
  $('#hour-11').children('.hour').val(dayjs().hour(11).format('HH'));
  $('#hour-12').children('.hour').val(dayjs().hour(12).format('HH'));
  $('#hour-1').children('.hour').val(dayjs().hour(13).format('HH'));
  $('#hour-2').children('.hour').val(dayjs().hour(14).format('HH'));
  $('#hour-3').children('.hour').val(dayjs().hour(15).format('HH'));
  $('#hour-4').children('.hour').val(dayjs().hour(16).format('HH'));
  $('#hour-5').children('.hour').val(dayjs().hour(17).format('HH'));

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var todaysHour = dayjs().format('HH');
  var workdayHours = 9;

  var hourBox = $('.container-lg').children('.row');

  for(var i = 0; i < workdayHours; i++) {
    if (hourBox.eq(i).children('.hour').val() === todaysHour) {
      hourBox.eq(i).addClass('present');
    } else if (hourBox.eq(i).children('.hour').val() < todaysHour) {
      hourBox.eq(i).addClass('past');
    } else if (hourBox.eq(i).children('.hour').val() > todaysHour){
      hourBox.eq(i).addClass('future');
    }
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // display the current date in the header of the page
  var todaysDate = dayjs();
  $('#currentDay').text(todaysDate.format('dddd, D MMMM YYYY'));

});
