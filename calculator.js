/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */


function calculatorModule(){

  var memory = 0;


  var total = 0;

var calculator = {};




  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */




 calculator.load = function(x){

isValid(x);

return total = x;


};



  /**
   * Return the value of `total`
   * @return { Number }
   */
calculator.getTotal = function(){

  return total;

};



  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   calculator.add = function(x){

isValid(x);

  return total += x;

};


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
calculator.subtract = function(x){

isValid(x);

  return total -= x;

};

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

calculator.multiply = function(x){

isValid(x);

  return total *= x;

};

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   calculator.divide = function(x){

isValid(x);

  return total /= x;

};


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   calculator.recallMemory = function(x){

  return memory;

};


  /**
   * Stores the value of `total` to `memory`
   */

   calculator.saveMemory = function(x){

   return memory = total;

};


  /**
   * Clear the value stored at `memory`
   */


   calculator.clearMemory = function(x){

   return memory = 0;

};


  /**
   * Validation
   */

   function isValid(num){

 if(typeof num === "number"){

      return true;

    }

 else{

throw new Error;

    }
   };





return calculator;

}
