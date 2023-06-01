import { ReactNode } from 'react';

const reviewsJSON = [
	{
		user: 'The Literal Shoe',
		url: '/MainProduct.png',
		rating: 5,
		content:
			'I am the product and I approve very much. Will chance your life',
	},
	{
		user: 'Nuclear Winter Survivor',
		url: '/Pfp2.jpg',
		rating: 4,
		content:
			'In those trying times this magical shoe is being my salvation, I use it at every moment to keep myself warm and protected from the elements. Even managed to find food in the ruins',
	},
	{
		user: 'Not a Paid Reviewer',
		url: 'https://media.istockphoto.com/id/1079767162/vector/cute-robot-dog.jpg?s=612x612&w=0&k=20&c=AaKX4BC1F4OWxM0w8qZe9ejWipeIP2w8tleEKMHyydg=',
		rating: 5,
		content:
			'The money changed my lif- I mean the shoe, the shoe changed my whole life and I can jump to the moon, run 300km just under 1H would recommend',
	},
];

interface IReview {
	user: string;
	url: string;
	rating: number;
	content: string;
}

export default function Reviews() {
	return (
		<section className='p-4'>
			<h2 className='text-3xl font-bold uppercase font-Space-Grotesk 2xl:text-4xl'>
				Reviews from our customers
			</h2>
			<div className='flex flex-wrap gap-4 mt-4 justify-center 2xl:gap-8'>
				{reviewsJSON.map((entry, i) => {
					return (
						<ReviewCard
							key={i}
							user={entry.user}
							url={entry.url}
							rating={entry.rating}
							content={entry.content}
						/>
					);
				})}
			</div>
		</section>
	);
}

function ReviewCard({
	user,
	url,
	rating,
	content,
}: IReview) {
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
		<article className='flex-col gap-4 flex border border-black rounded-xl p-2 max-w-sm 2xl:text-xl'>
			<div className='flex items-center gap-4'>
				<img
					src={url}
					alt=''
					className='h-14 aspect-square rounded-full border border-black'
				/>
				<div>
					<p className='font-semibold text-pinkish text-xl 2xl:text-2xl'>
						{user}
					</p>
					<div className='flex'>
						{[...Array(rating)].map((_, i) => {
							return <Star key={i} />;
						})}
					</div>
				</div>
			</div>
			<p className='font-semibold'>" {content} "</p>
		</article>
	);
}
