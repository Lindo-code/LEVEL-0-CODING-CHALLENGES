function minsToHoursMins(num) {
  let hoursStr = "hours"; let minsStr = "minutes";
  const getHours = num / 60; const hours = Math.floor(getHours);
  const getMins = (getHours - hours) * 60; const mins = Math.round(getMins);
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
