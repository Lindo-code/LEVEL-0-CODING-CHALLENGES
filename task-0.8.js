function minsToHoursMins(num) {
  let hoursStr = "hour"; let minsStr = "minute";
  let getHours = num / 60; let hours = Math.floor(getHours);
  let getMins = getHours - hours; let mins = getMins * 60;
  mins = Math.round(mins);
  if (hours > 1) {
    hoursStr = "hours";
  }
  if (mins == 0 || mins > 1 ) {
    minsStr = "minutes";
  }
  console.log(`${hours} ${hoursStr}, ${mins} ${minsStr}.`);
}
minsToHoursMins(71);
minsToHoursMins(133);
