/* Assignment Details:
Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type.
Assignment Requirements:
1. Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result.
Hints to Solve:
Use a conditional statement to check the number type. If the given number is greater than 0, it is a positive
number and if the given number is less than 0, it is a negative number. If the given number is 0, then the
number is neutral.
Expected Outcome:
Upon completion, you should be able to:
- Understand conditional statements in javascript */


function number(a){
if(a>0){
console.log("The number is positive");
    }
    else if(a<0)
    {
        console.log("The number is negative");
            }
            else{
                console.log("The number is zero");
                 }
    
}
number(0);