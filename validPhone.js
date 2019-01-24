"use strict";
function telephoneCheck(str) {

  //test if any alphabetical characters OR '?' chars in string
  if (/[A-Z\?]/gi.test(str)) return false;

  //test if any spaces & remove
  //remove leading 1 (if exist) to finish formatting
  let strFormed = str.match(/[\s\-\(\)\d]/g);
  while (strFormed.indexOf(' ') > -1) strFormed.splice(strFormed.indexOf(' '), 1);
  if (strFormed[0] === '1') strFormed.splice(0,1);

  const hasDashes = /[\-]/g.test(strFormed);
  const hasParens = /[\(\)]/g.test(strFormed);
  //if has both () && -, test whether it looks like this - (555)555-5555
  if (hasDashes && hasParens) {
    if (strFormed[0] === '(' && strFormed[4] === ')' && strFormed[8] === '-') {
      strFormed.splice(8,1);
      strFormed.splice(4,1);
      strFormed.splice(0,1);
    }
    else return false;
  }
  //if has ONLY '-', test whether it looks like  '555-555-5555' OR '555555-5555'. Remove '-'s if pass
  if (hasDashes && !hasParens) {
    if (strFormed[3] === '-' && strFormed[7] === '-') {strFormed.splice(7,1); strFormed.splice(3,1)}
    else if (strFormed[6] ==='-') strFormed.splice(6,1);
    else return false;
  }
  //if has ONLY '()', test whether it looks like (555)5555555. Remove '()'s if pass
  if (hasParens && !hasDashes) {
    if (strFormed[0] === '(' && strFormed[4] === ')') {strFormed.splice(4,1); strFormed.splice(0,1)}
    else return false;
  }

  //verify number of digits passed into phone number is valid, if country code correct, remove.
  //with all fluff rm'd, check length. If 11 & country code === 1, remove country code 1. Else return false.
  if (strFormed.length < 10 || strFormed.length > 11) return false;
  if (strFormed.length === 11) {
    if (strFormed[0] !== '1') return false;
    else strFormed.splice(0,1); 
  }
  console.log('passed everything');
  return true;
}
  
telephoneCheck("1 (555) 555-5555");