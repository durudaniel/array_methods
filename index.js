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
  console.log(value)
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
console.log(totalise);
const everyNumber = library.every((num) => {
  return num.bookNumber >= 4;
});
console.log(everyNumber);

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
    console.log(`${this.make} ${this.model} (${this.year})`);
  }
}
const myCar = new Car("mercedes", "4Matic", 2014);
myCar.outPut();
console.log(myCar);

class SportsCar extends Car {
  print() {
    console.log(`${this.make} goes faster and vroom`);
  }
}
const mySportsCar = new SportsCar("mercedes", "AVRT G90", 2021);
mySportsCar.print();
console.log(mySportsCar);
/*on "let" Class Declarattion
let car = class{

}*/

function Cars(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCarName = new Cars("BMW", "Fi789l", 2020);
console.log(myCarName);

let programmerName = ["alex", "ferdinard", "david", "michael"];
const print = programmerName.forEach((name) => {
  return "hello programmer" + name + "!" 
});
console.log(print)

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

const arrayOfNumbers = [2,3,4,5,6]
const resultArrays = arrayOfNumbers.reduce((each,num) => {
  console.log(each)
  return each + num
},null);


const combine = names.concat(others);
const findCombine = combine.findIndex((find) => {
  return find === "wolfghang";
});
/*console.log(combine.join("~"));
console.log(findCombine);
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
let arrayNumber = {};
let outPut = [];
function removeDuplicates(num) {

  //loop through parameter num
  for (x = 0; x < num.length; x++) {
    // add num index to an existing variable and assign a value to it
     arrayNumber[num[x]] = 0;
  }
  
  // now loop through arrayNumber and push/unshift it to our "outPut" variable
  for (i in arrayNumber) {
    outPut.push(i)
  }
  return outPut
}
const duplicateNumbers = [1, 2, 2, 2, 1, 1, 4, 3, 6, 7, 5, 5, 5];

const arrayString = []
let arrayToPushIn = []
function deleteDuplicate(stringValue){
  for(x = 0; x < stringValue.length; x++){
    arrayString[stringValue[x]] = 0
  }
  for(i in arrayString){
    arrayToPushIn.push(i)
  }
  return arrayToPushIn
}
const duplicateString = ["daniel","daniel","Daniel","Remmy","silas","silas","remmy"];


/*Write a JavaScript program to display the colors in the following way.

Here is the sample array:
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Output
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -*/
let colorNumber = 1
function displayColor() {
  const abbreviatedWords = ["th","nd","rd","st"]
  const color = ["green","blue","red","orange"]
  for(i = 0;i < color.length;i++){
    for(x = 0; x < abbreviatedWords.length;x++){
      const resultOfColors = `${colorNumber}${abbreviatedWords[x]} choice is ${color[x]}`
      colorNumber++
      console.log(resultOfColors)
    }
  
  }
  
  
}

displayColor()

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
function sumNumericVectors(numerics){
  const sumSquares = numerics.reduce((add,square) =>{
     return add + square
    
  },0);
  return sumSquares ** 2
};
console.log(sumNumericVectors([3,4,5,6,7]))

// Write a JavaScript program to find the leap years in a given range of years.

function leapYear(years){
  const arrayToPush = years.filter((year)=>{
    return year % 4 === 0 || year % 400 === 0
  })
  return arrayToPush
}
const seriesOfYear = [2000,2010,2012,2015,2018]

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

function test(arr_nums) 
 {
  
  return arr_nums.sort((x,y) =>{
   return y - x
  }) [arr_nums.length - 3]
}

let nums = [2, 3, 5, 7, 1]

nums = [2, 3, 0, 5, 7, 8, -2, -4]


function filterArray(filterate){
  return filterate.filter((data)=>{
    const dataTypes = typeof data 
    //console.log(dataTypes)
    return dataTypes === "number"
  })
  
}
console.log(filterArray([1, 2, "a", "b"]))

function battingAvg(arr) {
	let hits = 0
  let batAverage = 0 
  arr.forEach((value) =>{
    hits += value[0]
    batAverage += value[1]
  })
  return (hits / batAverage).toFixed(5).slice(1)
}
console.log(battingAvg([[2, 3, 4]]) )

function numberSplit(split){
  return [Math.floor(split / 2),Math.ceil(split / 2)]
}

console.log(numberSplit(4)) 

console.log(numberSplit(10)) 

console.log(numberSplit(11))

console.log(numberSplit(-9) )

function sortBylength(arrayString){
  return arrayString.sort((value1,value2)=>{
    if(value1.length < value2.length)
    return -1
    if(value1.length > value2.length)
    return 1
    return 0
  })
}
console.log(sortBylength(["a","gregor","win","tray"]))

function sumOfCube(cubes){
  return cubes.reduce((value,index)=>{
    return value + Math.pow(index,3)
  },0)
  
}
console.log(sumOfCube([2,3,4,7,8]))


function getOnlyEvens(evenNumbers){
  return evenNumbers.filter((even,indices)=>{
    return even % 2 === 0 && indices % 2 === 0
  })
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]))

console.log(getOnlyEvens([0, 1, 2, 3, 4]))

console.log(getOnlyEvens([1, 2, 3, 4, 5]))



function getFirstValue(array){
  return array[0]
}
console.log(getFirstValue([32,45,46]))

console.log(getFirstValue([1, 2, 3]))

console.log(getFirstValue([80, 5, 100]))

console.log(getFirstValue([-500, 0, 50]))

function sortNumsAscending (nums){
  if(nums === null){
    return []
  }
  return nums.sort((int,num)=>{
    if(int < num)
    return int - num
    
  }) 
  
  
  
}
console.log(sortNumsAscending([1,3,4,6,10,2,5,7,8,9]))

console.log(sortNumsAscending([1, 2, 10, 50, 5])) 

console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])) 

console.log(sortNumsAscending(null)) 

console.log(sortNumsAscending([])) 
function isAvgWhole(arrayValue){
  const arrayResult = arrayValue.reduce((value,index)=>{
   return value + index

  },0)
  if(arrayResult % arrayValue.length === 0){
    return true
  } else{
    return false
  }
}
console.log(isAvgWhole([1, 3]))

console.log(isAvgWhole([1, 2, 3, 4]))

console.log(isAvgWhole([1, 5, 6]))

console.log(isAvgWhole([1, 1, 1]))

console.log(isAvgWhole([9, 2, 2, 5]))

// write a javascript to get the even value and indices in an array 
function getEvenValue(evenValue){
  if(evenValue === null)
  return []
  return evenValue.filter((value,index)=>{
    return value % 2 === 0 && index % 2 === 0
  })
}

console.log(getEvenValue([0,3,7,8,10,9,16]))
console.log(getEvenValue(null))


function splitValue(toSplit){
  return [Math.floor(toSplit / 2), Math.ceil(toSplit / 2)]
}

console.log(splitValue(16))

function getAbsSum(numbers){
  let sum = 0
  for(i in numbers){
    if(numbers[i] < 0){
      sum += numbers[i] * -1
      continue;
    }
    sum += numbers[i]
  }
  return sum
}
 //OR
function getAbsSum1(numbers){
  return numbers.reduce((num,absoluteValue)=>{
    return num + Math.abs(absoluteValue)
  },0)
}
console.log(getAbsSum1([2, -1, 4, 8, 10])) 

console.log(getAbsSum1([-2,-4,-4,-10,-2])) 

console.log(getAbsSum([2, 4, 6, 8, 10]))

console.log(getAbsSum([-1]))

function calculateDifference(items,limit){
  let sum = 0
  for(let keys in items){
    sum += items[keys]
  }
  return sum - limit
}
console.log(calculateDifference({ "baseball bat": 20 }, 5)) 

console.log(calculateDifference({ skate: 10, painting: 20 }, 19)) 

console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) )

//OR
function calculateDifference1(item,limit){
  return Object.values(item).reduce((itemValue,limitedValue)=>{
    return itemValue + limitedValue
  },0) - limit
}
console.log(calculateDifference1({pawpaw: 10,apple: 5},5))

console.log(calculateDifference1({pineapple: 200, mango: 200, avocado: 1},400))