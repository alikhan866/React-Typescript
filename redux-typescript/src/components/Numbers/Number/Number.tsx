import React, { useState, useEffect } from "react";
import Response from "../../Response/Response";
import "./Number.css";
import { useSelector, useDispatch } from "react-redux";
import { stateTypes } from "../../../store/reducer";
import { onCorrectGuess } from "../../../store/actions";

type Props = {
  guess: string;
  isActive: boolean;
};

const Number: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const correctGuesses = useSelector(
    (state: stateTypes) => state.correctGuesses
  );
  const [generatedNumber, setGeneratedNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [responseColor, setResponseColor] = useState("");

  useEffect(() => {
    generateRandomNumberHandler();
  }, []);

  const generateRandomNumberHandler = () => {
    const randomNumber = parseInt(
      (Math.random() * 100 * (correctGuesses + 1)).toString()
    );
    setGeneratedNumber(randomNumber);
  };

  const inputChangedHandler = (event: any) => {
    setInputValue(event.target.value);
  };

  const guessHandler = (guessNumber: number, randomNumber: number) => {
    const difference = Math.abs(guessNumber - randomNumber);
    console.log("Random Number" + randomNumber);
    if (difference === 0) {
      //correct
      dispatch(onCorrectGuess());
    }
    if (difference <= 4 && difference !== 0) {
      //hot
      setResponseColor("Hot");
    }
    if (difference <= 15 && difference > 4) {
      //warm
      setResponseColor("Warm");
    }
    if (difference > 15) {
      //cold
      setResponseColor("Cold");
    }
  };
  return (
    <div className="Div">
      <h2>Guess between {props.guess}</h2>
      <input
        className="Input"
        type="number"
        placeholder="Enter your guess"
        value={inputValue}
        onChange={(event) => inputChangedHandler(event)}
      />
      <button
        disabled={props.isActive ? false : true}
        className="Button"
        onClick={() => guessHandler(parseInt(inputValue), generatedNumber)}
      >
        GUESS!
      </button>
      <Response responseColor={props.isActive ? responseColor : "Correct"} />
    </div>
  );
};

export default Number;
