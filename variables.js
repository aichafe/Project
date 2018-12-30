// JavaScript ES6 variables suppor


/* 
Hoisting - Hoisting is the process of moving all variable and function declarations to the top of the current scope.            Only the declarations are hoisted. The actual codes can be anywhere in they are required in the code.                By implementing hoisting, you can use a function a function before its definition. 

ES6 supports three types of variables namely var, let and const.

var - with var, variables declared can be accessed throughout the code, including inside functions.
let - let variables are available only within the scope or block in which they are defined. 
      For example:
      var myNamesArray = ["Ahmed", "Isah"];
      function sayMyNames(){
          let myAdditionalNames = "Chafe";
          console.log(myNamesArray + " " + myAdditionalNames);
      }
      console.log(myAdditionalNames);
      sayMyNames();

      In the above example, console.log(myAdditionalNames) will produce error that myAddionalNames is undefined.

const - const variables behave just like let, except that their contents cannot be changed. You can however modify the contents. For instance;
        const myNamesArray = ["Ahmed", "Isah"];
        console.log(myNamesArray);
        myNamesArray = ["Bob", "Magaji"];
        console.log(myNamesArray);
        myNamesArray.push("Kaduna");
        console.log(myNamesArray);
        
        The first console.log() will display the contents of the array myNamesArray.
        The second console.log() will however display error or nothing because myNamesArray is being redefined.
        The third console.log() is however ok and will display myNamesArray because its content is being increased and not being redefined. We need to note that this will also work with objects but will not work with strings and numbers.
*/