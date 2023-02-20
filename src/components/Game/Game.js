import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('running');

  const handleGuessAdded = (newGuess) => {
    const checkedGuess = checkGuess(newGuess, answer);
    setGuesses((prevGuesses) => [...prevGuesses, checkedGuess]);

    if (checkedGuess.every((letter) => letter.status === 'correct')) {
      setGameState('win');
      return;
    }

    if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      setGameState('lose');
      return;
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput gameState={gameState} handleGuessAdded={handleGuessAdded} />
      <GameOverBanner
        numOfGuesses={guesses.length}
        answer={answer}
        gameState={gameState}
      />
    </>
  );
}

export default Game;
