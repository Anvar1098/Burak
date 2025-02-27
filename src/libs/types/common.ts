export interface T {
    [key: string]: any;
} 

// T =>  index signature in TypeScript

/** 
    
    This allows you to create an object (like restaurantController in your example) 
    Where the properties (methods or data) can be dynamically added, and the values can be of any type. 
    It essentially makes the object completely flexible.
 **/