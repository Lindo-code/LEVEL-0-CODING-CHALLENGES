function minsToHoursMins(num) {
  let hoursStr = "hours"; let minsStr = "minutes";
  let getHours = num / 60; let hours = Math.floor(getHours);
  let getMins = (getHours - hours) * 60; let mins = Math.round(getMins);
  if (hours === 1) {
    hoursStr = "hour";
  }
  if (mins === 1 ) {
    minsStr = "minute";
  }
  console.log(`${hours} ${hoursStr}, ${mins} ${minsStr}.`);
}
minsToHoursMins(27);
minsToHoursMins(133);
