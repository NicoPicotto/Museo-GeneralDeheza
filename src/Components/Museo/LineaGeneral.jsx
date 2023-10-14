import React, { useEffect, useRef, useState } from 'react';
import {
	Stack,
	Progress,
	HStack,
	Button,
	useMediaQuery,
} from '@chakra-ui/react';
import Container from '../Atoms/Container';
import EventCard from './EventCard';
import events from './DatosLineaGeneral';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import './noScroll.css';

const LineaGeneral = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	const timelineRef = useRef(null);
	const [progress, setProgress] = useState(0);

	//Horizontal scrolling
	useEffect(() => {
		const handleScroll = (e) => {
			if (timelineRef.current) {
				timelineRef.current.scrollLeft += e.deltaY;

				const totalScrollWidth =
					timelineRef.current.scrollWidth - timelineRef.current.clientWidth;
				const currentScrollPosition = timelineRef.current.scrollLeft;

				const progressPercentage =
					(currentScrollPosition / totalScrollWidth) * 100;
				setProgress(progressPercentage);
			}
		};

		if (timelineRef.current) {
			// Ensure timelineRef.current is not null before adding the event listener
			timelineRef.current.addEventListener('wheel', handleScroll);
		}
		return () => {
			if (timelineRef.current) {
				// Ensure timelineRef.current is not null before removing the event listener
				timelineRef.current.removeEventListener('wheel', handleScroll);
			}
		};
	}, []);

	const updateProgress = () => {
		if (timelineRef.current) {
			const totalScrollWidth = timelineRef.current.scrollWidth - 420;
			const currentScrollPosition = timelineRef.current.scrollLeft;
			const progressPercentage =
				(currentScrollPosition / totalScrollWidth) * 100;
			setProgress(progressPercentage);
		}
	};

	const scrollToNext = () => {
		if (timelineRef.current) {
			const newScrollPosition = timelineRef.current.scrollLeft + 420;
			timelineRef.current.scrollTo({
				left: newScrollPosition,
				behavior: 'smooth',
			});
			setTimeout(updateProgress, 300); // Allow time for scrolling animation to complete
		}
	};

	const scrollToPrevious = () => {
		if (timelineRef.current) {
			const newScrollPosition = timelineRef.current.scrollLeft - 420;
			timelineRef.current.scrollTo({
				left: newScrollPosition,
				behavior: 'smooth',
			});
			setTimeout(updateProgress, 300); // Allow time for scrolling animation to complete
		}
	};
	return (
		<Container overflowY='hidden' position='relative'>
			<Stack
				ref={timelineRef}
				overflowX='scroll'
				whiteSpace='nowrap'
				h='100%'
				justify='center'
				position='relative'
				className='no-scroll'
			>
				<Stack
					align='flex-start'
					position='sticky'
					direction='row'
					mb={3}
					left={0}
				>
					<Button
						onClick={scrollToPrevious}
						variant='outline'
						borderColor='cuarto'
						paddingInline={10}
						_hover={{ bgColor: 'cuarto' }}
					>
						<GrFormPreviousLink />
					</Button>
					<Button
						onClick={scrollToNext}
						variant='outline'
						borderColor='cuarto'
						paddingInline={10}
						_hover={{ bgColor: 'cuarto' }}
					>
						<GrFormNextLink />
					</Button>
				</Stack>
				<HStack spacing={4}>
					{events.map((event, index) => (
						<EventCard key={index} event={event} />
					))}
				</HStack>
				<Progress
					value={progress}
					marginTop={5}
					left={0}
					position='sticky'
					bgColor='cuarto'
					colorScheme='gray'
					size='sm'
					display={isMobile && 'none'}
				/>
			</Stack>
		</Container>
	);
};

export default LineaGeneral;
