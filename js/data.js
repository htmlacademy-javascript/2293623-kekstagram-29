import {getRandomInteger, getRandomArrayElement} from './util.js';

const NAMES = [
  'Катюша',
  'Ангелина',
  'Владик',
  'Давид',
  'Бэн',
  'Олеся'
];

const MESSAGES = [
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Nice!',
  'Вот это поворот',
  'So cute',
  'Узбагойся и отложи телефон, оно тебе не надо',
  'Lets do it'
];

const DESCRIPTION = [
  'Сегодня как-то так',
  'А что бы вы сделали?',
  'Работать, работать и еще раз работать.',
  'My favorite place',
  'Пейздаж осени',
  'Виски/колла',
  'ВЫглядит вкусно',
  'Без фильтров'
];

const createIdGenerator = () => {
  let lastGenerateId = 0;

  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(MESSAGES),
).join(' ');

const createComment = () => ({
  id: generateCommentId(), //любое число. Идентификаторы не должны повторяться.
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`, //это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.
  message: createMessage(), //вам необходимо взять одно или два случайных предложения из представленных
  name: getRandomArrayElement(NAMES), // берем из массива имен
});

const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from(
    { length: getRandomInteger(0, 30) },
    createComment,
  )
});

const createdPosts = () => Array.from({ length: 25 }, (_, postIndex) => createPost(postIndex + 1));

export { createdPosts };
