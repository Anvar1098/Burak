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

function getDigits(str: string): string | false {
    if (typeof str !== "string") return false; 
    return str.replace(/\D/g, ""); // Digit bolmaganlarni bosh placega aylantirib beradi
  }
  
  console.log(getDigits("m14i1t"));
  console.log(getDigits("Anvar_0110")); 
  console.log(getDigits("MIT-21 => power")); 
