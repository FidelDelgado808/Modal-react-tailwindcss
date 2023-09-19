import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Flex({ handleSubmitData }) {
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
		<div className="md:flex space-x-4 flex-row">
			<div>
				<img
					src="https://s2.qwant.com/thumbr/700x0/f/e/ce190e7d24f10478eb6f9d867034934af36688d3f29314fb58baa27ec3339e/Facebook_-How-To-Save-Money_-100-Tips-To-Save-Money-Fast.png?u=https%3A%2F%2Fwww.thewaystowealth.com%2Fwp-content%2Fuploads%2F2017%2F03%2FFacebook_-How-To-Save-Money_-100-Tips-To-Save-Money-Fast.png&q=0&b=1&p=0&a=0"
					className=" w-80
						rounded-md"
					alt="..."
				/>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="py-2 mb-2">
					<input
						defaultValue={localFormData?.navn}
						className="border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight"
						placeholder="Navn"
						{...register('navn')}
					/>
					<div>
						<input
							defaultValue={localFormData?.email}
							className="border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight"
							{...register('email', { required: true })}
							placeholder="E-mail"
							type="email"
						/>

						{errors.email && (
							<span className="flex py-2 px-4">
								Du mangler at udfylde et felt.
							</span>
						)}
					</div>
					{/* Button */}
				</div>
				<div className="mb-5">
					<input
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
				focus:outline-none focus:shadow-outline"
						type="submit"
						autoComplete="on"
						value={'Submit'}
					/>
				</div>
			</form>
		</div>
	);
}
// Done