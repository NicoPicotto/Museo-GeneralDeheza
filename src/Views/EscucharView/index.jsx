import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import AudioCard from '../../Components/Interactuar/Escuchar/AudioPlayer';
import esquina from '/assets/Escuchar/EsquinaTradicional.mp3';

const EscucharView = () => {
	return (
		<Stack direction={['column', 'column', 'row']} position='relative'>
			<Container
				w='100%'
				padding={7}
				direction='row'
				flexWrap='wrap'
				spacing={8}
			>
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
				<AudioCard title='Una esquina tradicional' src={esquina} />
			</Container>
		</Stack>
	);
};

export default EscucharView;
