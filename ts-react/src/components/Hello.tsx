import * as React from 'react';
import './Hello.css';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 0 }: IProps) {
  if (enthusiasmLevel < 0) {
    throw new Error('You could be a little more enthusiastic. :P');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello, {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button>Push Me</button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  if (numChars === 0) {
    return '.';
  }
  return Array(numChars + 1).join('!');
}