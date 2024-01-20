import styled from 'styled-components';

const StyledCardsContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 150px;
`;

const StyledSecondaryCard = styled.div`
	width: 330px;
	height: 200px;
	background-image: url('assets/images/bg-card-back.png');
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	position: relative;
`;

const StyledBackNumbers = styled.span`
	position: absolute;
	color: #fff;
	font-weight: 100;
	font-size: 1.1em;
	top: 88px;
	left: 245px;
`;

const StyledPrimaryCard = styled.div`
	width: 330px;
	height: 200px;
	background-image: url('assets/images/bg-card-front.png');
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	position: absolute;
	top: 125px;
	right: 10px;
	padding: 5px;
`;

const StyledFrontNumbers = styled.span`
	position: absolute;
	color: #fff;
	font-weight: 100;
	font-size: 1.2em;
	letter-spacing: 0.15em;
	top: 120px;
	left: 20px;
`;

const StyledFrontName = styled.span`
	position: absolute;
	font-size: 13px;
	color: #fff;
	font-weight: 500;
	letter-spacing: 1.2px;
	text-transform: uppercase;
	top: 160px;
	left: 20px;
`;

const StyledFrontExpiration = styled.div`
	position: absolute;
	font-size: 13px;
	color: #fff;
	font-weight: 500;
	letter-spacing: 1.2px;
	top: 160px;
	left: 260px;
`;

const StyledVisa = styled.div`
	height: 60px;
	width: 60px;
	position: absolute;
	top: 20px;
	left: 10px;
`;

export {
	StyledCardsContainer,
	StyledSecondaryCard,
	StyledBackNumbers,
	StyledPrimaryCard,
	StyledFrontNumbers,
	StyledFrontName,
	StyledFrontExpiration,
	StyledVisa
};
