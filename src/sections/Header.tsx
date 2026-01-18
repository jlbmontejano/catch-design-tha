import { HEADER_OPTIONS } from "../lib/constants";
import logo from "../assets/github-logo.svg";

const Header = () => {
	return (
		<header className='bg-gray-700 p-4 items-center justify-between flex'>
			<div className='flex items-center gap-2'>
				<img src={logo} className='size-12' alt='github-logo' />
				{HEADER_OPTIONS.map(option => (
					<button
						className='p-2 text-white'
						type='button'
						aria-label={option.name}>
						{option.name}
					</button>
				))}
			</div>
		</header>
	);
};

export default Header;
