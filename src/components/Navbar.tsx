export default function Navbar() {
	const viewportWith = window.innerWidth;

	return (
		<nav className='flex flex-col text-pinkish font-bold font-Space-Grotesk tracking-wider'>
			<div className='h-16 mx-auto '>
				<img
					src='./Logo.png'
					alt='A pink fish logo'
					className='h-full mx-auto block'
				/>
				<p className='uppercase text-xl'>Simple Products</p>
			</div>
			<ul className='flex h-10 text-xl mt-8'>
				<li>Featured</li>
				<li>Qualities</li>
				<li>Reviews</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
}
