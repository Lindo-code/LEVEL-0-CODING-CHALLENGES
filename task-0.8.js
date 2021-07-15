function minsToHoursMins(num) {
  var hoursStr = "hour"
  var minsStr = "minute"
  var hours1 = num / 60;
  var hours2 = Math.floor(hours1)
  var hours3 = hours1 - hours2
  var mins = hours3 * 60;
  var mins = Math.round(mins)
  if (hours2 > 1) {
    hoursStr = "hours";
  }
  if (mins > 1) {
    minsStr = "minutes";
  }
  console.log(hours2 +' '+ hoursStr +', '+ mins +' '+ minsStr +'.');
}
