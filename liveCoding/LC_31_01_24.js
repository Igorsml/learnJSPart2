// #1
function defangIPaddr(address) {
  return address.replaceAll(".", "[.]");
}

function defangIPaddr(address) {
  let newStr = "";

  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      newStr += "[.]";
    } else {
      newStr += address[i];
    }
  }

  return newStr;
}

console.log(defangIPaddr("1.1.1.1")); // "1[.]1[.]1[.]1"

// #2
function numberOfEmployeesWhoMetTarget(hours, target) {
  return hours.reduce((acc, cur) => {
    if (cur >= target) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);
}

const hours = [0, 1, 2, 3, 4];
const target = 2;
console.log(numberOfEmployeesWhoMetTarget(hours, target)); // 3

// #3
var runningSum = function (nums) {
  const resultArray = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    resultArray.push(sum);
  }

  return resultArray;
};

console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]

// #4
var smallerNumbersThanCurrent = function (nums) {
  let resultArray = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) count++;
    }

    resultArray.push(count);
  }

  return resultArray;
};

var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  console.log("sorted:", sorted);
  return nums.map((num) => sorted.indexOf(num));
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4,0,1,1,3]
