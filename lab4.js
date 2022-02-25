const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Строка алфавита
let message = "NAUTILUS"; //Сообщение
let key = "KIUL"; //Ключ
let message1 = "";
let message2 = "";

Array.from(message).forEach((char) => {
  message.indexOf(char) % 2 == 0 ? (message1 += char) : (message2 += char);
});
console.log(message1);
console.log(message2);

function Encrypt(message, key, mode) {
  let maxlength = Math.max(message.length, key.length);
  let result = "";
  for (i = 0; i < maxlength; i++) {
    let messageBrute = ABC.indexOf(
      message[i >= message.length ? i % message.length : i]
    );
    let keySearch = key[i >= key.length ? i % key.length : i];
    let keyBrute =
      typeof mode !== "undefined" && mode.indexOf("item") !== -1
        ? parseInt(keySearch)
        : ABC.indexOf(keySearch);
    keyBrute =
      typeof mode !== "undefined" && mode.indexOf("decrypt") !== -1
        ? // режим для дешифрации, если равен первому вхождению
          -keyBrute
        : keyBrute;
    symbolSearch = ABC[(ABC.length + (messageBrute + keyBrute)) % ABC.length]; // вычисление разницы между символами, нахождение по таблице виженера
    result += symbolSearch;
  }
  return result;
}
// console.log(Encrypt(message, key));
console.log(`Введённое сообщение для шифрования: ${message}`);
console.log(`Введённый ключ шифрования: ${key}\n `);
console.log(`Зашифрованный текст: ${Encrypt(message1, key)}`);
console.log(
  `Расшифрованный текст: ${Encrypt(Encrypt(message1, key), key, "decrypt")}`
);

// 2 ENCRYPT / DECRYPT

let itog = "";
key = "2456";

while (message2.length > key.length) {
  for (let i = 0; i <= key.length; i++) {
    key.push(key[i]);
    console.log(key);
    if (message2.length == key.length) {
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

let s = encryption(message2);
console.log(s);
console.log(decryption(s));

//
console.log(`Сообщения для шифрования: ${message}`);
console.log(`Зашифрованное сообщение: ${message}`);
