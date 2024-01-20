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
				<StyledBackNumbers>{formValues.cvc || '000'}</StyledBackNumbers>
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
						{formValues.month || '00'}
						<span>/</span>
						{formValues.year || '00'}
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
