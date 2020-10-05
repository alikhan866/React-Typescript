import * as actionTypes from "./actions";

const initialState = {
  correctGuesses: 0,
};

type Action = {
  type: string;
};

export type stateTypes = {
    correctGuesses:number
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.COUNT_OF_CORRECT_GUESSES:
      return {
        ...state,
        correctGuesses: state.correctGuesses + 1,
      };
    default:
      return state;
  }
};

export default reducer;
