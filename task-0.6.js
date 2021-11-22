function maximumNum(){
  let largestNum = 0;
  for(let i = 0; i < arguments.length; i++){
    if(i === 0) {
      if(arguments[i] < 0) {
        largestNum = arguments[i];
      };
    }
    if(largestNum < arguments[i]){
      largestNum = arguments[i];
    };
  }
  return largestNum;
}
console.log(maximumNum(1, 49, 6, 8, 90));