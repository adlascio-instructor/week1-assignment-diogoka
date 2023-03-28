/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. 
We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  let result = "";
  let cazeArray = [
    "camel",
    "pascal",
    "snake",
    "kebab",
    "title",
    "vowel",
    "consonant",
    "upper",
    "lower"
  ];

  if (Array.isArray(caze)) {
    for (let i = 0; i < caze.length; i++) {
      if (cazeArray.includes(caze[i])) {
        result = makeCaze(result || input, caze[i]);
      }
    }
    return result;
  } else {
    switch (caze) {
      case "camel":
        result = input
          .split(" ")
          .map((word, index) => {
            if (index === 0) {
              return word;
            } else {
              return word[0].toUpperCase() + word.slice(1);
            }
          })
          .join("");
        break;
      case "pascal":
        result = input
          .split(" ")
          .map((word) => {
            return word[0].toUpperCase() + word.slice(1);
          })
          .join("");
        break;
      case "snake":
        result = input.split(" ").join("_");
        break;
      case "kebab":
        result = input.split(" ").join("-");
        break;
      case "title":
        result = input
          .split(" ")
          .map((word) => {
            return word[0].toUpperCase() + word.slice(1);
          })
          .join(" ");
        break;
      case "vowel":
        result = input
          .split("")
          .map((char) => {
            if ("aeiou".includes(char)) {
              return char.toUpperCase();
            } else {
              return char;
            }
          })
          .join("");
        break;
      case "consonant":
        result = input
          .split("")
          .map((char) => {
            if ("bcdfghjklmnpqrstvwxyz".includes(char)) {
              return char.toUpperCase();
            } else {
              return char;
            }
          })
          .join("");
        break;
      case "upper":
        result = input.toUpperCase();
        break;
      case "lower":
        result = input.toLowerCase();
        break;
    }
  }




  return result;
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
