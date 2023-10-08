import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import AudioCard from '../../Components/Escuchar/AudioPlayer';
import esquina from '../../assets/Escuchar/EsquinaTradicional.mp3';
import Sidebar from '../../Components/Atoms/Sidebar';

const EscucharView = () => {
	return (
		<Stack direction={['column', 'column', 'row']} position='relative'>
			<Sidebar
				title='Voces de Deheza'
				subtitle='Relatos y memorias contados por los dehecinos, el corazón de nuestro pueblo.'
				h='100vh'
			/>
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
