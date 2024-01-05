import Button from '../button/Button';
import { StyledSquare } from './styles';

const Square = ({ color, action }) => {
	return (
		<>
			<StyledSquare color={color}></StyledSquare>
			<Button text='cambiar color' onClickFunction={action} />
		</>
	);
};

export default Square;
