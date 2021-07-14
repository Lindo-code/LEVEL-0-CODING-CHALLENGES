function areaOfTriangle(num1, num2, num3) {
  var x = (num1 + num2 + num3) / 2;
  var y = ((x - num1) * (x - num2) * (x - num3)) * x;
  var Area = Math.sqrt(y);
  return Area;
}