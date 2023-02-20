import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ guesses }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
        return (
          <Guess
            key={rowIndex}
            value={guesses.length > rowIndex ? guesses[rowIndex] : undefined}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;
