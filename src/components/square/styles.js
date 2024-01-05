import styled from 'styled-components';

export const StyledSquare = styled.div`
	width: 200px;
	height: 200px;
	background-color: ${({ color }) => color};
`;
