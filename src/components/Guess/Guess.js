import React from 'react';
import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className='guess'>
      {range(0, 5).map((index) => {
        const textValue = value ? value[index].letter : '';
        const className = value ? value[index].status : '';

        return (
          <span className={`cell ${className}`} key={index}>
            {textValue}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
