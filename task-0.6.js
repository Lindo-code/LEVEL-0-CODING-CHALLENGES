function maximumNum(){
  let largestNum = 0;
  for(let i = 0; i < arguments.length; i++){
    if(largestNum < arguments[i]){
      largestNum = arguments[i];
    };
  }
  return largestNum;
}
console.log(maximumNum(1, 49, 6, 8, 90));
