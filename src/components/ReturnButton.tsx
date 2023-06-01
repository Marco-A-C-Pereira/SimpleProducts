import React, { useEffect, useState } from 'react';

export default function ReturnButton() {
	const [scroll, setScroll] = useState(grabScrollValue);

	useEffect(() => {
		// Talvez adicionar um throttle
		window.addEventListener('scroll', () => {
			setScroll(grabScrollValue);
		});
	}, [scroll]);

	function grabScrollValue(): number {
		return (
			document.body.scrollTop ||
			document.documentElement.scrollTop
		);
	}

	function scrollTop(): void {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	return (
		<button
			onClick={scrollTop}
			className={`h-12 bg-pinkish rounded-full aspect-square text-white fixed  bottom-5 right-5 ${
				scroll > 0 ? 'block' : 'hidden'
			} `}>
			&#9650;
		</button>
	);
}
