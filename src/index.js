import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`Seriosly I wouldn't ever pay ${courseValue} for this course ever!`); //eslint-disable-line no-console