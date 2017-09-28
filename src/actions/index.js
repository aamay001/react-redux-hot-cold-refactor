export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = (number, feedback) => ({
  type: GUESS_NUMBER,
  number,
  feedback
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME
});

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleInfoModal = () => ({
  type: TOGGLE_MODAL
})