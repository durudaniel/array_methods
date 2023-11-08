const copy_detail = { music_name: "dax", net_worth: "$1000000" };
const copy_origin = { country: "nigerai" };
const concat_detail_origin = { ...copy_detail, ...copy_origin };

//spread two arrays and square root each element
const firstArray = [25, 4, 9];
const secondArray = [36, 49, 144];
const spreadArrays = [...firstArray, ...secondArray];

const programmingLangauges = ["python", "c++", "javascript", "java"];

let gameType = new Map();
gameType.set("game year", 2019);
gameType.set("name", "fifa mobile");
gameType.set("played", true);

const foodToEat = new Map();
foodToEat.set("rice", "yes u can");

function food(rice) {
  return rice;
}
const riceMap = new Map();
riceMap.set("rice", "yes u can eat it");

/* ##TASKONMAP##
1. write a javascript map to add the following values 
"ryu","japan"
"ken","USA"
"Guile","USA"
"blanka","brazil"

2.iterates over the value and console the result*/

function country(state) {
  return state;
}
const countryAndStateMap = new Map();
countryAndStateMap.set("Ryu", "japan");
countryAndStateMap.set("Ken", "U.S.A");
countryAndStateMap.set("Gulie", "U.S.A");
countryAndStateMap.set("Blanka", "Brazil");

for (var value of countryAndStateMap.keys()) {
  console.log(value);
}
for (var [keys, values] of countryAndStateMap.entries()) {
}
// write a javascript to add the length of array on each element
const arrMap = [2, 3, 7, 8, 9];
const mapOut = arrMap.map((length) => length + arrMap.length);

function lengthOfAnArray(arrLength, number) {
  if (arrLength.length >= number)
    return `the length of ${arrLength} is greater than or equals to ${number}.`;
  else if (arrLength.length <= number)
    return `the length of ${arrLength} is less than ${number}.`;
  else {
    return `the length of ${arrLength} is not even equalled to or less than ${number}.`;
  }
}

/* write a javascript array object : name,age,and occupation and filter age above 45 years with
programming occupation and sort by name */

const usersObject = [
  { Name: "duru paul", age: 27, occupation: "tech developing" },
  { Name: "daniel duru", age: 47, occupation: "programming" },
  { Name: "plantain rice", age: 29, occupation: "programming" },
  { Name: "koji kenji", age: 76, occupation: "martial arts" },
  { Name: "mama mia", age: 49, occupation: "doctor" },
  { Name: "chisom kenndy", age: 87, occupation: "programming" },
];

const filterusers = usersObject
  .filter((userName) => {
    return userName.age >= 45 && userName.occupation === "programming";
  })
  .sort((x, r) => {
    if (x.Name < r.Name) return -1;
    if (x.Name > r.Name) return 1;
  });
const object = { file: "documents", class: "jss1" };

// wirte a javascript to multiply all element by the the length
const lengthNumber = [3, 6, 7, 9, 20];
const multiply = lengthNumber.map((index) => {
  return index * lengthNumber.length;
});

// write a javascript to multiply all element by index of the array
const indexNumber = [23, 34, 56, 7, 8];
function multiplyByIndex(number, index) {
  return number * index;
}
const indexResult = indexNumber.map(multiplyByIndex);

// write a javascript to filter only numbers in an array

const stringNumber = ["daniel", 34, 67, "edu", 78];

const filterAllNumber = stringNumber.filter(Number);

const productionName = [
  { Name: "iphone", price: 17000, importPrice: 500 },
  { Name: "samsung", price: 15500, importPrice: 500 },
  { Name: "redMi", price: 2900, importPrice: 700 },
];
const addPriceAndImportPrice = productionName.map((expenses) => {
  return expenses.importPrice + expenses.price;
});

function numberOfStudent(pass, fail) {
  if (pass == 5 && fail >= 10) return " teaching perfomance is too poor";
  else if (pass >= 10 && fail <= 8)
    return " teaching is performances is very excellent";
  else {
    return "no performances";
  }
}

//write a javascript tp multiply the price of cars by it's number

const carDetails = [
  { carName: "G_Wagon", price: 1000000, carsNumber: 35 },
  { carName: "BMW", price: 1500000, carsNumber: 35 },
  { carName: "Rose_Royce", price: 1000000, carsNumber: 30 },
];
const carsValue = carDetails.map((multiply) => {
  return {
    ...multiply,
    totalNumberOfCarsValue: multiply.price * multiply.carsNumber,
  };
});

/* write a javascript object containing personal details and add persons name and surname in 
the object*/

const personal_file = [
  { firstName: "michael", surname: "diesel" },
  { firstName: "hedricc", surname: "peter" },
  { firstName: "ebere", surname: "morgan" },
  { firstName: "prettie", surname: "michelle" },
];
const add_file = personal_file.map((add) => {
  return {
    ...add,
    fullName: add.surname + " " + add.firstName,
  };
});

/*creat a javascript of dead list and filter dead record from 2015 and above*/

const dead_list = [
  {
    murgeName: "franku cuccahria",
    DeadCause: "road accident",
    DeathYear: 2014,
    DeathMonth: "16th AUG",
  },
  {
    murgeName: "joel delbene",
    DeadCause: "kidney disease",
    DeathYear: 2015,
    DeathMonth: "4th sept",
  },
  {
    murgeName: "dustin stinett",
    DeadCause: "brain cancer",
    DeathYear: 2017,
    DeathMonth: "13th jan",
  },
  {
    murgeName: "argelio loen",
    DeadCause: "broken chest",
    DeathYear: 2015,
    DeathMonth: "1th march",
  },
  {
    murgeName: "peter haydrich",
    DeadCause: "air crash",
    DeathYear: 2000,
    DeathMonth: "30th jun",
  },
  {
    murgeName: "kimmich beckam",
    DeadCause: "ship sink",
    DeathYear: 2020,
    DeathMonth: "23th oct",
  },
];
const deadPrint = dead_list
  .filter((deadRecord) => {
    return deadRecord.DeathYear >= 2015;
  })
  .map((mapping) => {
    return {
      ...mapping,
      deathRecord: mapping.DeathMonth + " " + mapping.DeathYear,
    };
  })
  .sort((m, n) => {
    if (m.murgeName < n.murgeName) return -1;
    if (m.murgeName > n.murgeName) return 1;
  });

const fruit = "Apple";
for (i in fruit) {
  if ("A" === fruit[i]) {
    //console.log(`A is a letter in ${fruit}`);
  } else {
    //console.log(`A is not a letter in ${fruit}`);
  }
  break;
}
//###########################################################
//FIND => find is used to find an element inside of an array#####################
//FINDindex => findindex is used to find the index of that elemnet in an array###
//###############################################################################

//create an array of object and find an element

const users = [
  { user_name: "oblak david", age: 45 },
  { user_name: "Ferouz michael", age: 67 },
  { user_name: "ebuka george", age: 32 },
];

const result = users.find((user) => {
  return user.user_name === "Ferouz michael";
});
const forIndex = users.findIndex((index) => {
  return index.user_name === "Ferouz michael";
});
console.log(forIndex);
// create a javascript array containing numbers [45,7,6,8,0,2] and get 0 from there

const numArr = [45, 7, 6, 8, 0, 2];
const extract = numArr.find((pick) => {
  return pick === 45;
});
console.log(extract);
const cake = [1, 2, 3, 4, 5];
const plate = [
  "plate one",
  "plate two",
  "plate three",
  "plate four",
  "plate five",
];
for (i = 0; i < cake.length; i++) {
  for (h = 0; h < plate.length; h++) {
    //console.log(`cake${cake[h]} in ${plate[h]} is served`);
  }
  break;
}
const arr_detail = [10, 5, 7, 50];

const reduce_arr = arr_detail.reduce((accum, index) => {
  return accum + index;
}, 0);

//write a javascript to sum users expenses for the month

const budget = [
  { user: "redicc", monthlyExpenses: 500 },
  { user: "vin JR", monthlyExpenses: 1000 },
  { user: "derock", monthlyExpenses: 3500 },
];

const expenses = budget.reduce((sum, income, hit, sup) => {
  return sum + income.monthlyExpenses;
}, 0);
//console.log(`the sum total of the users ependiture is: ${expenses}`);

const students_name = ["daniel", "peter", "sammy"];
const score = [21, 43, 67];
for (i = 0; i < students_name.length; i++) {
  for (j = 0; j < score.length; j++) {
    const result = students_name[j] + " has " + score[j] + " scores ";
  }
  break;
}

const pets = ["dog", "cats", "fish", "rat"];
const rearable = pets.includes("fish");

const foot_wears = [
  { type: "cover shoes", amount: 200, number: 3 },
  { type: "sandals", amount: 110, number: 8 },
  { type: " canvas shoes", amount: 800, number: 2 },
];

const allShoesValue = foot_wears
  .map((result) => {
    return {
      ...result,
      total: result.amount * result.number,
    };
  })
  .reduce((value, totalValue) => {
    return value + totalValue.total;
  }, 0);

const animal = [
  { parent: "lion" },
  { parent: "tiger" },
  { parent: "elephant" },
  { parent: "horse" },
];
let youngOnes = ["cub", "pup", "calf", "foal"];

const getSome = youngOnes.some((result) => {
  /*console.log(result);
  console.log(tit);
  console.log(hub);*/
  return result === "pup" && "cub" && "calf";
});

const library = [
  { bookName: "my life as a fairy", bookNumber: 4 },
  { bookName: "all my wealth", bookNumber: 9 },
  { bookName: "unbearable", bookNumber: 15 },
  { bookName: "hooked", bookNumber: 6 },
];
const totalise = library.reduce((sum, total) => {
  return sum + total.bookNumber;
}, 0);

const everyNumber = library.every((num) => {
  return num.bookNumber >= 4;
});
//console.log(everyNumber);

const footBallers = [
  { name: "lionel andres messi", ovrRating: 120 },
  { name: "cristiano ronaldo", ovrRating: 119 },
  { name: "neymar junior", ovrRating: 119 },
  { name: "sergio ramos", ovrRating: 118 },
];
const sumUpOvrRating = footBallers.reduce((rating, sum) => {
  return rating + sum.ovrRating;
}, 0);

const carUpdate = [
  { type: "bMW", model: "bMW2OY21", modelYear: 2020 },
  { type: "mercedes", model: "AVRT G90", modelYear: 2020 },
  { type: "mercedes", model: "4MATIC", modelYear: 2017 },
  { type: "FORD", model: "FD20Y15", modelYear: 2015 },
  { type: "Tesla", model: "tes20El22", modelYear: 2022 },
];

const updatedCars = carUpdate.filter((New) => {
  return New.modelYear >= 2018;
});

const animalClass = {
  name: "lion",
  family: "cats family",
  characteristics: "mammalia",
};
const { name, family, characteristics } = animalClass;

//Class Declaration
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  outPut() {
    //console.log(`${this.make} ${this.model} (${this.year})`);
  }
}
const myCar = new Car("mercedes", "4Matic", 2014);
myCar.outPut();
//console.log(myCar);

class SportsCar extends Car {
  print() {
    //console.log(`${this.make} goes faster and vroom`);
  }
}
const mySportsCar = new SportsCar("mercedes", "AVRT G90", 2021);
mySportsCar.print();
//console.log(mySportsCar);
/*on "let" Class Declarattion
let car = class{

}*/

function Cars(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCarName = new Cars("BMW", "Fi789l", 2020);

class ClassToOrdained {
  constructor(classPrefect, classAssitant, rullingAge) {
    this.classPrefect = classPrefect;
    this.rullingAge = rullingAge;
    this.classAssitant = classAssitant;
  }
  remark() {
    return `${this.classPrefect} and ${this.classAssitant} has the rulling power for
${this.rullingAge} years`;
  }
}
const nameOfOrdained = new ClassToOrdained("Rachell", "Bentley", 3);
//console.log(nameOfOrdained.remark());

function PlayerDetail(name, club, country, league, age) {
  this.name = name;
  this.club = club;
  this.country = country;
  this.league = league;
  this.age = age;
}

const names = ["david", "daniel", "paul", "emmanuel", "michael"];
const others = ["sammy", "decks", "wolfghang", "duru", "bentley"];

const arrayOfNumbers = [2, 3, 4, 5, 6];
const resultArrays = arrayOfNumbers.reduce((each, num) => {
  return each + num;
}, null);

const combine = names.concat(others);
const findCombine = combine.findIndex((find) => {
  return find === "wolfghang";
});
//console.log(combine.join("~"));
/*console.log(findCombine);
console.log(combine);

console.log(names.shift());
console.log(names);
console.log(others);
console.log(others.reverse());

const today = new Date();
console.log(today);
console.log(today.getDay());
console.log(today.getMonth());
console.log(today.getTime());
*/
//string methods : trim,includes,EndsWith,startsWith,"split","slice",substr

/*
function QuickChat(name,Email,password){
  this.name = String(prompt(`user ${name}`));
  this.Email = (prompt(`ùser ${Email}`));
  this.password = Number(prompt(`user ${password}`));
  this.refilling = function(){
    try {
      if(password !== Number){}

    } catch (error) {
      return "password should be a number"
    }
  }

    try {
    if(name != String){}
   } catch (error) {
    return "name must be in letter" 
   }


};
const chatApp = new QuickChat("name","E-mail","password")
console.log(chatApp.refilling())*/

/*. Write a JavaScript program to add items to a blank array and display them.
Sample Screen :
add elements in an blank array
 */

//Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// here you create global variable and an empty value
let arrayNumber = [];
let outPut = [];
function removeDuplicates(num) {
  //loop through parameter num
  for (x = 0; x < num.length; x++) {
    // add num index to an existing variable and assign a value to it
    arrayNumber[num[x]] = 0;
  }

  // now loop through arrayNumber and push/unshift it to our "outPut" variable
  for (i in arrayNumber) {
    outPut.push(i);
  }
  return outPut;
}
const duplicateNumbers = [1, 2, 2, 2, 1, 1, 4, 3, 6, 7, 5, 5, 5];
console.log("duplicate =", removeDuplicates(duplicateNumbers));
const arrayString = [];
let arrayToPushIn = [];
function deleteDuplicate(stringValue) {
  for (x = 0; x < stringValue.length; x++) {
    arrayString[stringValue[x]];
  }
  for (i in arrayString) {
    arrayToPushIn.push(i);
  }
  return arrayToPushIn;
}
const duplicateString = [
  "daniel",
  "daniel",
  "Daniel",
  "Remmy",
  "silas",
  "silas",
  "remmy",
];

/*Write a JavaScript program to display the colors in the following way.

Here is the sample array:
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Output
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -*/
let colorNumber = 1;
function displayColor() {
  const abbreviatedWords = ["st", "nd", "rd", "th"];
  const color = ["green", "blue", "red", "orange"];
  for (i = 0; i < color.length; i++) {
    for (x = 0; x < abbreviatedWords.length; x++) {
      const resultOfColors = `${colorNumber}${abbreviatedWords[x]} choice is ${color[x]}`;
      colorNumber++;
      return resultOfColors;
    }
    break;
  }
}

displayColor();

/*const colors = ["blue","red","green","orange"];
const abbreviatedWords = ["st","nd","rd","th"];
let colorNumber = 1

for(i = 0;i < colors.length;i++){
  for(x = 0; x < abbreviatedWords.length;x++){
    const resultOfColors = `${colorNumber}${abbreviatedWords[x]} choice is ${colors[x]}`
    colorNumber++
    console.log(resultOfColors)
  }
  break;
}*/

// Write a JavaScript program to find the sum of squares of a numerical vector.
function sumNumericVectors(numerics) {
  const sumSquares = numerics.reduce((add, square) => {
    return add + Math.pow(square, 2);
  }, 0);
  return sumSquares;
}
//console.log(sumNumericVectors([3,4,5,6,7]))

// Write a JavaScript program to find the leap years in a given range of years.

function leapYear(years) {
  const arrayToPush = years.filter((year) => {
    return year % 4 === 0 || year % 400 === 0;
  });
  return arrayToPush;
}
const seriesOfYear = [2000, 2010, 2012, 2015, 2018];

/*function leap_year_range(st_year, end_year) {
  var year_range = [];
  for (var i = st_year; i <= end_year; i++)
  {
       year_range.push(i);
  }
  var new_array = [];

year_range.forEach(
function(year)
{ 
 if (test_LeapYear(year)) 
 new_array.push(year);
});

return new_array;
}

function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
          return year;
  } else {
          return false;
  }
}
console.log(leap_year_range(2000,2012));*/

//Write a JavaScript program that takes an array of numbers and returns the third smallest number

function test(arr_nums) {
  return arr_nums.sort((x, y) => {
    return y - x;
  })[arr_nums.length - 3];
}

let nums = [2, 3, 5, 7, 1];
//console.log("third smallest = ",test(nums))

//console.log("third smallest =", test([1, 0, 3, 5, 6, 7]));

function filterArray(filterate) {
  return filterate.filter((data) => {
    const dataTypes = typeof data;
    //console.log(dataTypes)
    return dataTypes === "number";
  });
}
//console.log(filterArray([1, 2, "a", "b"]))

function battingAvg(arr) {
  let hits = 0;
  let batAverage = 0;
  arr.forEach((value) => {
    hits += value[0];
    batAverage += value[1];
  });
  return (hits / batAverage).toFixed(5).slice(1);
}
//console.log(battingAvg([[2, 3, 4]]) )

function numberSplit(split) {
  return [Math.floor(split / 2), Math.ceil(split / 2)];
}

//console.log(numberSplit(10))

function sortBylength(arrayString) {
  return arrayString.sort((value1, value2) => {
    if (value1.length < value2.length) return -1;
    if (value1.length > value2.length) return 1;
    return 0;
  });
}
//console.log(sortBylength(["a","gregor","win","tray"]))

function sumOfCube(cubes) {
  return cubes.reduce((value, index) => {
    return value + Math.pow(index, 3);
  }, 0);
}
//console.log(sumOfCube([2,3,4,7,8]))

function getOnlyEvens(evenNumbers) {
  return evenNumbers.filter((even, indices) => {
    return even % 2 === 0 && indices % 2 === 0;
  });
}
//console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]))

function sortNumsAscending(nums) {
  if (nums === null) {
    return [];
  }
  return nums.sort((int, num) => {
    if (int < num) return int - num;
  });
}

//console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]))

function isAvgWhole(arrayValue) {
  const arrayResult = arrayValue.reduce((value, index) => {
    return value + index;
  }, 0);
  if (arrayResult % arrayValue.length === 0) {
    return true;
  } else {
    return false;
  }
}

//console.log("whole number = " ,isAvgWhole([1, 2, 3, 4]))

// write a javascript to get the even value and indices in an array
function getEvenValue(evenValue) {
  if (evenValue === null) return [];
  return evenValue.filter((value, index) => {
    return value % 2 === 0 && index % 2 === 0;
  });
}

//console.log(getEvenValue([0,3,7,8,10,9,16]))
//console.log(getEvenValue(null))

function splitValue(toSplit) {
  return [Math.floor(toSplit / 2), Math.ceil(toSplit / 2)];
}

//console.log(splitValue(16))

function getAbsSum(numbers) {
  let sum = 0;
  for (i in numbers) {
    if (numbers[i] < 0) {
      sum += numbers[i] * -1;
      continue;
    }
    sum += numbers[i];
  }
  return sum;
}
//OR
function getAbsSum1(numbers) {
  return numbers.reduce((num, absoluteValue) => {
    return num + Math.abs(absoluteValue);
  }, 0);
}

//console.log(getAbsSum1([-2,-4,-4,-10,-2])

function calculateDifference(items, limit) {
  let sum = 0;
  for (let keys in items) {
    sum += items[keys];
  }
  return sum - limit;
}

//OR
function calculateDifference1(item, limit) {
  return (
    Object.values(item).reduce((itemValue, limitedValue) => {
      return itemValue + limitedValue;
    }, 0) - limit
  );
}
//console.log(calculateDifference1({pawpaw: 10,apple: 5},5))

// javascript code to get an sum of all elements in an array and solve for the difference

function sumAndDifference(absArray, difference) {
  return (
    absArray.reduce((arr, value) => {
      return arr + Math.abs(value);
    }, 0) - difference
  );
}
//console.log(sumAndDifference([2,4,5,4,-10],10))

function findLargestNums(largestArray) {
  return largestArray.map((array) => {
    //console.log(array)
    return Math.max(...array);
  });
}

//console.log("largest num =" ,findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))

//console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]))

/*console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314],
 [9, 3, 6, 3]]))*/

function societyName(friends) {
  return friends
    .map((society) => {
      return society.slice(0, 1);
    })
    .sort((num1, num2) => {
      if (num1 < num2) return -1;
      if (num2 < num1) return 1;
    })
    .join("");
}

//console.log(societyName(["Adam", "Sarah", "Malcolm"]));

//console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));

/*console.log(
  societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])
);*/

/*Create a function that takes an array of numbers and return both the minimum and 
maximum numbers, in that order.*/

function minMax(number) {
  const result = number
    .map(() => {
      const max = Math.max(...number);
      const min = Math.min(...number);
      return { min, max };
    })
    .slice(0, 1);
  const minValue = result[0].min;
  const maxValue = result[0].max;
  return [minValue, maxValue];
}

//console.log("minMaxValue = ", minMax([1, 2, 3, 4, 5]));

//console.log("minMaxValue =", minMax([2334454, 5]));

//console.log("minMaxValue =", minMax([1]));

/*const arr = [1, -10, 2, 3, 4, 5, 6, 7, 8, 19];
const result1 = arr.map(() => {
  const max = Math.max(...arr); // Math.min(1, -10, 2, 3, 4, 5, 6, 7, 8, 19)
  const min = Math.min(...arr);

  return { max, min };
});
arr.splice
const indexOfResukt = result1.splice(0, 1);

console.log('indexOfResukt', indexOfResukt);

console.log('obj', indexOfResukt[0]);

const maxValue = indexOfResukt[0].max;

console.log('result', maxValue);

const minValue = indexOfResukt[0].min;

console.log('result', minValue);

console.log('result', [minValue, maxValue]);*/

function tuckIn(arr1, arr2) {
  return arr1
    .map(() => {
      let firstIndex = arr1[0];
      let secondIndex = arr1[1];
      return [firstIndex, ...arr2, secondIndex];
    })
    .splice(0, 1);
}
//console.log("spreadedResult = ", tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

//console.log("spreadedResult = ", tuckIn([15, 150], [45, 75, 35]));

/*console.log(
  "spreadedResult = ",
  tuckIn(
    [
      [1, 2],
      [5, 6],
    ],
    [[3, 4]]
  )
);*/

function canNest(arr1, arr2) {
  const arr1Min = Math.min(...arr1);
  const arr1Max = Math.max(...arr1);
  const arr2Min = Math.min(...arr2);
  const arr2Max = Math.max(...arr2);
  if (arr1Min > arr2Min && arr2Max > arr1Max) {
    return true;
  }
  return false;
}
//console.log(canNest([1, 2, 3, 4], [0, 6]));

//console.log(canNest([3, 1], [4, 0]));

//console.log(canNest([9, 9, 8], [8, 9]));

//console.log(canNest([1, 2, 3, 4], [2, 3]));

function clonArray(array) {
  return array.splice(0);
}
//console.log(clonArray([1, 2, 4, 5]));

//return the max and min of an array max first while min second
function minMaxReturn(minMax) {
  const result = minMax
    .map(() => {
      const min = Math.min(...minMax);
      const max = Math.max(...minMax);
      return { max, min };
    })
    .splice(0, 1);
  const minResult = result[0].min;
  const maxResult = result[0].max;
  return [maxResult, minResult];
}
//console.log("min and max result = ", minMaxReturn([1, 9, 5, 6, 7, 4]));

//console.log("min and max result = ", minMaxReturn([0]));

// javascript code to tuck in an array of string in the middle of another array
function tuckInArrayString(arrString1, arrString2) {
  return arrString1
    .map(() => {
      const indexArrayString1 = arrString1[0];
      const indexArrayString2 = arrString1[1];
      return [indexArrayString1, ...arrString2, indexArrayString2];
    })
    .splice(0, 1);
}

/*console.log(
  "tuck in = ",
  tuckInArrayString(["pawpaw", "apple"], ["strawberry", "cherry"])
);*/

// write a javascript code to remove all strings from an array

function filterStrings(arrString) {
  return arrString.filter((filterate) => {
    const stringDataType = typeof filterate;
    return stringDataType === "string";
  });
}
/*console.log(
  "string type =",
  filterStrings(["1", "daniel", null, true, false, 2, 3, 4, "uche"])
);*/

// write a javascript code to return the min and max from two different array and combine

function differentMinMax(min, max) {
  const minValue = Math.min(...min);
  const maxValue = Math.max(...max);
  return [minValue, maxValue];
}
/*console.log(
  "different min and max =",
  differentMinMax([10, 5, 20], [50, 45, 7])
);*/

function toArray(obj) {
  return Object.entries(obj);
}
//console.log("toArray = ",toArray({ a: 1, b: 2 }));

//console.log("toArray = ",toArray({ shrimp: 15, tots: 12 }));

function computeSum(arr1, arr2) {
  const arrayLengthMax = Math.max(arr1.length, arr2.length);
  const result = [];
  for (i = 0; i < arrayLengthMax; i++) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0);
    result.push(sum);
  }
  return result;
}
//console.log("computeSum = ", computeSum([1, 2, 3, 4], [5, 6, 7, 8, 80]));

function twoSum(nums, target_num) {
  let result = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (nums[j] + nums[i] === target_num)
        result = [nums.indexOf(nums[j]), nums.indexOf(nums[i])];
    }
  }

  return result;
}
const arr1 = [10, 20, 40, 50, 60, 70];
//console.log("twoSum ", twoSum(arr1, 100));

function sumArray(arr1, arr2) {
  const pushed = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      const sum = (arr1[j] || 0) + (arr2[j] || 0);
      pushed.push(sum);
    }
    break;
  }
  return pushed;
}
//console.log("pushed", sumArray([1, 2, 3, 5], [8, 7, 9, 10, 20]));

/*function twoSum1(nums,target_num){
  let result = 0
  result = nums.findIndex((value)=>{
    return [(nums[value] + nums[value]) === target_num]
  })
  return result
}
console.log("twoSum1 ",twoSum1(arr1, 50))*/

function flatten(arrayToFlat) {
  return arrayToFlat.reduce((b, c) => {
    return b.concat(c);
  });
}
/*console.log(
  "flat array =",
  flatten([
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
  ])
);*/

function toFlat(array) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
//console.log("deep flat =", toFlat([1, [2], [3, [[4]]], [5, 6]]));

function difference(arr1, arr2) {
  const result = [];
  for (i in arr1) {
    if (arr2.indexOf(arr1[i]) <= -1) result.push(arr1[i]);
  }
  for (j in arr2) {
    if (arr1.indexOf(arr2[j]) <= -1) result.push(arr2[j]);
  }
  return result.sort((a, b) => {
    return a - b;
  });
}

console.log("difference =", difference([1, 2, 3], [100, 2, 1, 10]));

function retrieve(arr1) {
  return arr1.filter((value) => {
    return value > 0 || value < 0;
  });
}
//console.log(retrieve([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//write a javascript code to sum two different array using map method

function sumArray(arr1, arr2) {
  return arr1.map((value, index) => {
    return value + arr2[index];
  });
}

//console.log("sumArray", sumArray([1, 2, 3, 4], [11, 15, 7, 4]));

//do the summing if the other length of the array is greater the other

function sumTwoArray(arr1, arr2) {
  const result = [];
  let sum = 0;
  for (i in arr1) {
    for (j in arr2) {
      sum = (arr1[j] || 0) + (arr2[j] || 0);
      result.push(sum);
    }
    break;
  }
  return result.sort((a, b) => {
    return a - b;
  });
}
//console.log("sumTwoArray =", sumTwoArray([1, 2, 3, 4], [11, 15, 7, 4, 20]));
function union(arr1, arr2) {
  //const result = []
  return arr1.reduce(() => {
    return arr1.concat(arr2);
  });
}
console.log("union =", union([1, 2, 3], [3, 4, 6]));

function union1(arr1, arr2) {
  const result = [];
  let unionSum = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) - 2) result.push(arr1[i]);
  }
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) - 1) result.push(arr2[i]);
  }
  /*for(n in result){
    if(result.hasOwnProperty(n))
    unionSum.push(result[n])
  }
  return unionSum*/
  if (Array.isArray(result)) unionSum = unionSum.concat(result);
  return unionSum.sort((a, b) => {
    return a - b;
  });
}
console.log(" union1 =", union1([1, 2, 3], [100, 2, 1, 10]));
console.log(" union1 =", union1([2, 3, 4, 5], [7, 3, 2, 8]));

function library1(titles) {
  return titles.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
  });
}
console.log(
  "title =",
  library1([
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      libraryID: 3245,
    },
  ])
);

// write a javascript code to remove a specific element from an array

function remove_array_element(remove) {
  const firstIndex = remove[0];
  const secondIndex = remove[1];
  return [firstIndex, secondIndex];
}
console.log("remove = ", remove_array_element([2, 5, 9, 6]));

function toRemove(arr1, num) {
  const result = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] === num) arr1.splice(1, 1);
    result.push(arr1[i]);
  }
  return result;
}
console.log("remove =", toRemove([2, 5, 9, 6], 5));

function find_specific(arr1, num) {
  for (i = 0; i < arr1.length; i++) if (arr1[i] === num) return true;

  return false;
}
console.log("find =", find_specific([2, 5, 9, 6], 5));

function removeNum(arr1, num) {
  const result = [];
  let index = 0;
  for (i = 0; i < arr1.length; i++) {
    index = arr1.indexOf(num);
    if (index > -1) arr1.splice(index, 1);
    result.push(arr1[i]);
  }
  return result;
}
console.log("remove =", removeNum([2, 5, 9, 6], 6));

// write a javascript to empty an array and return the original

function emptyArray(array) {
  array = 0;
  if (array === 0) return [];
}
console.log("array is =", emptyArray([1, 3, 4, 5]));

function to_get_random(elements) {
  return elements[Math.floor(Math.random() * elements.length)];
}
console.log("random number is =", to_get_random([6, 7, 8, 20, 90]));

//write a javascript function to move an array from one position to another
// [10, 20, 30, 50, 40],[20, 30, 10, 40, 50],
/*function move(array, num1, num2) {
  while (num1 < 0) {
    num1 += array.length;
  }
  while (num2 < 0) {
    num2 += array.length;
  }
  array.splice(num2, 0, array.splice(num1, 1)[0]);
  return array;
}

console.log("moved array =", move([10, 20, 30, 40, 50], -1, -2));
console.log("moved array =", move([10, 20, 30, 40, 50], 0, 2));*/

//write a javasript code to filter null,undefined and empty string from an array

function filter_array_values(array_value) {
  return array_value.filter(
    (value) => value === 58 || value === "abcd" || value === true
  );
}

console.log(
  "array_value =",
  filter_array_values([58, "", "abcd", true, null, false, 0])
);

function unique_element(arr1, arr2) {
  const result = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) - 2) result.push(arr1[i]);
  }
  for (j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) - 1) result.push(arr2[j]);
  }
  return result;
}
console.log("unique element", unique_element([1, 2, 3], [100, 2, 1, 10]));

/* write a javascript function to add two arrays element when once length is longer than 
the other*/

function to_add(arr1, arr2) {
  const result = [];
  const max_length = Math.max(arr1.length, arr2.length);
  for (i = 0; i < max_length; i++) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0);
    result.push(sum);
  }
  return result.sort((a, b) => a - b);
}
//const array1 = [8, 0, 18, 20, 41];
//const array2 = [6, 8, 2, 4];
console.log("sum =", to_add([8, 0, 18, 20, 41], [6, 8, 2, 4]));

//write a javascript code to get absolute sum of an two array
function get_abs_sum(arr1, arr2) {
  const result = [];
  let sum = 0;
  const Array_length = Math.max(arr1.length, arr2.length);
  for (i = 0; i < Array_length; i++) {
    const abs1 = Math.abs(arr1[i]);
    const abs2 = Math.abs(arr2[i]);
    sum = abs1 + abs2;
    result.push(sum);
  }
  return result;
}
console.log("absolute Calc", get_abs_sum([1, -2, 7, -10], [-8, 11, 20, -3]));

//write a javascript code to return the max and min of an array
function array_max_min(arr1, arr2) {
  const result = arr1
    .map(() => {
      const max = Math.max(...arr1);
      const min = Math.min(...arr2);
      return { max, min };
    })
    .splice(0, 1);
  const maxResult = result[0].max;
  const minResult = result[0].min;
  return [maxResult, minResult];
}
console.log("minMax =", array_max_min([100, 80, -110], [70, 10, 50]));

/*function array_filled(num, value) {
  const pre_filled = Array.apply(null, Array(num)).map(
    Number.prototype.valueOf,
    value
  );
  return pre_filled;
}

console.log("pre_filled =", array_filled(6, 0));

console.log("pre_filled =", array_filled(4, 11));

function array_filled1(str, value) {
  const pre_fill_string = Array.apply(undefined, Array(str)).map(
    String.prototype.valueOf,
    value
  );
  return pre_fill_string;
}
console.log("prefilled string =", array_filled1(3, "default value"));
console.log("preFilled string =", array_filled1(4, "password"));*/

function sumAllNUm(numArray) {
  return numArray
    .filter((number) => {
      const typeOf = typeof number;
      return typeOf;
    })
    .reduce((sum, value) => {
      return sum + value;
    }, 0);
}
console.log("number element =", sumAllNUm([2, 3, 0, 5, 7, 8, true, false]));

function thirdSmallestNum(thirdNum) {
  return thirdNum.sort((a, b) => a - b)[thirdNum.length - 3];
}
console.log("third num =", thirdSmallestNum([2, 3, 5, 7, 1]));

// Given an array of objects representing products, write a function that
// filters out products with a price greater than $50
// and returns an array of product names in uppercase.
// For example, if the input is:
// [
//   { name: "Laptop", price: 800 },
//   { name: "Smartphone", price: 600 },
//   { name: "Headphones", price: 30 },
//   { name: "Tablet", price: 120 },
// ]
// The function should return ["LAPTOP", "SMARTPHONE", "TABLET"].
function filterExpensiveProducts(products) {
  return products
    .filter((value) => {
      return value.price > 50;
    })
    .map((key) => {
      return key.name.toUpperCase();
    });
}
console.log(
  filterExpensiveProducts([
    { name: "Laptop", price: 800 },
    { name: "Smartphone", price: 600 },
    { name: "Headphones", price: 30 },
    { name: "Tablet", price: 120 },
  ])
);

/* Given an array of numbers, write a function that performs the following operations:
// 1. Remove all even numbers from the array.
// 2. Double the value of all remaining numbers.
// 3. Square the final values.
// 4. Return the sum of all squared values.
// For example, if the input array is [2, 3, 5, 7, 8], the function should return 243, which is calculated as follows:
// - Remove even numbers: [3, 5, 7]
// - Double the values: [6, 10, 14]
// - Square the values: [36, 100, 196]
// - Sum of s*/

function to_remove_even(array) {
  return array
    .filter((value) => value % 2 !== 0)
    .map((value) => value + value)
    .map((value) => Math.pow(value, 2))
    .reduce((sum, value) => sum + value, 0);
}
console.log("odd = ", to_remove_even([2, 3, 5, 7, 8]));

function toFill(value, fill) {
  return Array.apply(null, Array(fill))
    .map(Number.prototype.valueOf, value)
    .splice(0, 3);
}

console.log(toFill(2, 7));

function toDivide(number) {
  const result = [Math.floor(number / 2), Math.ceil(number / 2)];
  return result;
}
console.log("number = ", toDivide(10));

function BMI(massMark, heightMark, massJohn, heightJohn) {
  const BMIMark = massMark / (heightMark * heightMark);
  const BMIJohn = massJohn / (heightJohn * heightJohn);
  //condition if BMIMark is greater than BMIJohn
  if (BMIMark > BMIJohn) {
    return `Mark's BMI ${Math.round(
      BMIMark
    )} is greater than john's BMI ${Math.round(BMIJohn)}`;
  } else {
    return `Mark's BMI ${Math.round(
      BMIMark
    )} is smaller than john's BMI ${Math.round(BMIJohn)}`;
  }
}

function tip_and_bill(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  const total_value = `the bill was ${bill}💲, and the tip was ${tip}💡, and the total value was
    ${bill + tip}💲`;
  return total_value;
}

function third_num(array) {
  return array.sort((a, b) => a - b)[array.length - 3];
}
console.log(" third_num 💋", third_num([1, 2, 3, 4, 5, 6]));

function maths_abs(arr1, arr2) {
  let result = [];
  for (var firstIndex = 0; firstIndex < arr1.length; firstIndex++) {
    for (var secondIndex = 0; secondIndex < arr2.length; secondIndex++) {
      const result1 = Math.abs(arr1[secondIndex]);
      const result2 = Math.abs(arr2[secondIndex]);
      result.push(result1 + result2);
    }
    break;
  }
  return result;
}
console.log(
  "Âbsolute summing😎 = ",
  maths_abs([1, 2, 3, 4, 10], [17, -10, 4, -15, 2])
);

function compute_winner(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
const scoreDolphins = compute_winner(71, 45, 58);
const scoreKoalas = compute_winner(27, 12, 41);
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas * 2) {
    return `Dolphins Wins.. 🏆💪 ${avgDolphins} Vs. ${Math.round(avgKoalas)}`;
  } else if (avgDolphins <= avgKoalas * 2) {
    return `Koalas Win.. 🏆💪 ${avgKoalas} Vs. ${avgDolphins}`;
  } else {
    return "No one WINs... 💔💔💔";
  }
};
console.log("outcome =", checkWinner(scoreDolphins, scoreKoalas));

function alertArray(array) {
  const array2 = [2, 4, 6, 8];
  return array.concat(array2).length;
}
console.log(alertArray([1, 3, 5, 7, 9]));

function to_construct(numberToArray) {
  const trans = new Array(numberToArray);
  return trans;
}
console.log(to_construct(34, 3, 4, 5));

/*Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip 
is 20%.Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding 
tip, calculated based on the rules above (you can check out the code from the first tip 
calculator challenge if you need to). Use the function type you like the most. Test the function 
using a bill value of 100.
And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the 
function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.*/
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tip = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];

function toCalcTip(tip) {
  const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
  return totals;
}
console.log(toCalcTip(tip));
const jonas = {
  firstName: "jonas",
  lastName: "schnnetman",
  birthYear: 1991,
  job: "teacher",
  hasDriversLicense: false,
  jonasFriends: ["michael", "john", "bob"],
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};
console.log(
  `${jonas.firstName} is a ${jonas.calcAge()} year old man, and ${
    jonas.hasDriversLicense
      ? "has a driver's license " + "✔"
      : "didn't have a drivers license" + "🚫"
  }`
);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.62,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};
mark.calcBMI();
john.calcBMI();
function bmiResult() {
  if (mark.bmi > john.bmi) {
    return `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})!`;
  } else {
    return `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI(
      ${mark.bmi}
    )!`;
  }
}
console.log(bmiResult());

for (let iterate = 1; iterate < 5; iterate++) {
  console.log(`food🍕 ${iterate} is served in plate 🍽 ${iterate}`);
}

function loop_in_name(array) {
  for (let index = 1; index <= array.length; index++) {
    for (let count = 1; count < array.length + 1; count++) {
      console.log(`food ${index} is giving to ${array[index]} `);
    }
  }
}
loop_in_name(["michael", "dan"]);

function getType(array) {
  const result = [];
  let condition = 0;
  for (i = 0; i < array.length; i++) {
    condition = typeof array[i];
    if (condition === "number") result.push(array[i]);
  }
  return result;
}
console.log(getType([1, 1, 3, "bed", "lion"]));

/*const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};*/

/* Write your code below. Good luck! 🙂 */
function calctip2(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const billse = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < billse.length; i++) {
  tips.push(calctip2(billse[i]));
  totals.push(tips[i] + billse[i]);
}
/*for (let value = 0; value < billse.length; value++) {
  const tip =  tips.push(calcTip1(billse[value]));
  //tips.push(calcTip1(billse[value]));
  //totals.push(tips[value] + billse[value]);
  totals.push(tip + billse[value])
}*/
console.log(tips);
console.log(totals);

function uniqueNum(array, array2) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    if (array2.indexOf(array[index]) - 3) result.push(array[index]);
  }
  for (let index2 = 0; index2 < array2.length; index2++) {
    if (array.indexOf(array2[index2]) - 4) result.push(array2[index2]);
  }
  return result.sort(function (a, b) {
    return a - b;
  });
}
console.log(uniqueNum([1, 2, 3, 5, 4], [100, 8, 4, 3]));

// Write a javscript code to return the [max,min] in an array containing numbers
function max_and_min(arr1, arr2) {
  const min_max_result = [arr1, arr2].map(() => {
    const min = Math.min(...arr2);
    const max = Math.max(...arr1);
    return { min, max };
  });
  const minValue = min_max_result[0].min;
  const maxValue = min_max_result[0].max;
  return [minValue, maxValue];
}
console.log(max_and_min([12, 45, 67, 8], [2, 0, 3, 5]));

function amount_phone(array) {
  return array
    .filter(function (prices) {
      return prices.price >= 200 && prices.price <= 450;
    })
    .map(function (value) {
      return value.price + value.price;
    })
    .map((obj) => {
      return Math.pow(obj, 2);
    })
    .reduce((sum, value) => {
      return sum + value;
    });
}
console.log(
  amount_phone([
    { Phone: "infinix", price: 215 },
    { Phone: "samsung", price: 312 },
    { Phone: "Iphone", price: 800 },
    { Phone: "Red MI", price: 400 },
    { Phone: "Iphone", price: 555 },
  ])
);

function array_length(array) {
  const length = [];
  let access = 0;
  for (i = 0; i < array.length; i++) {
    access = array[i];
    length.push(access.length);
  }
  return length;
}
console.log(
  array_length([
    [1, 2, 3],
    [2, 3, 4],
    [7, 1],
  ])
);

function arr_length(array) {
  return array.length;
}
console.log(
  arr_length([
    [1, 2, 3],
    [2, 3, 4],
    [7, 1],
  ])
);

function fruit2(object) {
  const index = object[0].charAt(0).toUpperCase();
  const element = object[0].slice(1);
  return index.concat(element);
}
console.log(fruit2(["communication"]));

function fruit3(fruit) {
  return fruit.map((a) => {
    return a[0].toUpperCase().concat(a.slice(1));
  });
}
console.log(fruit3(["apple", "pineapple", "mango", "cherry"]));

function capitalize(arrayString) {
  return arrayString
    .filter((value) => {
      const indexOf = typeof value;
      return indexOf === "string";
    })
    .map((caps) => caps[0].toUpperCase().concat(caps.slice(1)))
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
    });
}
console.log(capitalize([1, 2, true, false, "jenny", "tommy", "sergi"]));

function check_test(array) {
  const stringType = array
    .filter((type) => {
      const the_index = typeof type;
      return the_index === "string";
    })
    .map((value) => value[0].toUpperCase().concat(value.slice(1)));
  const numberType = array
    .filter((type2) => {
      const the_index2 = typeof type2;
      return the_index2 === "number";
    })
    .map((value2) => {
      if (value2 % 2 === 0) return value2 + 1;
      else return value2;
    });
  const boolType = array
    .filter((type3) => {
      const the_index3 = typeof type3;
      return the_index3 === "boolean";
    })
    .map((value3) => {
      if (value3 === true) return false;
      if (value3 === false) return true;
    });
  return [stringType, numberType, boolType];
}
console.log(check_test(["daniel", 20, 11, false, true, "chisom"]));

function amplitude(temp1, temp2) {
  const temp3 = temp1.concat(temp2);
  let max = temp3[0];
  let min = temp3[0];
  for (i = 0; i < temp3.length; i++) {
    if (temp3[i] > max) max = temp3[i];
    if (temp3[i] < min) min = temp3[i];
  }
  return [min, max];
}
console.log(amplitude([1, 0, 3, 6, 8], [10, 14, 70, 170]));

function printForecast(arr) {
  let pusher = "";
  for (i = 0; i < arr.length; i++) {
    pusher += `${arr[i]}°C in ${i + 1} days ...`;
  }
  return pusher;
}
console.log(printForecast([17, 21, 23]));

// write a javascript code that increase a number by it's value
const numIncrease = function (number, value) {
  return Array.apply(null, Array(number)).map(Number.prototype.valueOf, value);
};
console.log(numIncrease(3, 12));

const friends_str = function (array) {
  let forFriend = "";
  const nth = ["st", "nd", "rd"];
  for (i = 0; i < array.length; i++) {
    forFriend += `my ${i + 1}${nth[i]} friend is ${array[i]}... `;
  }
  return forFriend;
};
console.log(friends_str(["gift", "osmond", "favor"]));

function myFriend(array) {
  return array
    .filter((value) => {
      return value === "gift" || value === "osmond";
    })
    .map((value2) => {
      return `${value2} is my best friend`;
    });
}
console.log(myFriend(["gift", "osmond", "favor"]));

function toJoin(stringifiedArray) {
  let stringify = "";
  return (stringify = stringify + stringifiedArray.join(","));
}
console.log(toJoin(["green", "blue", "red", "orange"]));

function capitalizeAndJoin(stringifiedArray) {
  return stringifiedArray
    .map((value) => {
      return value[0].toUpperCase().concat(value.slice(1));
    })
    .join(",");
}
console.log(capitalizeAndJoin(["gift", "osmond", "favor", "green", "blue"]));

const alphabet = "forden";
for (i in alphabet) {
  if ("f" === alphabet[i]) console.log(`${alphabet[i]}-${alphabet.slice(1)}`);
  else {
    console.log(false);
  }
  break;
}
