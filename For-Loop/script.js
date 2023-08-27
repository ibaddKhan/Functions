// ! For Loop
// const num = +prompt("Enter any num");
// for (let i = 2; i <= 50; i++) {
//   div.innerHTML += `</br>`;
//   for (let j = 1; j <= 10; j++) {
//   div.innerHTML += ` ${i} * ${j} = ${i * j} </br>`;
//   }
//  }

// const i = 11;
// const div = document.querySelector("div");
// while (i <= 12) {
//   div.innerHTML = "earr";
//   i++;
// }

// ! While
// let i = 2;
// const div = document.querySelector("div");
// const num = +prompt("Enter any num");
// while (i <= 10) {
//   div.innerHTML += `${num} * ${i} = ${num * i} </br>`;
//   i++;
// }

let i = 1;
const div = document.querySelector("div");
while (i < 20) {
  div.innerHTML += ` </br>`;
  i++;
  let j = 1;
  while (j <= 10) {
    div.innerHTML += `${i} * ${j} = ${i * j}  </br>`;
    j++;
  }
}
