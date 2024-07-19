// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...

//this is a comment to initialized the work
//testing submission and stuff

const instruction1 = new Promise((resolve) => setTimeout(resolve, 500, 'wash brussels sprouts'));
const instruction2 = new Promise((resolve) => setTimeout(resolve, 500, 'cut off base and chop in half'));
const instruction3 = new Promise((resolve) => setTimeout(resolve, 500, 'toss in bowl with olive oil, balsamic vinegar and salt'));
const instruction4 = new Promise((resolve) => setTimeout(resolve, 500, 'preheat oven to 500 F'));
const instruction5 = new Promise((resolve) => setTimeout(resolve, 500, 'coat baking sheet with olive oil'));
const instruction6 = new Promise((resolve) => setTimeout(resolve, 500, 'roast in the oven for 20 minutes'));
const instruction7 = new Promise((resolve) => setTimeout(resolve, 500, 'place back in bowl and add salt and pepper'));
const instruction8 = new Promise((resolve) => setTimeout(resolve, 500, 'enjoy'));
