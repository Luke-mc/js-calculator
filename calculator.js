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




function load(x){

isValid(x);

return total = x;


};



  /**
   * Return the value of `total`
   * @return { Number }
   */
function getTotal(){

  return total;

};



  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

function add(x){

isValid(x);

  return total += x;

};


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
function subtract(x){

isValid(x);

  return total -= x;

};

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

function multiply(x){

isValid(x);

  return total *= x;

};

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

function divide(x){

isValid(x);

  return total /= x;

};


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

function recallMemory(x){

  return memory;

};


  /**
   * Stores the value of `total` to `memory`
   */

function saveMemory(x){

   return memory = total;

};


  /**
   * Clear the value stored at `memory`
   */

function clearMemory(x){

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





return {

  load:load,
  getTotal:getTotal,
  add:add,
  subtract:subtract,
  multiply:multiply,
  divide:divide,
  recallMemory:recallMemory,
  saveMemory:saveMemory,
  clearMemory:clearMemory,


};

}
