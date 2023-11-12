import React from 'react';
import { Chrono } from 'react-chrono';
import { Stack } from '@chakra-ui/react';
import './chrono.css';

const LineaMuseo = ({ events }) => {
	return (
		<Stack>
			<Chrono
				items={events}
				mode='VERTICAL'
				titleDateFormat='YYYY'
				useReadMore={false}
				enableBreakPoint
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

export default LineaMuseo;
