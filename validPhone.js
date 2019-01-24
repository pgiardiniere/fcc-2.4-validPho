"use strict";
function telephoneCheck(str) {
  //testing for garbage input. : if (failCondition === true), return false.
  //if the number makes it all the way through, it's assumed valid and true is returned.

  //test if any alphabetical characters OR '?' OR '-' char in string
  if (/[A-Z\?]/gi.test(str)) return false;

  //test if any parens in string, if parens, check position for validity
  if (/[\(\)]/g.test(str)) {
    const parenArr= str.match(/[\(\)\d]/g);
    console.log(parenArr);
    
  }
  //test if any dashes in string, if '-', check position
  if (/[\-]/g.test(str)) {
    ;
  }

  //feed the string digits into an array
  const phoneArr = str.match(/\d/g);
  console.log(phoneArr.join(''));
  console.log(phoneArr.length);

  //check that number of digits provided is correct, discard all failures. 
  //It can be either 10 or 11 WITH country code. Country code must be 1 to be valid, we discard it.
  //post-processing all phoneArr.length props will = 10
  if (phoneArr.length < 10 || phoneArr.length > 11) return false;
  if (phoneArr.length === 11) {
    if (phoneArr[0] !== '1') return false;
    else {
      phoneArr.shift();
    } 
  }
  console.log(phoneArr[0]);
  return true;
}
  
telephoneCheck("1 555)555-5555");