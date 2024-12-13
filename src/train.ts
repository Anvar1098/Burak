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

  function majorityElement(arr: number[]): number | null { 
    const count: Record<number, number> = {};

    // Har bir elementni hisoblash
    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    // Eng ko'p takrorlangan elementni topish
    let maxElement: number | null = null;
    let maxCount = 0;

    for (const num in count) {
        if (count[num] > maxCount) {
            maxCount = count[num];
            maxElement = Number(num);
        }
    }

    return maxElement;
}

// Misol:
console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); 
console.log(majorityElement([10, 25, 38, 10, 55, 15, 3, 1])); 

