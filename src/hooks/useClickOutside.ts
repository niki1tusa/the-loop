'use client';

import { useEffect, useRef } from 'react';

type TEvent = MouseEvent | TouchEvent;
type THandlerEvent = (event: TEvent) => void;

export function useClickOutside<T extends HTMLElement>(handler: THandlerEvent) {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const listener = (event: TEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) return;
			handler(event);
		};

		document.addEventListener('pointerdown', listener, { capture: true });
		return () => {
			document.removeEventListener('pointerdown', listener, { capture: true });
		};
	}, [handler]);
	return { ref };
}
