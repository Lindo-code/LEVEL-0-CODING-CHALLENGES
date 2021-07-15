function maximumNum(num1, num2, num3){
  var maxNum = ''
  if (num1 > num2 && num1 > num3) {
    maxNum = num1;
  } else if (num2 > num1 && num2 > num3) {
    maxNum = num2;
  } else {
    maxNum = num3;
  }
  return maxNum;
}

