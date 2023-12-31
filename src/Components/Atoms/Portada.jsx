import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

const Portada = ({ title, img, text }) => {
	return (
		<Stack
			bgSize='cover'
			h='500px'
			bgImage={`linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4) 70%), url(${img})`}
			bgPos='bottom'
			align='center'
			bgAttachment="fixed"
			paddingInline='75px'
			bgColor='cuarto'
		>
			<Stack
				maxW='1920px'
				h='100%'
				justify='flex-end'
				paddingBottom='60px'
				w='100%'
			>
				<Heading size='3xl' color='background' textShadow="md">
					{title}
				</Heading>
				<Text maxW="60ch" fontSize='lg' color='background' textShadow="sm">
					{text}
				</Text>
			</Stack>
		</Stack>
	);
};

export default Portada;
