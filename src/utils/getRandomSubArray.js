
function getRandomSubArray(array, lengthNewArray) {
  const lengthArray = array.length;
  const newArray = [...array];

  // ranodmize copied array (original size)
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  // remove last element until get array of required length
  for (let i = lengthArray; i > lengthNewArray; i -= 1 ) {
    newArray.pop();
  }

  return newArray;
}

export default getRandomSubArray;