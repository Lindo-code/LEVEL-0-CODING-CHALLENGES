function areaOfTriangle(num1, num2, num3) {
  let x = (num1 + num2 + num3) / 2;
  let y = ((x - num1) * (x - num2) * (x - num3)) * x;
  let Area = Math.sqrt(y);
  return `${Area.toFixed(2)}cm squared`;
}
console.log(areaOfTriangle(6, 6, 6));