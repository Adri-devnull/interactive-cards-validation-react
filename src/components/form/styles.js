import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding-bottom: 30px;
	width: 100%;
`;

const StyledContainersInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 13px;
`;

const StyledInputs = styled.input`
	border: none;
	border: 1px solid #4b0082;
	border-radius: 10px;
	height: 30px;
	outline: none;
	width: 100%;
`;

const StyledContainersNameNumber = styled.div`
	display: flex;
	width: 100%;
	font-size: 0.8em;
	gap: 15px;
`;

const StyledContainersLabels = styled.div`
	display: flex;
	width: 100%;
	gap: 5px;
	padding-bottom: 20px;
`;

const StyledInputMonth = styled.input`
	width: 43px;
	height: 30px;
	border-radius: 10px;
	border: none;
	border: 1px solid #4b0082;
	outline: none;
`;

const StyledButton = styled.button`
	width: 100%;
	background-color: #21092f;
	border: none;
	color: #fff;
	height: 45px;
	border-radius: 8px;
	font-size: 1.1em;
`;

const StyledErrorSpan = styled.span`
	color: red;
`;

export {
	StyledForm,
	StyledContainersInput,
	StyledContainersLabels,
	StyledContainersNameNumber,
	StyledInputMonth,
	StyledInputs,
	StyledButton,
	StyledErrorSpan
};
