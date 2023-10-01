import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import Container from '../../Components/Atoms/Container';
import Hero from '../../Components/Home/Hero';

const HomeView = () => {
	return (
		<Stack>
			<Hero />
			<Container>
				<Text>Home</Text>
			</Container>
		</Stack>
	);
};

export default HomeView;
