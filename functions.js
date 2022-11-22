const findTheNumberOfOddNumbers = (numara) => {
  let odds = numara.filter((num) => num %2===1);
  return odds.length;
};

console.log(findTheNumberOfOddNumbers([3, 6, 7, 8, 4, 2]));
console.log(findTheNumberOfOddNumbers([5, 91, 67, 45, 6, 22]));

// //-------------- 2 -----------------------------

let item = [false, 'Hi', true, 23, 'false', 55];
const getIndexOfFalseItem = (pItem) => {
  let indexNumber = pItem.indexOf(false)
  return indexNumber;
};
console.log(getIndexOfFalseItem([45, 'Hi', false, true, 23, 'Coders']));
console.log(getIndexOfFalseItem([false, 'Hi', true, 23, 'false', 55]));



// //-------------- 3 ----------------------------


const filterNumbers = (pArray) => {
  let myNmr = pArray.filter(elmnt => typeof elmnt == "number")
  console.log(myNmr)
  return myNmr;
};

filterNumbers([false, 'Hi', true, 23, 'false', 55]);


//-------------- 4 -----------------------------

const generateEmailAddress = (pArray) => {
  let newArray = pArray.map((ablet) => {
    return ablet.toLowerCase() + "@gmail.com"
  });
  return newArray;
};
 generateEmailAddress(['Huseyin', 'Ahmet', 'Mehmet']);

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
