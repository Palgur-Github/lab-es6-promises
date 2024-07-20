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

// obtainInstruction('steak', 0)

// .then( (step0) => {
//   document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
//   return obtainInstruction('steak', 1); })

// .then( (step1) => { 
//   document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
//   return obtainInstruction('steak', 2); })

// .then( (step2) => { 
//   document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
//   return obtainInstruction('steak', 3); })

//  .then( (step3) => { 
//   document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
//   return obtainInstruction('steak', 4); })

//  .then( (step4) => {
//   document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
//   return obtainInstruction('steak', 5); })

//  .then( (step5) => {
//   document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
//   return obtainInstruction('steak', 6); })

//  .then( (step6) => {
//   document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
//   return obtainInstruction('steak', 7);})

//  .then( (step7) => {
//   document.querySelector("#steak").innerHTML += `<li>${"The steak is ready! "}</li>`})

//   .catch((errorMsg) => console.log(errorMsg))

// Iteration 3 using async/await
// Iteration 3 - using async/await

// Define an async function to make broccoli
async function makeBroccoli() {
  try {
      // Step 0: Gets the first instruction and displays it
      const step0 = await obtainInstruction('broccoli', 0);
      document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
      
      // Step 1: Gets the second instruction and displayz it
      const step1 = await obtainInstruction('broccoli', 1);
      document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
      
      // Step 2: Gets the third instruction and displays it
      const step2 = await obtainInstruction('broccoli', 2);
      document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
      
      // Step 3: Retrieves the fourth instruction and displas it
      const step3 = await obtainInstruction('broccoli', 3);
      document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
      
      // Step 4: Retrieves the fifth instruction and displays it
      const step4 = await obtainInstruction('broccoli', 4);
      document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
      
      // Step 5: Gets the sixth instruction and displays it
      const step5 = await obtainInstruction('broccoli', 5);
      document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
      
      // Step6: Gets the seventh instrction and displays it
      const step6 = await obtainInstruction('broccoli', 6);
      document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
      
      // Step 7 Displays the final message
      document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
      
      // Displays the broccoli image(I was uncertain about including this, given that It was mentioned someone else is responsible for images)
      document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
      // If there is an error this will log it to the console
      console.error('Could not obtain broccoli instructions:', error);
  }
}

// Calling the function to start cooking broccoli
makeBroccoli();


// Bonus 2 - Promise all

// const instruction1 = new Promise((resolve) => setTimeout(resolve, 500, 'wash brussels sprouts'));
// const instruction2 = new Promise((resolve) => setTimeout(resolve, 500, 'cut off base and chop in half'));
// const instruction3 = new Promise((resolve) => setTimeout(resolve, 500, 'toss in bowl with olive oil, balsamic vinegar and salt'));
// const instruction4 = new Promise((resolve) => setTimeout(resolve, 500, 'preheat oven to 500 F'));
// const instruction5 = new Promise((resolve) => setTimeout(resolve, 500, 'coat baking sheet with olive oil'));
// const instruction6 = new Promise((resolve) => setTimeout(resolve, 500, 'roast in the oven for 20 minutes'));
// const instruction7 = new Promise((resolve) => setTimeout(resolve, 500, 'place back in bowl and add salt and pepper'));
// const instruction8 = new Promise((resolve) => setTimeout(resolve, 500, 'enjoy'));


// Promise.all([instruction1, instruction2, instruction3, instruction4, instruction5, instruction6, instruction7, instruction8])
//   .then((result) =>{
//     console.log(result);
//     document.querySelector("#brusselsSprouts").innerHTML += result.map(item => `<li>${item}</li>`).join('');
//   })
//   .catch((error) => {
//     console.error(error);
//   });