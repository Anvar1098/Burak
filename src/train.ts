function getPositive(arr: number[]): string {
    
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array.");
    }
    const positiveNumbers = arr.filter(num => num > 0);
    const result = positiveNumbers.join("");

    return result;
}

console.log(getPositive([1, -4, -2])); 
console.log(getPositive([-1, -5, -3])); 
console.log(getPositive([5, -10, 15])); 
