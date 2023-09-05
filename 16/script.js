import MomentDate from "./16.js";

// создаём инстанс класса (модуля)
const momentDate = new MomentDate();

console.log(momentDate.getDate()); // 05.09.2023
console.log(momentDate.getDate(12, 4, 2012)); // 12.04.2012

console.log(momentDate.getShortDate()); // 05.09.23
console.log(momentDate.getShortDate(3, 11, 2011)); // 03.11.11

console.log(momentDate.getFullDate()); // September 5, 2023
console.log(momentDate.getFullDate(28, 2, 1823)); // February 28, 1823

console.log(momentDate.getQuarterYear()); // 3
console.log(momentDate.getQuarterYear(4)); // 2

console.log(momentDate.getDayOfYear()); // 248
console.log(momentDate.getDayOfYear(19, 11, 1999)); // 323
// високосный год
console.log(momentDate.getDayOfYear(19, 11, 2000)); // 324

