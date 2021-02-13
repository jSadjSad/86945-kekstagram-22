const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Получаем массив случайных элементов из другого массива
const createRandomArrayFromArray = (sourceArray, minAmount, maxAmount) => {
  let elementsAmount = getRandomIntInclusive(minAmount, maxAmount);
  const elements = [];
  while (elementsAmount > 0) {
    const element = sourceArray[getRandomIntInclusive(0, sourceArray.length - 1)];
    if (!elements.includes(element)) {
      elements.push(element);
      elementsAmount--;
    }
  }
  return elements;
}

export { getRandomIntInclusive, createRandomArrayFromArray };
