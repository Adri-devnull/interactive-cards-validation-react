const messages = {
	name: {
		required: 'The name is required',
		wrong: "The name isn't valid"
	},

	creditCardNumber: {
		required: 'The number is required',
		wrong: "The creditcard number isn't valid"
	},
	monthCardNumber: {
		required: "Can't be blank"
	},
	yearCardNumber: {
		required: "Can't be blank"
	},
	cvcCardNumber: {
		required: "Can't be blank"
	}
};

const patterns = {
	onlyLetters: /^[a-z]+$/,
	creditCardNumber: /^[0-9]{16}$/
};

const nameValidation = {
	required: messages.name.required,
	pattern: {
		value: patterns.onlyLetters,
		message: messages.name.wrong
	}
};

const creditCardValidation = {
	required: messages.creditCardNumber.required,
	pattern: {
		value: patterns.creditCardNumber,
		message: messages.creditCardNumber.wrong
	}
};

const monthCardNumberValidation = {
	required: messages.monthCardNumber.required
};

const yearCardNumberValidation = {
	required: messages.yearCardNumber.required
};

const cvcCardNumberValidation = {
	required: messages.cvcCardNumber.required
};

export const FORM_VALIDATIONS = {
	NAME: nameValidation,
	NUMBER: creditCardValidation,
	MONTH: monthCardNumberValidation,
	YEAR: yearCardNumberValidation,
	CVC: cvcCardNumberValidation
};
