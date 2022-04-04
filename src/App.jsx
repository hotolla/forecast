import { useState } from "react";
import style from "./App.module.css"; //почему назвали style
import { Weather } from "./components/Weather/Weather";

function App() {
  return (
    <div className={style.App}>
      <Weather />
    </div>
  );
}

export default App;

// const createState2 = (initialState) => {
//   let state = initialState;
//   const setState = (newState) => {
//     state = newState;
//   };

//   return [state, setState];
// };

// const [isMarried, setIsMarried] = createState2(false);

// console.log(isMarried);

// setIsMarried(true);
