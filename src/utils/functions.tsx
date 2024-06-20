import { evaluate } from "mathjs";

// Calculates result when equals key pressed

export const calculate = (expression: string): string => {
  const result = evaluate(expression).toString();
  return result;
};

// Click handled with logic for calculator keys

export const onKeyPress = () => {
  return "foo";
};

// export const onKeyPress = (keyValue: number | string, display: string, expression:string) => {
//   const hasDecimal = /\.+/;
//   let justClickedOperator = false;
//   let justClickedEquals = false;
//   if (typeof keyValue === "number") {
//     if (keyValue === 0 && !display) {
//       return;
//     } else if (justClickedEquals === true) {
//       // Issue here: doesn't work with decimals. Need to set expression from display, but doesn't work. Maybe need to refactor as a async function to await the change of state to display?
//       setDisplay(keyValue.toString());
//       expression = `${keyValue.toString()}`;
//       justClickedEquals = false;
//       // Test
//       console.log("Line 34 ran. Expression is now " + expression);
//       //
//       return;
//     } else if (justClickedOperator === true) {
//       setDisplay(keyValue.toString());
//       expression = `${expression} ${keyValue.toString()}`;
//       justClickedOperator = false;
//       // Test
//       console.log("Line 31 ran. Expression is now " + expression);
//       //
//       return;
//     } else {
//       setDisplay((display += keyValue.toString()));
//       expression = `${expression}${keyValue.toString()}`;
//       justClickedOperator = false;
//       // Test
//       console.log("Line 39 ran. Expression is now " + expression);
//       //
//       return;
//     }
//   } else {
//     switch (keyValue) {
//       case "DEL":
//         setDisplay(display.slice(0, -1));
//         break;
//       case "RESET":
//         expression = "";
//         setDisplay("");
//         break;
//       case ".":
//         if (!display || justClickedEquals === true) {
//           setDisplay("0" + keyValue.toString());
//           break;
//         } else if (hasDecimal.test(display)) {
//           break;
//         } else {
//           setDisplay((display += keyValue.toString()));
//           break;
//         }
//       case "+":
//       case "-":
//       case "/":
//       case "x":
//         if (keyValue === "x") {
//           keyValue = "*";
//         }
//         if (display === "") {
//           break;
//         } else if (justClickedOperator === false) {
//           justClickedOperator = true;
//           setDisplay(calculate(expression));
//           expression = `${expression} ${keyValue}`;
//           // Test
//           console.log("Line 72 ran. Expression is now " + expression);
//           //
//           break;
//         } else {
//           justClickedOperator = true;
//           setDisplay(calculate(expression));
//           expression = `${expression} ${keyValue}`;
//           // Test
//           console.log("Line 82 ran. Expression is now " + expression);
//           //
//           break;
//         }
//       case "=": // This got messed up somehow
//         justClickedEquals = true;
//         console.log("Line 92 ran. Calculated expression was: " + expression);
//         setDisplay(calculate(expression));
//         expression = calculate(expression);
//         console.log(
//           "Line 95 ran. Expression after calculation was: " + expression
//         );
//         break;
//     }
//   }
// };
