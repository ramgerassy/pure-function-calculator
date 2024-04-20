const firstNumber: HTMLInputElement | null =
   document.querySelector("#first-number");
const secondNumber: HTMLInputElement | null =
   document.querySelector("#second-number");
const addition = document.querySelector("button.plus");
const substruction = document.querySelector("button.minus");
const multiply = document.querySelector("button.multiply");
const division = document.querySelector("button.divide");
const result = document.querySelector("#calculation-result");

if (!addition) {
   console.log("no adddition button");
} else if (!substruction) {
   console.log("no substruction button");
} else if (!multiply) {
   console.log("no multiply button");
} else if (!division) {
   console.log("no division button");
} else if (!result) {
   console.log("no result area");
} else if (!firstNumber) {
   console.log("no first number input");
} else if (!secondNumber) {
   console.log("no first second input");
} else {
   addition.addEventListener("click", () => {
      result.innerHTML = calcFunction(
         pureAddition,
         firstNumber.value,
         secondNumber.value
      );
   });
   substruction.addEventListener("click", () => {
      result.innerHTML = calcFunction(
         pureSubstruction,
         firstNumber.value,
         secondNumber.value
      );
   });
   multiply.addEventListener("click", () => {
      result.innerHTML = calcFunction(
         pureMultiply,
         firstNumber.value,
         secondNumber.value
      );
   });
   division.addEventListener("click", () => {
      result.innerHTML = calcFunction(
         puredivision,
         firstNumber.value,
         secondNumber.value
      );
   });

   function calcFunction(
      callback: Function,
      num1: string,
      num2: string
   ): string {
      if (typeof Number(num1) !== "number" || num1 === "") {
         alert("please enter a valid first number");
         firstNumber.value = "0";
         return "Not Valid";
      }
      if (typeof Number(num2) !== "number" || num2 === "") {
         alert("please enter a valid second number");
         secondNumber.value = "0";
         return "Not Valid";
      }
      return (callback(Number(num1), Number(num2)) as number).toFixed(2) + "";
   }

   function pureAddition(firstNum: number, secondNum: number): number {
      return firstNum + secondNum;
   }

   function pureSubstruction(firstNum: number, secondNum: number): number {
      return firstNum - secondNum;
   }

   function pureMultiply(firstNum: number, secondNum: number): number {
      return firstNum * secondNum;
   }

   function puredivision(firstNum: number, secondNum: number): number {
      return firstNum / secondNum;
   }
}
