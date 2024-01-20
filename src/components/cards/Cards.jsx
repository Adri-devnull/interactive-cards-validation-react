import {
	StyledBackNumbers,
	StyledCardsContainer,
	StyledFrontExpiration,
	StyledFrontName,
	StyledFrontNumbers,
	StyledPrimaryCard,
	StyledSecondaryCard,
	StyledVisa
} from './styles';

const Cards = ({ formValues }) => {
	return (
		<StyledCardsContainer>
			<StyledSecondaryCard>
				<StyledBackNumbers>000</StyledBackNumbers>
			</StyledSecondaryCard>
			<StyledPrimaryCard>
				<StyledVisa>
					<img src='assets/images/visa-letter.png' alt='' />
				</StyledVisa>
				<StyledFrontNumbers>
					{formatCreditNumber(formValues.number) || '0000 0000 0000 0000'}
				</StyledFrontNumbers>
				<div>
					<StyledFrontName>
						{formValues.name || 'JANE APPLESEED'}
					</StyledFrontName>
					<StyledFrontExpiration>
						<span>00</span>
						<span>/</span>
						<span>00</span>
					</StyledFrontExpiration>
				</div>
			</StyledPrimaryCard>
		</StyledCardsContainer>
	);
};

const formatCreditNumber = creditCardNumber => {
	if (!creditCardNumber) return;
	return creditCardNumber.match(/.{1,4}/g).join(' ');
};

export default Cards;
