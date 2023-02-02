// import { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState(0);

//   return (
//     <div>
//       {value}
//       <button type="button" onClick={() => setValue(value + 1)}>
//         Increment value by 1
//       </button>
//     </div>
//   );
// };

// ________________________________________________

import { useState, useEffect } from "react";

// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${value} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {value} times</p>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </div>
//   );
// };

// __________________________________________________

// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("Mouting phase: same when componentDidMount runs");
//   }, [value]);

//   return <button onClick={() => setValue(value + 1)}>{value}</button>;
// };

// _________________________________________________

const App = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  useEffect(() => {
    console.log(firstValue + secondValue);
  }, [firstValue, secondValue]);

  return (
    <>
      <button onClick={() => setFirstValue(firstValue + 1)}>
        First: {firstValue}
      </button>
      <button onClick={() => setSecondValue(firstValue + 1)}>
        Second: {secondValue}
      </button>
    </>
  );
};

export default App;
