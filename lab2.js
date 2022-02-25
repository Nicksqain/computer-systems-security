// let message = prompt("Сообщение для шифровки: ").toUpperCase();
// let key = prompt("Ключ шифровки: ");
// let itog = "";
// key = key.split("");

const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Строка алфавита
const message = "NAUTILUS"; //Сообщение
const key = "KIULT"; //Ключ

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
console.log(`Зашифрованный текст: ${Encrypt(message, key)}`);
console.log(
  `Расшифрованный текст: ${Encrypt(Encrypt(message, key), key, "decrypt")}`
);
