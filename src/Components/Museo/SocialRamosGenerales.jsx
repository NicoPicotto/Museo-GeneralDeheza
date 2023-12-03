import React from 'react';
import { Stack, Heading, Text, Image, useMediaQuery } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './noScroll.css';

// import required modules
import { Mousewheel, Navigation } from 'swiper/modules';
import social from '../DatosLineas/DatosLoSocial';

const SocialRamosGenerales = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack>
			<Stack h='500px'>
				<Swiper
					direction={'horizontal'}
					slidesPerView={1}
					spaceBetween={30}
					mousewheel={true}
					navigation={isMobile ? false : true}
					modules={[Mousewheel, Navigation]}
					className='mySwiper'
				>
					{social.map((social, index) => (
						<SwiperSlide key={index}>
							<Stack paddingInline='50px' direction='row' w='100%'>
								{social.video && (
									<iframe
										src={social.video}
										width='100%'
										style={{ height: `calc(80vw * 9 / 16)` }}
										allow='autoplay'
									></iframe>
								)}
								<Stack
									spacing={5}
									color='negro'
									textAlign='left'
									mr={10}
									h='100%'
								>
									<Heading as='h2' color='terciario'>
										{social.title}
									</Heading>
									<Text textAlign='justify'>{social.content}</Text>
								</Stack>
								{social.image && <Image src={social.image} />}
							</Stack>
						</SwiperSlide>
					))}
				</Swiper>
			</Stack>
		</Stack>
	);
};

export default SocialRamosGenerales;
