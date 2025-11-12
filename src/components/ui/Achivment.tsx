import Image from 'next/image';

import Title from './Title';

export default function Achivment() {
	return (
		<div className='flex flex-col gap-3'>
			<Title textSize='lg'>Achievements successfully</Title>
			<ul className='card bg-card grid grid-cols-10 rounded-3xl p-3 shadow shadow-neutral-400'>
				{[
					{
						id: 1,
						title: 'Add your first success habit!',
						img: '/image-achivment/first-complete-habit.svg',
					},
					{
						id: 2,
						title: 'Register your account',
						img: '/image-achivment/sign-in.svg',
					},
				].map(item => (
					<li key={item.id} title={item.title}>
						<Image src={item.img} alt='achiv' width={30} height={30} />
					</li>
				))}
			</ul>
		</div>
	);
}
