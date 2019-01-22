"use strict";
function telephoneCheck(str) {
  //testing for garbage input. : if (failCondition === true), return false.
  //if the number makes it all the way through, it's assumed valid and true is returned.

  //test if any alphabetical characters OR '?' char in string
  if (/[A-Z\?]/gi.test(str)) return false;

  //feed the string digits into an array
  const phoneArr = str.match(/\d/g);

  //check that number of digits provided is correct, discard all failures. 
  //It can be either 10 or 11 WITH country code. Country code must be 1 to be valid, we discard it.
  //post-processing all phoneArr.length props will = 10
  if (phoneArr.length < 10 || phoneArr.length > 11) return false;
  if (phoneArr.length === 11) {
    if (phoneArr[0] !== 1) return false;
    else phoneArr.shift();
  }

  return true;
}
  
telephoneCheck("555-555-5555");