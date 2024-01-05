import { useState } from 'react';
import Button from './components/button/Button';

const App = () => {
	const [counter, setCounter] = useState(0);

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

export default App;
