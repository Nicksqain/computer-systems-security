let message = prompt("Сообщение для шифровки: ");
let key = prompt("Ключ шифровки: ");
let itog = "";
key = key.split("");

console.log(message);
console.log(key);
while (message.length > key.length) {
  for (let i = 0; i <= key.length; i++) {
    key.push(key[i]);
    if (message.length == key.length) {
      break;
    }
  }
}

let encryption = (str) => {
  array = [];
  finalArray = [];

  for (let i = 0; i < str.length; i++) {
    let symbol = str.charCodeAt(i) + Number(key[i]);
    array.push(symbol);
  }
  for (let k = 0; k < array.length; k++) {
    x = String.fromCharCode(array[k]);
    finalArray.push(x);
  }
  return finalArray.join("");
};

let decryption = (str) => {
  array = [];
  finalArray = [];
  for (let i = 0; i < str.length; i++) {
    let symbol = str.charCodeAt(i) - Number(key[i]);
    array.push(symbol);
  }
  for (let k = 0; k < array.length; k++) {
    x = String.fromCharCode(array[k]);
    finalArray.push(x);
  }
  return finalArray.join("");
};

let s = encryption(message);
console.log(s);
console.log(decryption(s));
