import { Fragment } from 'react';

const processString = require('react-process-string');

// Source: https://www.npmjs.com/package/react-process-string
const config = [{
  regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |\,|$|\.)/gim,
  fn: (key, result) => (
    <Fragment key={key}>
      <a target="_blank" href={`${result[1]}://${result[2]}.${result[3]}${result[4]}`}>
        {result[1]}://{result[2]}.{result[3]}{result[4]}
      </a>
      {result[5]}
    </Fragment>
  ),
}];

export const ProcessedText = ({ text }) => processString(config)(text);
