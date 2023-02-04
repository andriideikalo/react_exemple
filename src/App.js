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

// import { useState, useEffect } from "react";

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

// const App = () => {
//   const [firstValue, setFirstValue] = useState(0);
//   const [secondValue, setSecondValue] = useState(0);
//   useEffect(() => {
//     console.log(firstValue + secondValue);
//   }, [firstValue, secondValue]);

//   return (
//     <>
//       <button onClick={() => setFirstValue(firstValue + 1)}>
//         First: {firstValue}
//       </button>
//       <button onClick={() => setSecondValue(firstValue + 1)}>
//         Second: {secondValue}
//       </button>
//     </>
//   );
// };

// _________________________________________________

// import { createContext, useContext, useState } from "react";

// const UserContext = createContext();

// export const useUser = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState(null);

//   const logIn = () => {
//     setIsLoggedIn(true);
//     setUsername("Mango");
//   };

//   const logOut = () => {
//     setIsLoggedIn(false);
//     setUsername(null);
//   };

//   return (
//     <UserContext.Provider value={{ isLoggedIn, username, logIn, logOut }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const UserMenu = () => {
//   const { isLoggedIn, username, logIn, logOut } = useUser();

//   return (
//     <div>
//       {isLoggedIn && <p>{username}</p>}
//       {isLoggedIn ? (
//         <button onClick={logOut}>Log out</button>
//       ) : (
//         <button onClick={logIn}>Log in</button>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <UserMenu />
//     </div>
//   );
// };

// video player_____________________________________

// import { useRef } from "react";

// const Player = ({ source }) => {
//   const playerRef = useRef();
//   const play = () => playerRef.current.play();
//   const pause = () => playerRef.current.pause();

//   return (
//     <div>
//       <video ref={playerRef} src={source}>
//         Sorry, your browser does not support embedded videos.
//       </video>
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// };

// ___________________________________
import { useState } from "react";
const App = ({ someProp }) => {
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(0);

  const filteredPlanets = planets.filter((planet) => planet.includes(query));

  return (
    <div>
      <div>Some prop: {someProp}</div>
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <div>
        {filteredPlanets.map((planet) => (
          <div key={planet}>{planet}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
