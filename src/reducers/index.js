import * as actions from '../actions';

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const initialState = {
  guesses: [],
  feedback: '',
  correctAnswer: getRandomNumber(),
  showInfoModal: false
};

export const hotColdReducer = (state=initialState, action) => {
  if(action.type === actions.GUESS_NUMBER){
    return Object.assign({}, state, {
      guesses: [...state.gusses, action.number],
      feedback: action.feedback
    });
  }

  else if (action.type === actions.NEW_GAME){
    return Object.assign({}, initialState, {
      correctAnswer: getRandomNumber()
    });
  }

  else if (action.type === actions.TOGGLE_MODAL){
    return Object.assign({}, state, {
      showInfoModal: !state.showInfoModal
    });
  }
  return state;
};

