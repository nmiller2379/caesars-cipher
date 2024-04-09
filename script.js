// function rot13(str) {
//   return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
// }

// Another solution
function rot13(str) {
  let bigStr = str.toUpperCase();
  let result = "";
  const alphabetMap = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
  };

  for (const letter of bigStr) {
    // Check if the letter is in the alphabetMap
    if (alphabetMap[letter]) {
      result += alphabetMap[letter];
    } else {
      for (const key in alphabetMap) {
        if (alphabetMap[key] === letter) {
          result += key;
        }
      }
    }
    if (
      !Object.keys(alphabetMap).includes(letter) &&
      !Object.values(alphabetMap).includes(letter)
    ) {
      result += letter;
    }
    // If it is, add the corresponding value to the result
    // If not, iterate through the alphabetMap and check to see if letter is equal to the value.
    // If it is, add the key to the result
    // If not, add the letter to the result
  }
  return result;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC")); // should decode to "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // should decode to "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // should decode to "FREE LOVE?"
