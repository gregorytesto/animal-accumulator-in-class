let animals = ["Wombat", "Lion", "Jaguar", "Dragon", "Anteater", "Capybara"];
// // Combine all strings with comma and space
// function combineStr(animalArr){
//     let animalsStr = "";
//     for(let i=0; i<animalArr.length;i++){
//         animalsStr += animalArr[i];
//         if(i !== animalArr.length-1){
//             animalsStr += ", ";
//         }
//     }
//     return animalsStr;
// }
// console.log(combineStr(animals));

// // Is an certain animal in the array?
// function isAnimalInArr(animalArr, animalToFind){
//     let hasFoundAnimal = false;
//     for(let i=0;i<animalArr.length;i++){
//         let animalInArr = animalArr[i];
//         if(animalInArr === animalToFind){
//             hasFoundAnimal = true;
//         }
//     }
//     return hasFoundAnimal;
// }
// console.log(isAnimalInArr(animals, "Cat"));

const animalsObjArr = [
    { name: "Wombat", age: 1, species: "Vombatus ursinus"},
    { name: "Lion", age: 8, species: "Panthera leo"},
    { name: "Jaguar", age: 6, species: "Panthera onca"},
    { name: "Dragon", age: 100, species: "Hungarian horntail"},
    { name: "Anteater", age: 1, species: "Tridactyla"},
    { name: "Capybara", age: 3, species: "Hydrochoerinae"},
];


// Combine all names of anmials into a string with comma and space between
/*
function combnStr(anmObjArr) {
let animalsStr = '';
for(let i = 0; i < anmObjArr.length; i++) {
   let anmObj = anmObjArr[i].name; 
   animalsStr += anmObj;
    if(i !== anmObjArr.length-1) {
        animalsStr += ', ';
    } 
  }
return animalsStr;
}
console.log(combnStr(animalsObjArr));
*/

/*
This the solution to the first two questions
// Combine all names of animal into a string with comma and space between
// function combineAnimalNames(animalArr){
//     // Step 1
//     let animalStr = ""; // Create Accumulator
//     // Step 2
//     for(let i=0;i<animalArr.length;i++){
//         let animalName = animalArr[i].name; // "Wombat"
//         // Step 3
//         animalStr+= animalName;
//         if(i !== animalArr.length-1){
//             animalStr += ", ";
//         }
//     }
//     return animalStr;
// }
// console.log(combineAnimalNames(animalsObjArr));
// Is a certain animal in the array?
    // Return true/false
function isAnimalInArr(animalArr, animalName){
    // Step 1
    let isAnimalFound = false;
    // Step 2
    for(let i=0;i<animalArr.length;i++){
        let animalInArr = animalArr[i].name;
        // Step 3
        if(animalInArr === animalName){
            isAnimalFound = true;
        }
    }
    return isAnimalFound;
}
console.log(isAnimalInArr(animalsObjArr, "Wombat"));
*/

// Is a certain animal in the array?
    // Return true/false
/*
    function anmPresent(animalArr, animalName) {
        let isAnmFound = false;
        for (let i = 0; i < animalArr.length; i++) {
           let animalInArr = animalArr[i].name;
           //console.log(animalInArr, animalName);
             if (animalInArr === animalName) {
                 isAnmFound = true;
             }

        }
          return isAnmFound;
    }

    console.log(anmPresent(animalArr, "Lion"));    
*/

    // Is a certain animal in the array?
     // Return the animal
/*
     function anmPresent(animalArr, nameOfAnmInArr) {
         let foundAnmObj = {};
        for (let i = 0; i < animalArr.length; i++) {
          let nameOfAnmInArr = foundAnmObj.name;
          if(nameOfAnmInArr === nameOfAnmInArr) {
            foundAnmObj === animalArr[i];
          }
        }
        return foundAnmObj;
     }

     console.log(anmPresent(foundAnmObj, "Lion");
*/

// Filter array by number of letters in animal name
// Example: Names longer than 5

/*
function name5Char(anmArr, minNumOfChars) {
    let anmWithLongName = [];
    for (let i = 0; i < anmArr.length; i++) {
        let anmName = anmArr[i].name;
        if(anmName.length > minNumOfChars) {
            anmWithLongName.push(anmName);
        }
    }
     return anmWithLongName;
}
console.log(name5Char(animalsObjArr, 5));
*/

// Filter animals older than given age
// Example: Animals older than 4
/*
function anmByAge(amnArr, minAge) {
   let anmOlderThanMinAge = [];
for (let i = 0; i < anmArr.length; i++) {
    let anmAge = anmArr[i].age;
    if (anmArr > minAge) {
        anmOlderThanMinAge.push(anmAge[i]);
    }
}
   return anmOlderThanMinAge;
}

console.log(anmByAge(animalsObjArr, 4));
*/

// Find the average age of the animals
/*
function avgAgeOfAnm(anmArr) {
  let total = 0;
  for (let i = 0; i < anmArr.length; i++) {
      let age = anmArr[i].age;
      total += age;
  }
     return total/anmArr.length;
}
console.log(avgAgeOfAnm(animalsObjArr));

*/


// Find oldest animal
    // Return the age
    // Return the animal
/*
    function oldestAge(anmArr) {
     let oldAge = 0;
     for (let i = 0; i < anmArr.length; i++) {
         let age = anmArr[i].age;
         if(age > oldAge) {
             oldAge = age;
         }
     }
return oldAge;
    }

console.log(oldestAge(animalsObjArr));
 */   

// Find youngest animal
    // Return the age
    // Return the animal 
/*
    function youngestAge(anmArr) {
     let animal = anmArr[0];
     for(let i = 0; i = anmArr.length; i++) {
        let age = anmArr[i].age; 
        if(age > animal.age) {
            animal = anmArr[i];
        }
     }
       return animal;
    }
console.log(youngestAge(animalsObjArr));
*/


// Find youngest animal
// Return the animal 
/*
    function youngestAge(anmArr) {
     let youngAge = anmArr[0].age;
     for(let i = 0; i = anmArr.length; i++) {
        let age = anmArr[i].age; 
        if(age < youngAge) {
            youngAge = age;
        }
     }
       return youngAge;
    }
console.log(youngestAge(animalsObjArr));
*/

// Return the animal 
/*
function findYngAnm(anmArr) {
let youngAnm = anmArr[0];
for (let i = 0; i < anmArr.length; i++) {
     let age = anmArr[i].age;
     if(age < youngAnm.age) {
        youngAnm = anmArr[i];
     }
   }
    return youngAnm;
}

console.log(findYngAnm(animalsObjArr));
*/

function findYngAnm(anmArr) {
    let youngAnm = anmArr[0];
    for (let i = 0; i < anmArr.length; i++) {
         let age = anmArr[i].age;
         if(age < youngAnm.age) {
            youngAnm = anmArr[i];
         }
       }
        return youngAnm;
    }
    
    console.log(findYngAnm(animalsObjArr));
    console.log('Hello World');
