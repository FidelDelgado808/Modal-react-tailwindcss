import { useState} from 'react';

export default function Success({ userData }) {


	return (
		<div className=" h-fit items-center flex justify-center relative">
			<div className="bg-white w-fit rounded-lg w-1/3 font-latoRegular text-gray-700 p-16">
				<div className="text-3xl pb-4 font-latoBold">
					Thanks for the email {userData && userData?.navn && userData?.navn}✨
				</div>
				<div className="text-lg  text-gray-500">
					We have sent you an email over at{' '}
					{userData && userData?.email && userData?.email}. We will get back to
					you as soon as we can!
				</div>
			</div>
		</div>
	);
}
