// timeout and interval
console.log("Antes");

setTimeout(() => {
  console.log("Timeout");
}, 5000);

setInterval(() => {
  console.log("Interval");
}, 3000);
setInterval(() => {
  const clock = new Date();
  console.log(clock.toLocaleTimeString());
}, 1000);

console.log("Depois");

// promisses

const urlAPI = "https://jsonplaceholder.typicode.com";

//https://jsonplaceholder.typicode.com/users
fetch(urlAPI + "/users")
  .then((response) => response)
  .then((data) => console.log(data));

console.log("Final");

for (let i = 0; i < 20000; i++) {
  console.log(i);
}
setTimeout(() => {
    console.log("Timeout");
    
}, 1000);
