import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Introduction from "./sections/Introduction";
import Repositories from "./sections/Repositories";
import UserInformation from "./sections/UserInformation";

function App() {
	return (
		<>
			<Header />
			<main className='flex flex-col gap-4 bg-gray-900 text-white py-4 px-12'>
				<UserInformation />
				<Introduction />
				<Repositories />
			</main>
			<Footer />
		</>
	);
}

export default App;
