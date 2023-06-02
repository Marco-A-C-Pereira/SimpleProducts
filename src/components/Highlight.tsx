export default function Highlight() {
	return (
		<section className='font-Space-Grotesk p-4 flex max-sm:flex-col-reverse items-center 2xl:justify-center'>
			<div className='lg:w-5/6 2xl:w-3/6'>
				<h1 className='text-3xl font-bold uppercase text-justify'>
					The only shoe you will ever need
				</h1>
				<p className='font-semibold leading-4 text-lg text-justify'>
					This single shoe is changing a whole lot of
					peoples lives by giving Then the power of
					confidence and allowing them to live practically a
					new way of life.
				</p>

				<div className='flex mt-6 gap-2 '>
					<button className='bg-pinkish rounded-full w-20 h-12 text-lg font-Space uppercase'>
						Buy
					</button>
					<h3 className='w-4/5 text-neutral-800 font-semibold leading-5'>
						a single shoe and join other{' '}
						<span className='text-pinkish font-bold'>
							962
						</span>{' '}
						individuals on their life improving experience{' '}
					</h3>
				</div>
			</div>
			<img
				src='./MainProduct.png'
				alt=''
				className='block w-10/12 2xl:w-2/6'
			/>
		</section>
	);
}
