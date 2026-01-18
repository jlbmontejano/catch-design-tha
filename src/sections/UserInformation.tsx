// Hardcoded information for simplicity
import { CiLocationOn } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import profilePicture from "../assets/github-pfp.png";
import Tab from "../shared/Tab";

const UserInformation = () => {
	return (
		<div className='flex gap-2'>
			<img src={profilePicture} />
			<div className='flex flex-col gap-2 justify-center'>
				<p className='text-xl font-semibold'>GitHub</p>
				<p>How people build software</p>
				<div className='flex gap-4'>
					<Tab text='Verified' color='green-300' />
					<Tab text='Sponsor' color='pink-500' />
				</div>
				<div className='flex gap-4'>
					<div className='flex items-center gap-1'>
						<IoPeopleOutline aria-hidden={true} />
						<span>66.6k followers</span>
					</div>
					<div className='flex items-center gap-1'>
						<CiLocationOn aria-hidden={true} />
						<span>San Francisco, CA</span>
					</div>
					<div className='flex items-center gap-1'>
						<FaLink aria-hidden={true} />
						<span>https://github.com/about</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserInformation;
