// Функция для проверки длины строки.
// проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и
// false, если строка длиннее. Эта функция нам пригодится для валидации формы

// let checkingStringLength = function (stringLength, maxLength) {
//   if (stringLength.length <= maxLength) {
//     return true;
//   }
//   return false;
// };

// console.log(checkingStringLength('проверяемая строка', 20));

// const determinePalindrom = function (string) {
//   const newText = string.replaceAll('', ' ');
//   let reverseString = '';
//   for (let i = newText.length - 1; i >= 0; i = i - 1) {
//     reverseString += newText.at(i);
//   }
//   if (reverseString === newText) {
//     return 'Это палиндром';
//   }
//   return 'Это не палиндром';
// };

// console.log(determinePalindrom('топот'));

function parseTime(timeString) {
  const [hour, minute] = timeString.split(':');
  console.log(minute);
  return hour * 60 + minute;
}

function checkMeeting(dayStart, dayEnd, meetingStart, meetingDuration) {
  const dayStartInMinutes = parseTime(dayStart);
  const dayEndInMinutes = parseTime(dayEnd);
  const meetingStartInMinutes = parseTime(meetingStart);

  return (
    meetingStartInMinutes >= dayStartInMinutes &&
    meetingStartInMinutes + meetingDuration <= dayEndInMinutes
  );
}

console.log(checkMeeting('08:00', '17:30', '14:00', 90)); // true
console.log(checkMeeting('8:0', '10:0', '8:0', 120));     // true
console.log(checkMeeting('08:00', '14:30', '14:00', 90)); // false
console.log(checkMeeting('14:00', '17:30', '08:0', 90));  // false
console.log(checkMeeting('8:00', '17:30', '08:00', 900));
