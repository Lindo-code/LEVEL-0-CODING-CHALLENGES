function minsToHoursMins(num) {
  let hoursStr = "hour"; let minsStr = "minute";
  let getHours = num / 60; let hours = Math.floor(getHours);
  let getMins = (getHours - hours) * 60; let mins = Math.round(getMins);
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
