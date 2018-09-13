
function printNums(startNum, endNum) {

if (startNum > endNum) {
  return;
}

console.log(startNum);
startNum++;
printNums(startNum, endNum);


}

printNums(50, 300);
