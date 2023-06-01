import React from 'react';

export default function Qualities() {
	return (
		<section
			className='bg-black font-Contrail-One mt-8 p-10 text-white 
[&>div]:mt-4 [&>div>p]:ml-2 [&>div>h3]:tracking-wider [&>div>h3]:text-pinkish [&>*:nth-child(odd)]:ml-auto'>
			<div>
				<h3 className='text-4xl'>
					State of the art confort
				</h3>
				<p className='text-xl mt-2'>
					We designed this experience with the uttermost
					comfort in mind so you don&apos;t have to worry
					about your other feet, it&apos;s magic ! Well ...
					it is literally a magic shoe, so yes it&apos;s
					magic !.
				</p>
			</div>

			<div>
				<h3 className='text-4xl'>Eco Friendly</h3>
				<p className='text-xl mt-2'>
					100% of the materials are sourced from ethical
					sources and are made to be renewable and
					recyclable so you can use the best shoe without a
					hint of guilt, you are helping the environment by
					getting one.
				</p>
			</div>

			<div>
				<h3 className='text-4xl'>Confidence</h3>
				<p className='text-xl mt-2'>
					People will know instantly that you have
					astronomical levels of confidence just by using
					our product in public, since nobody will even
					think to question why are you using just one shoe
					of a pair, think of the gains that you can make
					from that perceived confidence.
				</p>
			</div>

			<div>
				<h3 className='text-4xl'>It exists</h3>
				<p className='text-xl mt-2'>
					Yep, that&apos;s the point this product exists and
					just that fact is noteworthy, it&apos;s not easy
					to convince a board of white collars to fund a
					magical red shoe trust me we have been trying for
					years just so you have your own.
				</p>
			</div>
		</section>
	);
}
