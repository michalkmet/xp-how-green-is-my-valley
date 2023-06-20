function makeValley(arr) {

  let resultSorted = arr.sort((a,b)=>b-a);
  let leftWing = [];
  let rightWing = [];

  for (let i = 0; i < resultSorted.length; i++) {
    if(i % 2 == 0){
      leftWing.push(resultSorted[i]);
    } else {
      rightWing.push(resultSorted[i]);
    }
  }
  
  let rightWingSorted = rightWing.sort((a,b)=>a-b);
  return leftWing.concat(rightWingSorted);
}

module.exports = makeValley;
