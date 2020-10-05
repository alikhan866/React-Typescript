import React from "react";
import Number from "./Number/Number";
import { useSelector } from "react-redux";
import { stateTypes } from "../../store/reducer";
let number:any;
const Numbers = () => {
  const correctGuesses = useSelector(
    (state: stateTypes) => state.correctGuesses
  );
 
  if (correctGuesses === 0) {
    number = [<Number guess={`1-100`} key={Math.random()} isActive={true} />];
  } else if (correctGuesses > 0) {
    number = [<Number guess={`1-100`} key={Math.random()} isActive={false} />];
  }

  for (let i = 0; i < correctGuesses; i++) {
    if (i === correctGuesses - 1)
      number.push(<Number guess={`1-${i + 2}00`} key={i} isActive={true} />);
    else
      number.push(<Number guess={`1-${i + 2}00`} key={i} isActive={false} />);
  }

  return <React.Fragment>{number}</React.Fragment>;
};

export default Numbers;
