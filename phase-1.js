setTimeout(() => {console.log("first timeout");}, 1000);

function stretch() {
  // Your code here

  return new Promise((resolve, reject) => {
    resolve(setTimeout(() => {console.log("done stretching");}, 1000));
    reject(console.log("strech promise rejected"));
  });
}

function runOnTreadmill() {
  // Your code here
  return new Promise((resolve, reject) => {
    resolve(setTimeout(() => {console.log("done running on treamill");}, 500));
    reject(console.log("run promise rejected"));
  });
}

function liftWeights() {
  // Your code here
  return new Promise((resolve, reject) => {
    resolve(setTimeout(() => {console.log("done lifting weights")}, 2000));
    reject(console.log("lift promise rejected"));
  });
}

function workout() {
  // Your code here
  stretch()
    .then(runOnTreadmill())
    .then(liftWeights())
    .then(console.log("done working out"));
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
