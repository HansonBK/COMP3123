let add = (a,b) => a + b;

let multiply = (a,b) => a * b;

let calcultator =(num1, num2,operation) => {
    const ans = operation(num1, num2);
    return ans;
}



console.log(calcultator(5,6,add));

console.log(calcultator(5,6,multiply));


//setInterval(() => {
  //  console.log(new Date().toLocaleTimeString());
//}, 1000);

//setInterval(() => {
  //  console.log("this is second interval");
//}, 2000);

