import styled from 'styled-components';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	padding: 50px;
	background-image: url('assets/images/bg-main-mobile.png');
	background-repeat: no-repeat;
	background-size: cover;
	height: 175px;

	@media screen and (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-evenly;
		background-size: 30% 100%; /* Ancho del fondo al 50% y altura automática */
		background-position: left top; /* Fondo comienza desde la izquierda */
		height: 100vh;
		padding: 0px;
		align-items: center;
	}
`;

export { StyledMain };
