//**** ARRAY METHODS ****
const testArr = ["apple", "pear", "plum", "watermelon", "peanut", "cucumber"]; //тестовый массив для проверки методов

//array - дополнительный аргумент в методах, подставлять массив к которому применяется метод
function customPop(array) {
  const lastElement = array.length - 1
  const deletedElement = array[lastElement]; //сохраняем последний элемент
  testArr.length -= 1; //обрезаем массив на 1 элемент с конца
  return deletedElement;
}

function customShift(array) {
  const deletedElement = array[0]; //сохраняем первый элемент
    for (let i = 0; i < array.length; i++) { //присваиваем каждому элементу значение следующего
      array[i] = array[i + 1];
    }
  array.length -= 1; //обрезаем массив на 1 элемент с конца
  return deletedElement;
}

function customPush(array, ...arguments) {
  const length = array.length;
    for (let i = 0; i < arguments.length; i++) {
      array[length + i] = arguments[i]; //создаем новые элементы в массиве array со значениями из элементов arguments
    }
  return array;
}

function customUnShift(array, ...arguments) {
  const arrLength = array.length;
  const newArray = [];
    for (let i = 0; i < arguments.length; i++) {//создаем новый массив с нужным кол-вом пустых слотов
      newArray[arrLength + i] = arguments[i];
    }
    for (let j = 0; j < arrLength; j++) {//заполняем пустые слоты нового массива элеметами из старого
      newArray[j] = array[j];
    }
  return newArray;
}

function customSlice(array, start, end) {
  const newArray = [];
  const newArrayLength = end - start
    for (let i = 0; i < newArrayLength; i++) {
      newArray[i] = array[start + i];
    }
  return newArray;
}

function customReverse(array) {
  const newArray = [];
    for (let i = 0; i < array.length; i++) {
      const arrayReverseElement = array.length - 1 - i;
      newArray[i] = array[arrayReverseElement];
    }
  return newArray;
}
