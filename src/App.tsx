import Highlight from './components/Highlight';
import Navbar from './components/Navbar';
import Qualities from './components/Qualities';
import ReturnButton from './components/ReturnButton';
import Reviews from './components/Reviews';

export default function App() {
	return (
		<>
			<Navbar />
			<main className='relative h-screen '>
				<ReturnButton />
				<Highlight />
				<Qualities />
				<Reviews />
			</main>
		</>
	);
}
