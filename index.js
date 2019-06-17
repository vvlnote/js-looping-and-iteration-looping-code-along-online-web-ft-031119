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