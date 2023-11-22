import React from 'react';
import { Chrono } from 'react-chrono';
import { Stack } from '@chakra-ui/react';
import './chrono.css';

const LineaChrono = ({ events }) => {
	// const observer = new MutationObserver((mutations) => {
	// 	mutations.forEach((mutation) => {
	// 		mutation.addedNodes.forEach((node) => {
	// 			// Asegúrate de que el nodo es un botón y contiene el texto relevante
	// 			if (
	// 				node.nodeName === 'BUTTON' &&
	// 				node.textContent.includes('read more')
	// 			) {
	// 				node.querySelector('span').textContent = 'leer más';
	// 			}
	// 			if (
	// 				node.nodeName === 'BUTTON' &&
	// 				node.textContent.includes('read less')
	// 			) {
	// 				node.querySelector('span').textContent = 'leer menos';
	// 			}
	// 		});
	// 	});
	// });

	// observer.observe(document.body, {
	// 	childList: true,
	// 	subtree: true,
	// });

	return (
		<Stack>
			<Chrono
				items={events}
				titleDateFormat='YYYY'
				mode='HORIZONTAL'
				showAllCardsHorizontal
				cardWidth={500}
				cardHeight={300}
				contentDetailsHeight={100}
				scrollable
				theme={{
					primary: '#4C5249',
					secondary: '#4C5249',
					cardBgColor: 'white',
					titleColor: '#4C5249',
					cardDetailTextColor: 'black',
					cardTitleColor: '#4C5249',
					titleColorActive: 'white',
				}}
				fontSizes={{
					cardSubtitle: '1.2rem',
					cardTitle: '1.4rem',
					title: '1.5rem',
				}}
				classNames={{
					card: 'my-card',
					cardMedia: 'my-card-media',
					cardSubTitle: 'my-card-subtitle',
					cardText: 'my-card-text',
					cardTitle: 'my-card-title',
					controls: 'my-controls',
					title: 'my-title',
				}}
			/>
		</Stack>
	);
};

export default LineaChrono;
