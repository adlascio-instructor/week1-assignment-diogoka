/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function (date) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let dateArray = date.split("/")
  let day = "";
  let month = "";
  let year = "";

  console.log(dateArray[1])

  let dayDate = new Date(2012, 12, 3)

  console.log(dayDate);


  dateArray.map((item, index) => {
    if (index === 0) {
      year = item;
    }
    if (index === 1) {
      month = months[parseInt(item) - 1]
    }
    if (index === 2) {
      switch (item) {
        case "01":
          day = `${parseInt(item)}st`
          break
        case "02":
          day = `${parseInt(item)}nd`
          break;
        case "03":
          day = `${parseInt(item)}rd`
          break;
        default:
          day = `${parseInt(item)}th`
      }
    }
  })



  // return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
// console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
// console.log(talkingCalendar("1987/08/24")); // August 24th, 1987

module.exports = talkingCalendar;
