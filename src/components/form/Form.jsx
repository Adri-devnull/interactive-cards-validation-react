import {
	StyledButton,
	StyledContainersInput,
	StyledContainersLabels,
	StyledContainersNameNumber,
	StyledErrorContainer,
	StyledErrorSpan,
	StyledForm,
	StyledInputMonth,
	StyledInputs,
	StyledTextsLabel
} from './styles';
import { FORM_VALIDATIONS } from '../../constants/validations';

const Form = ({ handleSubmit, register, errors }) => {
	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<StyledContainersInput>
				<StyledTextsLabel htmlFor='name'>CARDHOLDER NAME</StyledTextsLabel>
				<StyledInputs
					type='text'
					id='name'
					{...register('name', FORM_VALIDATIONS.NAME)}
				/>
				{errors && errors.name && (
					<StyledErrorSpan>{errors.name.message}</StyledErrorSpan>
				)}
				{/* {<span>{errors?.name?.message}</span>} */}
			</StyledContainersInput>
			<StyledContainersInput>
				<StyledTextsLabel htmlFor='number'>CARD NUMBER</StyledTextsLabel>
				<StyledInputs
					type='text'
					id='number'
					maxLength={16}
					{...register('number', FORM_VALIDATIONS.NUMBER)}
				/>
				{errors && errors.number && (
					<StyledErrorSpan>{errors.number.message}</StyledErrorSpan>
				)}
			</StyledContainersInput>
			<StyledContainersNameNumber>
				<StyledTextsLabel htmlFor='month'>EXP.DATE(MM/YY)</StyledTextsLabel>
				<StyledTextsLabel htmlFor='cvc'>CVC</StyledTextsLabel>
			</StyledContainersNameNumber>
			<StyledContainersLabels>
				<StyledErrorContainer>
					<StyledInputMonth
						type='text'
						id='month'
						maxLength={2}
						{...register('month', FORM_VALIDATIONS.MONTH)}
					/>
					{errors && errors.month && (
						<StyledErrorSpan>{errors.month.message}</StyledErrorSpan>
					)}
				</StyledErrorContainer>
				<StyledErrorContainer>
					<StyledInputMonth
						type='text'
						id='year'
						maxLength={2}
						{...register('year', FORM_VALIDATIONS.YEAR)}
					/>
					{errors && errors.year && (
						<StyledErrorSpan>{errors.year.message}</StyledErrorSpan>
					)}
				</StyledErrorContainer>
				<StyledErrorContainer>
					<StyledInputs
						type='text'
						id='cvc'
						maxLength={3}
						{...register('cvc', FORM_VALIDATIONS.CVC)}
					/>
					{errors && errors.cvc && (
						<StyledErrorSpan>{errors.cvc.message}</StyledErrorSpan>
					)}
				</StyledErrorContainer>
			</StyledContainersLabels>
			<StyledButton>Confirm</StyledButton>
		</StyledForm>
	);
};

const onSubmit = data => {
	console.log(data);
};

export default Form;
