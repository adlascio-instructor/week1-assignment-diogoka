/*In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

Input

Expected Output


Instruction
Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. 
If there are two instructors with the longest name, return the first one.
*/

const instructorWithLongestName = function (instructors) {
  const result = instructors[0];
  instructors.forEach(element => {
    let tempName = element.name;
    let tempCourse = element.course;
    if (tempName.length > result.name.length) {
      result.name = tempName;
      result.course = tempCourse;
    }
  });
  return result;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "Mobile" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
); //{name: "Jeremiah", course: "Web"}

console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "Mobile" },
    { name: "Domascus", course: "Web" },
  ])
); //{name: "Domascus", course: "Web"}

module.exports = instructorWithLongestName;
