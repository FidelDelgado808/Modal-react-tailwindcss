function Button({ text, handleClick }) {
	return (
		<>
			<button
				onClick={handleClick}
				className="bg-orange-400 text-white
      text-lg px-2 py-1 my-6 rounded-md"
			>
				{text}
			</button>
		</>
	);
}

export default Button;
