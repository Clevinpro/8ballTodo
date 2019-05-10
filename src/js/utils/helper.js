export const genarateId = notes => {
  // Функция принимает массив с уже существующими ToDo
  let result;
  const mass = notes.reduce((acc, el) => acc.concat(el.id), []); // Сохраняем в массив существующие ID
  
  for (let i = 1; i < Infinity; i++) {
    if (!mass.includes(i)) {
      // Проверяем есть ли в массиве айди по возрастанию. Если нет, то возвращяем его
      result = i;
      break;
    }
  }
  //   console.log(result);
  return result;
};


// _______________________RANDOMIZER
export const generatePhrase =  (num)  => Math.floor( Math.random()*num)
