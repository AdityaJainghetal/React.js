import { useState, createContext } from "react";
import Cybrom from "./Cybrom";


const myContext = createContext();

const App = () => {
  const [user, setUser] = useState("Aditya");

  return (
    <myContext.Provider value={{ user, setUser }}>
      <>
        <h1>Welcome to my app, my name is: {user}</h1>
        <button onClick={() => setUser("Jain")}>Click here</button>
        <Cybrom />
      </>
    </myContext.Provider>
  );
}

export default App;
export { myContext };
