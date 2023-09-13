import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function TravelForm({ handleSubmitData }) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		handleSubmitData(true, { navn: data?.navn, email: data?.email });
		localStorage.removeItem('newsLetterFormData');
	};

	watch(
		(['navn', 'email'],
		(formData) => {
			console.log(formData);
			localStorage.setItem('newsLetterFormData', JSON.stringify(formData));
		})
	);

	const getLocalStorageFormData = () => {
		const savedData = localStorage.getItem('newsLetterFormData');
		const formDataObject = JSON.parse(savedData);
		return formDataObject;
	};
	const localFormData = getLocalStorageFormData();










	return (
		<div className="md:w-full mb-8 relative">
			<img
				className="w-full h-full object-cover "
			src='https://media.istockphoto.com/id/486849516/photo/out-of-office.webp?s=2048x2048&w=is&k=20&c=BxrcB14M3x8iV9x3G86q7ssyFdAN4vVSxii6I4_1RRo='/>

			<div className="mb-8 absolute bottom-0 px-4 py-3 w-full">
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						defaultValue={localFormData?.navn}
						className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Navn"
						{...register('navn')}
					/>

					<input
						defaultValue={localFormData?.email}
						className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						{...register('email', { required: true })}
						placeholder="E-mail"
						type="email"
					/>

					{errors.email && (
						<span className="flex py-2 px-4">
							Du mangler at udfylde et felt.
						</span>
					)}

					{/* Button */}

					<input
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
					focus:outline-none focus:shadow-outline"
						type="submit"
						autoComplete="on"
						value={'Submit'}
					/>
				</form>
			</div>
		</div>
	);
}