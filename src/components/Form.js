import { useForm } from 'react-hook-form';
import { Routes, Route, useNavigate } from 'react-router-dom';

export default function Form() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		navigate('/success');
	};

	console.log(watch('navn')); // watch input value by passing the name of it

	return (
		<div className="mb-4">
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Navn"
					{...register('navn')}
				/>

				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					{...register('email', { required: true })}
					placeholder="E-mail"
					type="email"
				/>

				{errors.email && <span>Du mangler at udfylde et felt. </span>}

				<input
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
				focus:outline-none focus:shadow-outline"
					type="submit"
					autoComplete="on"
				/>
			</form>
		</div>
	);
}
