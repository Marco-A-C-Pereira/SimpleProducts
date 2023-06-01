import React from 'react';

export default function Reviews() {
	return (
		<section className='p-4'>
			<h2 className='text-3xl font-bold uppercase font-Space-Grotesk'>
				Reviews
			</h2>
			<div>
				<ReviewCard />
			</div>
		</section>
	);
}

function ReviewCard() {
	function Star() {
		return (
			<img
				src='/star.svg'
				alt=''
				className='h-6 text-pinkish'
			/>
		);
	}

	return (
		<article className='flex-col flex border border-black rounded-xl p-2'>
			<div className='flex items-center gap-4'>
				<img
					src='/MainProduct.png'
					alt=''
					className='h-14 aspect-square rounded-full border border-black'
				/>
				<div>
					<p className='font-semibold text-pinkish text-xl'>
						The Literal Shoe
					</p>
					<div className='flex'>
						<Star />
						<Star />
						<Star />
						<Star />
						<Star />
					</div>
				</div>
			</div>
			<p>
				" Lorem ipsum dolor sit amet consectetur,
				adipisicing elit. Facere similique illum nihil nobis
				nam accusamus nulla. Nisi, illum dolorem, obcaecati
				velit totam facilis impedit eveniet dolores commodi
				iusto quod quasi? "
			</p>
		</article>
	);
}
