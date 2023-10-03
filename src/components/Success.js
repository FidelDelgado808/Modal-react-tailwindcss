import { useState } from 'react';
import App from '../App';
import Modal from './Modal';

export default function Success({ userData, closeModal }) {
	return (
		<div className="h-fit items-center flex justify-center relative">
			<App closeModal={closeModal} />
			<a onClick={closeModal} className="absolute top-5 right-5 text-xl">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6 hover:cursor-pointer"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</a>

			<div className="bg-white rounded-lg  font-latoRegular text-gray-700 p-16">
				<div className="text-3xl pb-4 font-latoBold">
					Thanks for the email {userData && userData?.navn && userData?.navn}✨
				</div>
				<div className="text-lg  text-gray-500">
					We have sent you an email over at
					{userData && userData?.email && userData?.email}. Thank you for
					subscribing to our newsletter.
				</div>
			</div>
		</div>
	);
}
