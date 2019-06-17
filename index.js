// Code your solutions in this file
const nameArray = ["Lisa", "Keithlin", "Jan"];
const giftType = "surprise"
function writeCards(nameArray, giftType) {
  const messageArr = [];
  for (let i = 0; i < nameArray.length; i ++) {
    messageArr[i] = `Thank you, ${nameArray[i]}, for the wonderful ${giftType} gift!`;
  }
  return messageArr;
}

function countDdonw(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
