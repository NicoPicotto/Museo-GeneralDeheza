import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import AudioCard from '../../Components/Escuchar/AudioPlayer';
import esquina from '../../assets/Escuchar/EsquinaTradicional.mp3';
import Sidebar from '../../Components/Atoms/Sidebar';

const EscucharView = () => {
	return (
		<Stack direction='row' position='relative'>
			<Sidebar title='Lo que los dehecinos tenemos para decir' />
			<Container w='75%' paddingTop='7em'>
				<AudioCard title='Una esquina tradicional' src={esquina} />
			</Container>
		</Stack>
	);
};

export default EscucharView;
