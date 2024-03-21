let stickFigure = document.querySelector(".robot");

// const changeColor = () => {
//   let color = prompt("Type a color");
//   let page = document.querySelector("body");
//   page.style.backgroundColor = color;
// };
// // ----> This function is reusable and can change the background based on the color its given as a PARAMETER.

const changePicture = (link) => {
  stickFigure.setAttribute("src", link);
};
// // -----REUSABLE!!!!!!!!!!!

const playAudio = () => {
    let audio = new Audio('/media')
    audio.play()
}

const music = () => {
  changePicture(
    "https://media3.giphy.com/media/u6KfSahi06rz8VdJlQ/giphy.gif?cid=6c09b9520jk8sb54f0vm3kgnvypg48ciaml8kce0xb895ss5&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
  );
};
const run = () => {
  changePicture(
    "https://i.pinimg.com/originals/6d/25/04/6d250437f993c33be10ce669ed473bfc.gif"
  );
};
const karateMode = () => {
  changePicture("https://media1.tenor.com/m/YaoiRO5sMbIAAAAC/stick-figure.gif");
};
const flip = () => {
  changePicture(
    "https://64.media.tumblr.com/284bcbb352e7c04553dec66365c1f01d/350938bef123bc81-03/s400x600/b59945cb71f94e3429d8b7e0b3d6da6a70675c80.gif"
  );
};
// // I call the function changePicture INSIDE of the other functions to use its instruction AGAIN. -REUSABILITY-
// // -----------------------------------------------------

// let box= document.querySelector(".numContainer");
// let currentNumber;

// const validateIfNum = (data) => {
//   if (data != typeof Number) {
//     alert("INVALID DATA TYPE");
//   }
// };

// const showNumber = () => {
//   box.innerHTML = "";
//   let givenNum = prompt("Choose a Number");

//   box.append(newNum);
//   currentNumber = newNum;
// };

// const getNumber = () => {
//   console.log(currentNumber);
//   box.innerHTML = "";
//   box.append(currentNumber * 2);
// };

// // Function Declaration
// function computeArea(width, height) {
//     let area = width * height
//     return area
// }

// // // Arrow
// const computeArea = (width, height) => {
//     let area = width * height
//     console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`)
// };

//  ---------------ASSIGNMENT


// Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
// const maxOfTwoNumbers = (a, b) => {
//     if (a > b) {
//       console.log(`${a} is the largest`);
//       return a;
//     } else if (a === b) {
//       console.log(`Both ${a} and ${b} are the same`);
//       return a;
//     } else {
//       console.log(`${b} is the largest`);
//       return b;
//     }
//   };
  
  // maxOfTwoNumbers(12,4)
  // maxOfTwoNumbers(1,41)
  // maxOfTwoNumbers(12,12)
  // Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
  
//   const maxOfThreeNumbers = (a, b, c) => {
//     let biggerNum = maxOfTwoNumbers(a, b);
//     if (c > biggerNum) {
//       console.log(`${c} is the maxOfThree`);
//     } else {
//       console.log(`${biggerNum} is the maxOfThree`);
//     }
//   };
  
  // maxOfThreeNumbers(10,20,30)
  // maxOfThreeNumbers(12,4,2)
  // maxOfThreeNumbers(22,41,222)
  
  // Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
  
  // const isCharAvowel = (character) => {
  //   if (
  //     character === "a" ||
  //     character === "e" ||
  //     character === "i" ||
  //     character === "o" ||
  //     character === "u" ||
  //     character === "y"
  //   ) {
  //     console.log(`Character ${character} is a Vowel`);
  //   } else {
  //     console.log(`Character ${character} is NOT a Vowel`);
  //   }
  // };
  // isCharAvowel('a')
  // isCharAvowel('p')
  // isCharAvowel('y')
  // isCharAvowel('m')
  
  // Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
  
//   const sumArray = (arrayOfNums) => {
//     let holder = 0;
//     arrayOfNums.forEach((num) => {
//       holder += num;
//     });
//     console.log(`${holder} is the total value of the added array`);
//   };
  
  
  // sumArray([2,3,4,66,7])
  // sumArray([1,1,1,1,1])
  // sumArray([2,13,444,626,723])
  
  // Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
  
//   const multiplyArray = (arrayOfNums) => {
//     let holder = 1;
//     arrayOfNums.forEach((num) => {
//       holder *= num;
//     });
//     console.log(`${holder} is the total value of the multiplied array`);
//   };
  // multiplyArray([2,3,4,66,7])
  // multiplyArray([1,1,1,1,1])
  // multiplyArray([2,13,444,626,723])
  
  // Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
//   const numArgs = (...args) => {
//     let container = [];
//     args.forEach((argument) => {
//       container.push(argument);
//     });
//     console.log(container.length);
//   };
  
  // numArgs(1,2,3,4)
  // numArgs(1,2)
  // numArgs(1)
  
  // Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
  
//   const reverseString = (word) => {
//     let wrd = String(word) ;
//     let choppedWord = wrd.split("");
//     console.log(`Chopped: ${choppedWord}`)
//     let revWord = choppedWord.reverse().join()
//     console.log(revWord);
//   };
//   // reverseString('Jordan')
  // reverseString('racecar')
  // reverseString('tacocat')
  // reverseString('programming')
  
  // Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
  
//   const longestStringInArray = (arr) => {
//     let longestWord = 0;
//     let currentWord = "";
//     arr.forEach((word) => {
//       console.log(word.length);
//       if (word.length > longestWord) {
//       longestWord = word.length;
//       currentWord = word;
//       }
//     });
//     console.log(
//       `The longest word is ${currentWord} with a character count of ${longestWord}`
//     );
//   };
  
  // longestStringInArray(["apple","doctor","electroencephlagram"])
  // longestStringInArray(["toy","boy","television"])
  // longestStringInArray(["ayo","nyc","yeerrrrrrr"])
  
  // Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
  
//   const stringsLongerThan = (arr,num) => {
//       let LongWordArray = []
//       let focusNumber = num
  
//       arr.forEach((word)=>{
//           if(word.length > focusNumber){
//               LongWordArray.push(word)
//           }
//       })
//       console.log(LongWordArray)
//   }
//   stringsLongerThan(["butter","maple","coin","yellow"],4)
//   stringsLongerThan(["Septiembre","Electroencephlagram","Prestidigitatious"],10)
//   stringsLongerThan(["green","toy","balloon"],3)