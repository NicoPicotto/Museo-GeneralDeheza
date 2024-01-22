/* eslint-disable react/prop-types */
import { Stack, Heading, Text } from '@chakra-ui/react';

const Portada = ({ title, img, text }) => {
	return (
		<Stack
			bgSize='cover'
			h='500px'
			bgImage={`linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 80%), url(${img})`}
			bgPos='bottom'
			align='center'
			bgAttachment='fixed'
			bgColor='cuarto'
		>
			<Stack
				maxW='1420px'
				h='100%'
				paddingInline={5}
				justify='flex-end'
				paddingBottom='60px'
				w='100%'
			>
				<Heading size='3xl' color='background' textShadow='md'>
					{title}
				</Heading>
				<Text
					maxW='70ch'
					fontSize='lg'
					color='background'
					textShadow='sm'
					textAlign='justify'
					css={{ textWrap: 'pretty' }}
				>
					{text}
				</Text>
			</Stack>
		</Stack>
	);
};

export default Portada;
