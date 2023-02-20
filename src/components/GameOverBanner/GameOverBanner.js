import React from 'react';

function GameOverBanner({ numOfGuesses, answer, gameState }) {
  console.log(gameState);
  if (gameState === 'win') {
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{`${numOfGuesses} guess${
            numOfGuesses > 1 ? 'es' : ''
          }`}</strong>
          .
        </p>
      </div>
    );
  } else if (gameState === 'lose') {
    return (
      <div className='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return null;
}

export default GameOverBanner;
