import React, { useState, useEffect, useRef } from 'react';
import { Stack, Button, Text, Progress, Heading } from '@chakra-ui/react';
import { FaPlay, FaPause, FaRedo, FaStop } from 'react-icons/fa';
import { BiSolidUser, BiSolidPurchaseTag } from 'react-icons/bi';

const AudioCard = ({ src, title, autor }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const audioRef = useRef(null);

	useEffect(() => {
		const updateProgress = () => {
			const percentage =
				(audioRef.current.currentTime / audioRef.current.duration) * 100;
			setProgress(percentage);
		};

		const audioElement = audioRef.current;
		audioElement.addEventListener('timeupdate', updateProgress);

		return () => {
			audioElement.removeEventListener('timeupdate', updateProgress);
		};
	}, []);

	const togglePlayPause = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const restartAudio = () => {
		audioRef.current.currentTime = 0;
		if (!isPlaying) {
			setIsPlaying(true);
		}
		audioRef.current.play();
	};

	const stopAudio = () => {
		audioRef.current.pause();
		audioRef.current.currentTime = 0;
		setProgress(0);
		setIsPlaying(false);
	};

	return (
		<Stack padding='1em'>
			<Stack alignItems='flex-start' mb={4}>
				<Heading size='md' color='primario'>
					{title}
				</Heading>
				<Stack
					direction='row'
					align='center'
					bgColor='cuarto'
					paddingInline={3}
					paddingBlock={1}
					borderRadius={4}
				>
					{' '}
					<BiSolidUser />
					<Text fontSize='sm'>{autor}</Text>
				</Stack>
			</Stack>
			<Progress
				value={progress}
				colorScheme='green'
				alignItems='flex-start'
				justifyContent='start'
				display='flex'
			/>
			<audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
			<Stack direction='row' align='center' justify='space-around'>
				<Button
					variant='ghost'
					_hover={{ bgColor: 'transparent' }}
					size='sm'
					onClick={restartAudio}
					aria-label='Restart'
				>
					<FaRedo />
				</Button>
				<Button
					variant='ghost'
					_hover={{ bgColor: 'transparent' }}
					onClick={togglePlayPause}
					aria-label={isPlaying ? 'Pause' : 'Play'}
				>
					{isPlaying ? <FaPause fontSize='2em' /> : <FaPlay fontSize='2em' />}
				</Button>
				<Button
					variant='ghost'
					_hover={{ bgColor: 'transparent' }}
					size='sm'
					onClick={stopAudio}
					aria-label='Stop'
				>
					<FaStop />
				</Button>
			</Stack>
		</Stack>
	);
};

export default AudioCard;
