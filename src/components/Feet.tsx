export default function Feet() {
	return (
		<section className='bg-black text-white p-4 flex items-center justify-around 2xl:p-8 mt-8'>
			<p className='text-xl 2xl:text-2xl text-pinkish font-bold'>
				Marco AP <span className='text-white'>06/23</span>
			</p>
			<a
				href='https://www.linkedin.com/in/marcoapcarvalho/'
				target='_blank'>
				<img
					src='./LinkedIn.svg'
					alt=''
					className='h-10 2xl:h-16 aspect-square'
				/>
			</a>
		</section>
	);
}
