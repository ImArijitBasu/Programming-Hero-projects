import { createContext } from "react";
import One from "../One";
import Three from "../Three";
import Two from "../Two";
import "./Main.css";
export const myContext = createContext('');
const Main = () => {
  const style = {
    backgroundColor: "green",
  };
  return (
    <div className="Main">
      <h1>Main component</h1>
      <myContext.Provider value={style}>
        <div className="flex">
          <One></One>
          <Two></Two>
          <Three></Three>
        </div>
      </myContext.Provider>
    </div>
  );
};

export default Main;
