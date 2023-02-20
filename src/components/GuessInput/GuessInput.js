import React from 'react';

function GuessInput({ handleGuessAdded, gameState }) {
  const [value, setValue] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(e) => {
        e.preventDefault();
        handleGuessAdded(value);
        setValue('');
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        name='guess-input'
        value={value}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
        maxLength={5}
        pattern='.{5}'
        title='5 letter word'
        disabled={gameState !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
