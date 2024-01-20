import {
	StyledButton,
	StyledContainersInput,
	StyledContainersLabels,
	StyledContainersNameNumber,
	StyledErrorSpan,
	StyledForm,
	StyledInputMonth,
	StyledInputs
} from './styles';
import { FORM_VALIDATIONS } from '../../constants/validations';

const Form = ({ handleSubmit, register, errors }) => {
	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<StyledContainersInput>
				<label htmlFor='name'>CARDHOLDER NAME</label>
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
				<label htmlFor='number'>CARD NUMBER</label>
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
				<label htmlFor='month'>EXP.DATE(MM/YY)</label>
				<label htmlFor='cvc'>CVC</label>
			</StyledContainersNameNumber>
			<StyledContainersLabels>
				<StyledInputMonth
					type='text'
					id='month'
					maxLength={2}
					{...register('month', FORM_VALIDATIONS.MONTH)}
				/>
				{errors && errors.month && (
					<StyledErrorSpan>{errors.month.message}</StyledErrorSpan>
				)}
				<StyledInputMonth
					type='text'
					id='year'
					maxLength={2}
					{...register('year', FORM_VALIDATIONS.YEAR)}
				/>
				{errors && errors.year && (
					<StyledErrorSpan>{errors.year.message}</StyledErrorSpan>
				)}
				<StyledInputs
					type='text'
					id='cvc'
					maxLength={3}
					{...register('cvc', FORM_VALIDATIONS.CVC)}
				/>
				{errors && errors.cvc && (
					<StyledErrorSpan>{errors.cvc.message}</StyledErrorSpan>
				)}
			</StyledContainersLabels>
			<StyledButton>Confirm</StyledButton>
		</StyledForm>
	);
};

const onSubmit = data => {
	console.log(data);
};

export default Form;
