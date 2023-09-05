import { useForm } from "react-hook-form";



	return (
		<div className="mb-4">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white rounded px-8 pt-6 pb-8 mb-4"
			>
				<input
					type="text"
					class="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					{...register('navn', {
						required: 'This is required',
						minLength: { value: 2, message: 'Min lenght is 2.' },
					})}
					placeholder="Navn"
				/>

				<input
					type="text"
					className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 focus:outline-none focus:shadow-outline"
					{...register('mail', {
						required: 'This is required',
					})}
					placeholder="Mail"
				/>
			</form>
		</div>
	);