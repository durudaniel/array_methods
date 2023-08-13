const copy_detail = {music_name: "dax",net_worth:"$1000000"}
const copy_origin = {country: "nigerai"}
const concat_detail_origin = {...copy_detail,...copy_origin}
console.log(concat_detail_origin)
//spread two arrays and square root each element 
const firstArray = [25,4,9];
const secondArray = [36,49,144];
const spreadArrays =[...firstArray,...secondArray]
console.log(spreadArrays.map(Math.sqrt))

const programmingLangauges = ["python","c++","javascript","java"]
console.log(programmingLangauges.sort());

let gameType = new Map()
gameType.set("game year",2019)
gameType.set("name","fifa mobile")
gameType.set("played",true)
console.log(gameType)

const foodToEat = new Map()
foodToEat.set("rice","yes u can")
console.log(foodToEat)

function food(rice){
    return rice
}
const riceMap = new Map()
riceMap.set("rice","yes u can eat it")
console.log(food(riceMap))

/* ##TASKONMAP##
1. write a javascript map to add the following values 
"ryu","japan"
"ken","USA"
"Guile","USA"
"blanka","brazil"

2.iterates over the value and console the result*/

function country(state) {
    return state
}
const countryAndStateMap = new Map()
countryAndStateMap.set("Ryu","japan");
countryAndStateMap.set("Ken","U.S.A");
countryAndStateMap.set("Gulie","U.S.A");
countryAndStateMap.set("Blanka","Brazil");
console.log(country(countryAndStateMap))

for(var value of countryAndStateMap.values()){
    console.log(value)
}
for(var [keys,values] of countryAndStateMap.entries()){
    console.log(`${keys} is a state in ${values}`)
}
// write a javascript to add the length of array on each element 
const arrMap = [2,3,7,8,9];
const mapOut = arrMap.map((length) => length + arrMap.length)
console.log(mapOut)

function lengthOfAnArray(arrLength,number){
    if(arrLength.length >= number)
    return `the length of ${arrLength} is greater than or equals to ${number}.`
    else if (arrLength.length <= number)
    return `the length of ${arrLength} is less than ${number}.`
    else{
        return `the length of ${arrLength} is not even equalled to or less than ${number}.`
    }
}
console.log(lengthOfAnArray([23,45,56,78,76,8,9],56))

/* write a javascript array object : name,age,and occupation and filter age above 45 years with
programming occupation and sort by name */

const usersObject  = [
    {Name: "duru paul", age: 27, occupation: "tech developing"},
    {Name: "daniel duru", age: 47, occupation: "programming"},
    {Name: "plantain rice", age: 29, occupation: "programming"},
    {Name: "koji kenji", age: 76, occupation: "martial arts"},
    {Name: "mama mia", age: 49, occupation: "doctor"}, 
    {Name: "chisom kenndy", age: 87, occupation: "programming"},
]

const filterusers = usersObject.filter((userName) => {
    return userName.age >= 45 && userName.occupation === "programming"
})
console.log(filterusers)
const sortByName = (x,r) => {
    if(x.Name < r.Name)
    return -1
    if(x.Name > r.Name) return 1
    return 
}
console.log(filterusers.sort(sortByName))
const object = {file: "documents",class: "jss1"}

// wirte a javascript to multiply all element by the the length
const lengthNumber = [3,6,7,9,20]
const multiply = lengthNumber.map((index) =>{
    return index * lengthNumber.length
})
console.log(multiply)

// write a javascript to multiply all element by index of the array
const indexNumber = [23,34,56,7,8]
function multiplyByIndex(number,index){
    
    return number * index
}
const indexResult = indexNumber.map(multiplyByIndex)
console.log(indexResult)

// write a javascript to filter only numbers in an array


const stringNumber = ["daniel",34,67,"edu",78]

const filterAllNumber = stringNumber.filter(Number)
console.log(filterAllNumber)

const productionName = [
    {Name: "iphone",price: 17000,importPrice: 500},
    {Name: "samsung",price: 15500,importPrice: 500},
    {Name: "redMi",price: 2900,importPrice: 700}
]
const addPriceAndImportPrice = productionName.map((expenses)=>{
    return  expenses.importPrice + expenses.price
})
console.log(addPriceAndImportPrice)

function numberOfStudent(pass,fail){
    if(pass == 5 && fail >= 10)
    return " teaching perfomance is too poor"
    else if(pass >= 10 && fail <= 8)
    return " teaching is performances is very excellent"
    else{
        return "no performances"
    }
}
console.log(numberOfStudent(5,10))
console.log(numberOfStudent(15,7))

//write a javascript tp multiply the price of cars by it's number

const carDetails = [
    {carName: "G_Wagon",price: 1000000,carsNumber: 35},
    {carName: "BMW",price: 1500000,carsNumber: 35},
    {carName: "Rose_Royce",price: 1000000,carsNumber: 30},
]
const carsValue = carDetails.map((multiply) => {
   return ({
    name:multiply.carName,
    price: "$"+ multiply.price,
    carsNumber: multiply.carsNumber,
    totalNumberOfCarsValue: multiply.price * multiply.carsNumber
   })
})
console.log(carsValue)

/* write a javascript object containing personal details and add persons name and surname in 
the object*/

const personal_file = [
    {firstName: "michael",surname: "diesel"},
    {firstName: "hedricc",surname: "peter"},
    {firstName: "ebere",surname: "morgan"},
    {firstName: "prettie",surname: "michelle"}
]
const add_file = personal_file.map((add)=>{
    return({
        firstName: add.firstName,
        surname: add.surname,
        fullName: add.surname + " " + add.firstName
   })
})
console.log(add_file)

/*creat a javascript of dead list and filter dead record from 2015 and above*/

const dead_list = [
    {murgeName:"franku cuccahria",DeadCause:"road accident",DeathYear: 2014,DeathMonth:"16th AUG"},
    {murgeName: "joel delbene",DeadCause:"kidney disease",DeathYear: 2015,DeathMonth:"4th sept"},
    {murgeName: "dustin stinett",DeadCause:"brain cancer",DeathYear: 2017,DeathMonth:"13th jan"},
    {murgeName: "argelio loen",DeadCause:"broken chest",DeathYear: 2015,DeathMonth:"1th march"},
    {murgeName: "peter haydrich",DeadCause:"air crash",DeathYear: 2000,DeathMonth:"30th jun"},
    {murgeName: "kimmich beckam",DeadCause:"ship sink",DeathYear: 2020,DeathMonth:"23th oct"}
]
const deadPrint = dead_list.filter((deadRecord) =>{
    return deadRecord.DeathYear >= 2015
})

const DeathMap = deadPrint.map((mapping) => {
    return ({
        murgeName: mapping.murgeName,
        DeadCause: mapping.DeadCause,
        DeathYear: mapping.DeathYear,
        DeathMonth: mapping.DeathMonth,
        deathRecord: mapping.DeathMonth + " " + mapping.DeathYear
        
    })
})
console.log(DeathMap)
