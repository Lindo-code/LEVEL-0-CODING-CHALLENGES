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
function maximumAnyNum(...nums){
  var nums = [...nums];
  var x = nums.length;
  var largestNum = nums[0];
  for (var i = 0; i < x; i++){
    if (largestNum < nums[i]){
      largestNum = nums[i];
    }
  }
  return largestNum;
}

