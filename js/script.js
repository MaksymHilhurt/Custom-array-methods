//**** ARRAY METHODS ****
let testArr = ['apple', 'pear', 'plum', 'watermelon', 'peanut', 'cucumber']; //тестовый массив для проверки методов

//arr - дополнительный аргумент в методах, подставлять массив к которому применяется метод
function customPop(arr) {
  let deletedElem = arr[testArr.length-1]; //сохраняем последний элемент
  testArr.length -= 1 //обрезаем массив на 1 элемент с конца
  return deletedElem;
};

function customShift(arr) {
  let deletedElem = arr[0]; //сохраняем первый элемент
  for (let i = 0; i < arr.length; i++) { //присваиваем каждому элементу значение следующего
    arr[i] = arr[i+1];
  };
  arr.length -= 1; //обрезаем массив на 1 элемент с конца
  return deletedElem;
};

function customPush(arr, ...arguments) {
  let length = arr.length;
  for (let i = 0; i < arguments.length; i++) {
    arr[length + i] = arguments[i]; //создаем новые элементы в массиве arr со значениями из элементов arguments
  }
  return arr;
};

function customUnShift(arr, ...arguments) {
  let arrLength = arr.length;
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) { //создаем новый массив с нужным кол-вом пустых слотов
    newArr[arrLength + i] = arguments[i];
  };
  for (let j = 0; j < arrLength; j++) { //заполняем пустые слоты нового массива элеметами из старого
    newArr[j] = arr[j];
  };
  return newArr;
};

function customSlice(arr, start, end) {
  let newArr = [];
  for (let i = 0; i < end-start; i++) {
    newArr[i] = arr[start+i];
  }
  return newArr;
};

function customReverse(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[(arr.length - 1) - i];
  };
  return newArr;
};
