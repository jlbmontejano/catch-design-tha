import logo from "../assets/github-logo.svg";
import { FOOTER_OPTIONS } from "../lib/constants";

const Footer = () => {
	return (
		<div className='flex gap-2 items-center justify-center bg-gray-900 text-gray-400 py-4'>
			<img src={logo} className='size-8' alt='github-logo' />
			<p>© 2026 GitHub, Inc.</p>
			{FOOTER_OPTIONS.map(option => (
				<a className=''>{option.name}</a>
			))}
		</div>
	);
};

export default Footer;
