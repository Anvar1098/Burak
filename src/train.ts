// function getPositive(arr: number[]): string {
    
//     if (!Array.isArray(arr)) {
//         throw new Error("Input must be an array.");
//     }
//     const positiveNumbers = arr.filter(num => num > 0);
//     const result = positiveNumbers.join("");

//     return result;
// }

// console.log(getPositive([1, -4, -2])); 
// console.log(getPositive([-1, -5, -3])); 
// console.log(getPositive([5, -10, 15])); 

// function getDigits(str: string): string | false {
//     if (typeof str !== "string") return false; 
//     return str.replace(/\D/g, ""); // Digit bolmaganlarni bosh placega aylantirib beradi
//   }
  
//   console.log(getDigits("m14i1t"));
//   console.log(getDigits("Anvar_0110")); 
//   console.log(getDigits("MIT-21 => power")); 

  //-------------------------------------------------------------------------------------------

//   function majorityElement(arr: number[]): number | null { 
//     const count: Record<number, number> = {};

//     // Har bir elementni hisoblash
//     for (const num of arr) {
//         count[num] = (count[num] || 0) + 1;
//     }

//     // Eng ko'p takrorlangan elementni topish
//     let maxElement: number | null = null;
//     let maxCount = 0;

//     for (const num in count) {
//         if (count[num] > maxCount) {
//             maxCount = count[num];
//             maxElement = Number(num);
//         }
//     }

//     return maxElement;
// }

// // Misol:
// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); 
// console.log(majorityElement([10, 25, 38, 10, 55, 15, 3, 1])); 

//-------------------------------------------------------------------------------------------

// function findLongestWord(str: string): string {
    
//     const words: string[] = str.split(" ");
    
//     //  Eng uzun so'z uchun boshlang'ich qiymat
//     let longest: string = "";
  
//     //  So'zlarni tekshirish
//     words.forEach((word: string) => {
//       if (word.length > longest.length) {
//         longest = word; // Eng uzun so'zni yangilash
//       }
//     });
  
//     return longest; // Eng uzun so'zni qaytarish
//   }
  
//   // Sinab ko'rish
//   console.log(findLongestWord("I came from Uzbekistan!")); 
  

//-------------------------------------------------------------------------------------------

// function countVowels(str: string): number {
//   const vowels = "aeiouAEIOU"; // Define vowels (both uppercase and lowercase)
//   let count = 0; 

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++; 
//     }
//   }

//   return count; 
// }


// console.log(countVowels("MIT")); 
// console.log(countVowels("Jack"));  
// console.log(countVowels("Anvar"));  

//-------------------------------------------------------------------------------------------

// function reverseSentence(str: string): string {
//   return str
//     .split(' ') // Gapni so'zga ajratish
//     .map(word => word.split('').reverse().join('')) // Har bir so'zni teskarisiga o'zgartirish
//     .join(' '); // So'zlarni qaytadan birlashtirish
// }

// console.log(reverseSentence("Atletico Madrid uno love!")); 
// console.log(reverseSentence("MIT 21 JACK!")); 

//-------------------------------------------------------------------------------------------------------------

// const palindromCheck = (word: string): boolean => word === [...word].reverse().join("");


// console.log(palindromCheck("dad")); 
// console.log(palindromCheck("son")); 
// console.log(palindromCheck("mom")); 

//---------------------------------------------------------------------------------------------------------

// function calculateSumOfNumbers(arr: any[]): number {
//   return arr.reduce((sum: number, item: any) => (typeof item === 'number' ? sum + item : sum), 0);
// }


// console.log(calculateSumOfNumbers([10, "10", { number: 10 }, true, 35])); 
// console.log(calculateSumOfNumbers([20, "20", { number: 20 }, true, 55])); 

//---------------------------------------------------------------------------------------------------------------

// function objectToArray(obj: Record<string, any>): [string, any][] {
//   //  convert the object into a nested array
//   return Object.entries(obj);
// }


// console.log(objectToArray({a: 10, b: 20})); 
// console.log(objectToArray({})); 
// console.log(objectToArray({x: 55, y: 66, z: 77})); 

//--------------------------------------------------------------------------------------------------------------------

// function hasProperty(obj: object, prop: string): boolean {
//   // Loop through each property of the object
//   for (let key in obj) {
//     // Check if the current key matches the given property string
//     if (key === prop) {
//       return true; // If a match is found, return true
//     }
//   }
//   return false; 
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); 
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  
// console.log(hasProperty({ color: "red", type: "Iphone", year: 2022 }, "color")); 
// console.log(hasProperty({ color: "red", type: "Iphone", year: 2022 }, "make"));  

//---------------------------------------------------------------------------------------------------------

// function calculate(input: string): number {
//   const numbers: number[] = input.split(" + ").map(Number); // Split and convert to numbers
//   return numbers[0] + numbers[1]; // Add the two numbers
// }

// console.log(calculate("1 + 3")); 

//--------------------------------------------------------------------------------------------------------------------

// function missingNumber(numbers: number[]): number {
//   // Sonlarni tartibga solamiz
//   numbers.sort((a, b) => a - b);

//   // Tushib qolgan sonni topamiz
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== i) {
//       return i;
//     }
//   }

  
//   return numbers.length;
// }

// // Misol:
// console.log(missingNumber([3, 0, 1])); 
// console.log(missingNumber([0, 1]));    
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); 

//---------------------------------------------------------------------------------------------------------------------------

// function mergeSortedArrays(array1: number[], array2: number[]): number[] {
//   return [...array1, ...array2].sort((a, b) => a - b);
// }


// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

//-------------------------------------------------------------------------------------------------------------------------------------

// function sumOdds(number: number): number {
//   let count = 0; // Toq sonlarni sanash uchun o'zgaruvchi
//   for (let i = 0; i <= number; i++) {
//       if (i % 2 !== 0) {
//           count++; // Toq son topilsa, sanash
//       }
//   }
//   return count;
// }


// console.log(sumOdds(9)); 
// console.log(sumOdds(11));

//---------------------------------------------------------------------------------------------------------------------------------------------------

// function countChars(str: string): Record<string, number> {
//   const result: Record<string, number> = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (result[char] === undefined) {
//       result[char] = 1; // Harf birinchi marta uchrasa.
//     } else {
//       result[char] += 1; // Harf qayta uchrasa.
//     }
//   }
//   return result;
// }


// console.log(countChars("hello")); 


//---------------------------------------------------------------------------------------------------------------------

// function chunkArray<T>(array: T[], size: number): T[][] {
//   const result: T[][] = []; // Define the result array with type T[][]
//                             // T =>  (<T>) to handle arrays of any type (number, string, objects, etc.).
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size)); // Push chunks into the result array
//   }

//   return result;
// }


// const chunks = chunkArray<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// console.log(chunks); 

//---------------------------------------------------------------------------------------------------------------------------------------------

// function countOccurrences(obj: Record<string, any>, key: string): number {
//   return Object.keys(obj).reduce((count, k) => {
//     return count + (k === key ? 1 : 0) + 
//            (typeof obj[k] === 'object' && obj[k] !== null ? countOccurrences(obj[k], key) : 0);
//   }, 0);
// }


// const data = { model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } };
// console.log(countOccurrences(data, 'model')); 


// const person = {
//   name: 'John',
//   address: {
//     city: 'New York',
//     zip: 10001,
//     details: {
//       neighborhood: 'Manhattan',
//       city: 'Brooklyn',
//     },
//   },
//   hobbies: ['reading', 'traveling'],
// };

// console.log(countOccurrences(person, 'city')); 

//------------------------------------------------------------------------------------------------------------------------

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1
//     .filter((value) => arr2.includes(value)) // Ikkinchi arrayda mavjud bo'lgan elementlarni filtrlash
//     .sort((a, b) => a - b); // Natijani tartiblash
// }

// // Misol
// console.log(findIntersection([1, 2, 3], [3, 2, 0])); 

//--------------------------------------------------------------------------------------------------------------------------------------

// function sumEvens(arr: number[]): number {
//   return arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
// }


// console.log(sumEvens([1, 2, 3])); 
// console.log(sumEvens([1, 2, 3, 2])); 
// console.log(sumEvens([4, 5, 6, 7, 8])); 

// 	•	arr: number[] → Ensures the function only accepts an array of numbers.
//	•	: number → Guarantees the function returns a number.

//-----------------------------------------------------------------------------------------------------------------------------------------------

// type Person = { age: number };

// const sortByAge = (arr: Person[]): Person[] => arr.sort((a, b) => a.age - b.age);


// console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));

//---------------------------------------------------------------------------------------------------------------------------------------------------


function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(0));  
console.log(celsiusToFahrenheit(10)); 


