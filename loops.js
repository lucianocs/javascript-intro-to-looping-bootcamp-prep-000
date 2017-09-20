/*

 Build a function `forLoop`. It takes an array as an argument. Start counting from 0,
 and, using a `for` loop, add a string to the array 25 times. But not just any
 string. If your `i` value is `1`, add the string `"I am 1 strange loop."`;
  if your `i` value is anything else, add the string `"I am ${i} strange loops."`.
   (Remember flow control with `if` and `else`? And how do we _interpolate_ `i`?)
    Then return the array.

 Your `for` loop could look something like this:
*/


function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if(i === 1 ){
      array.push("I am 1 strange loop.")
    } else
        array.push(`I am ${i} strange loops.`)
  }
  return array
}




function whileLoop(n) {

  while (n > 0) {
    console.log(n)
    n--
  }
  return "done"

}



function doWhileLoop(array){
/*
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop()
  } while ( array.length > 0 or maybeTrue()  );*/
  return array

}
