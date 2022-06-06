// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


    describe ("shuffArray", () => {
        it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
            const colors1 = ["purple", "blue", "green", "yellow", "pink"]
            const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
            expect(shuffArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
            expect(shuffArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
        })
    })

// b) Create the function that makes the test pass.

        // Create a function that takes in an array and returns a new array with the requested output
        // the new array will return minus the first element. Use shift() which removes the first element.
        // iterate through the array, shuffle and return the remaining elements into the array
        // how to shuffle?
        // the reamining items should return randomly sorted by using sort and random mehtod

    const shuffArray = (arr) => {
        arr.shift()
        return arr.sort((a, b) => 0.5 - Math.random());
    }

    //   PASS  ./code-challenges.test.js
    //   shuffArray
    //     ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
    
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

    describe ("minMax", () => {
        it("returns an array of the minimum and maximum numbers in that order", () => {
            const nums1 = [3, 56, 90, -8, 0, 23, 6]
            const nums2 = [109, 5, 9, 67, 8, 24]
            expect(minMax(nums1)).toEqual([-8, 90])
            expect(minMax(nums2)).toEqual([5, 109])        
        })
    })

        // yarn jest --> ReferenceError: minMax is not defined

// b) Create the function that makes the test pass.

    // Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
    // sort the numbers in order from least to greatest
    // return the array containing only the first and last index

    const minMax = (array) => {
        array.sort((a,b)=>a-b) // --> [-8, 0, 3, 6, 23, 56, 90]
        return [array[0], array[array.length -1]]
    }

    // PASS  ./code-challenges.test.js
    // newArray
    //   ✓ returns an array of the minimum and maximum numbers in that order (2 ms)
  
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
       
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator ... to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

    describe ("newArray", () => {
        it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
            const testArray1 = [3, 7, 10, 5, 4, 3, 3]
            const testArray2 = [7, 8, 2, 3, 1, 5, 4]
            expect(newArray(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
        })
    })

        // yarn jest: --> ReferenceError: newArray is not defined    

// b) Create the function that makes the test pass.

    //Create a function that takes in two arrays as arguments and returns one array with no duplicate values.    
    // Use concat() method to merge both arrays.
    // New set will take the values of array1 and array2 and return new array with no duplicates values.

    const newArray = (array1, array2) => {
        let comboArray = [...new Set(array1.concat(array2))]
        return comboArray
    }

    // PASS  ./code-challenges.test.js
    // newArray
    // ✓ takes in two arrays as arguments and returns one array with no duplicate values (2 ms)

    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total

