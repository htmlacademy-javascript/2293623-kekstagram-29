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

const determinePalindrom = function (string) {
  const newText = string.replaceAll('', '');
  let reverseString = '';
  for (let i = newText.length - 1; i >= 0; i = i - 1) {
    reverseString += newText.at(i);
  }
  if (reverseString === newText) {
    return 'Это палиндром';
  }
  return 'Это не палиндром';
};

console.log(determinePalindrom('топот'));
