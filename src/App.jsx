import { useForm } from 'react-hook-form';
import Cards from './components/cards/Cards';
import Form from './components/form/Form';
import Main from './components/main/Main';

const App = () => {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	});
	const formValues = watch();
	return (
		<Main>
			<Cards formValues={formValues} />
			<Form handleSubmit={handleSubmit} register={register} errors={errors} />
		</Main>
	);
};

export default App;
