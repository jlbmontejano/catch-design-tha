type TabProps = {
	text: string;
	color?: "gray-400" | "green-300" | "pink-500";
};

const Tab = ({ text, color = "gray-400" }: TabProps) => {
	const colorMap = {
		"gray-400": "text-gray-400 border-gray-400",
		"green-300": "text-green-300 border-green-300",
		"pink-500": "text-pink-500 border-pink-500",
	};

	return (
		<div>
			<div className={`rounded-full border-2 px-1.5 ${colorMap[color]}`}>
				<p className='text-xs capitalize'>{text}</p>
			</div>
		</div>
	);
};

export default Tab;
