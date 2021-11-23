function areaOfTriangle(num1, num2, num3) {
  const halfPerimeter = (num1 + num2 + num3) / 2;
  const area = Math.sqrt(((halfPerimeter - num1) * (halfPerimeter - num2) * (halfPerimeter - num3)) * halfPerimeter);
  return `${area.toFixed(2)}cm squared`;
}
console.log(areaOfTriangle(6, 6, 6));