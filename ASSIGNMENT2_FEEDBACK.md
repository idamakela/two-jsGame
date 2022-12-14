Hi Ida!

Excellent work! Even though functions weren't a requirement you clearly have shown you understand how and why we use them.

10/10, Välgodkänt! Well done.

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

Constant or let variable: ✅

Array: ✅

Random selection from array: ✅
   The preferred way, as an examplpe, is to have randomWord() return a value, then initialise the variable with the function:

   let answer = randomWord();
   function randomWord() {
    return words[Math.floor(Math.random() * words.length)];
   }

   That way you can reuse the function withh a different variable, if you need to.

   The even better way is to pass in the words array to the function, that way you could use the same function for any variable and with any array!

Loops:
  For: ✅

  While: ✅

Comparison with user entered data: ✅

Final message: ✅

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

Comparison with an array: ✅

Nested logic: ✅
  Very concise.

Input validation: ✅

Cancel button handling: ✅

Semantic variable naming: ✅

Code style: ✅
  Add a space after the if, fors and whiles :
  if(userInput == null) { => if (userInput == null) {