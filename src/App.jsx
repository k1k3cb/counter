import { useState } from 'react';
import Button from './components/button/Button';
import Square from './components/square/Square';

const App = () => {
	const [counter, setCounter] = useState(0);
	const [color, setColor] = useState('red');

	return (
		<>
			<h1>{counter}</h1>

			<Button
				text={'+1'}
				onClickFunction={() => handleClickAdd(counter, setCounter)}
			/>
			<Button
				text={'Reset'}
				onClickFunction={() => handleClickReset(setCounter)}
			/>
			<Button
				text={'-1'}
				onClickFunction={() => handleClickSubtract(counter, setCounter)}
			/>

			<Square color={color} action={() => handleClickColor( setColor)} />
		</>
	);
};

const handleClickAdd = (counter, setCounter) => {
	setCounter(counter + 1);
};
const handleClickReset = setCounter => {
	setCounter(0);
};

const handleClickSubtract = (counter, setCounter) => {
	setCounter(counter - 1);
};

const handleClickColor = (setColor) => {
	setColor('blue');
	console.log('blue')

};

export default App;
