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

for (var value of countryAndStateMap.values()) {
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

// create a javascript array containing numbers [45,7,6,8,0,2] and get 0 from there

const numArr = [45, 7, 6, 8, 0, 2];
const extract = numArr.find((pick) => {
  return pick === 45;
});

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

const getSome = youngOnes.some((result, hub, tit) => {
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
  return num.bookNumber <= 100;
});

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

const myObject = {
  firstName: "daniel",
  surname: "duru",
  lastName: "chiemela",
};

const lastObject = Object.create(myObject);

const regularExpression = new RegExp("my name is daniel");

const regularExpression1 = /my name is daniel/;

const greetingExpression = /hello. good morning /;
const nameExpression = /chemmzy/;
console.log(greetingExpression + nameExpression);

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

let programmerName = ["alex","ferdinard","david","michael"]
programmerName.map((name) => {
  console.log(`hello programmer ${name}!`)
});
