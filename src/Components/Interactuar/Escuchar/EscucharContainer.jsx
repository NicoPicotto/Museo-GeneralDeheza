import React, { useState } from 'react';
import { Stack, Heading, useMediaQuery, useDisclosure } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import items from './EscucharList';
// import required modules
import { Navigation } from 'swiper/modules';
import './Swiper.css';
import AudioPlayer from './AudioPlayer';

const EscucharContainer = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack marginTop='100px' paddingInline='50px'>
			<Stack
				bgColor='terciario'
				color='background'
				p={8}
				align='center'
				borderRadius={5}
				shadow='md'
			>
				<Heading>Escuchar</Heading>
			</Stack>

			<Swiper
				direction={'horizontal'}
				slidesPerView={2}
				navigation={isMobile ? false : true}
				modules={[Navigation]}
				className='mySwiperInteractuar'
			>
				{items.map((item, index) => (
					<SwiperSlide key={index} item={item}>
						<AudioPlayer
							src={item.file}
							title={item.titulo}
							autor={item.autor}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Stack>
	);
};

export default EscucharContainer;
