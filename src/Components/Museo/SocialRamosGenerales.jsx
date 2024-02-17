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
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import social from '../DatosLineas/DatosLoSocial';

const SocialRamosGenerales = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack>
			<Stack h={!isMobile && '500px'}>
				<Swiper
					direction={'horizontal'}
					slidesPerView={1}
					spaceBetween={30}
					grabCursor={true}
					mousewheel={true}
					pagination={isMobile ? true : false}
					navigation={isMobile ? false : true}
					modules={[Mousewheel, Navigation, Pagination]}
					className='mySwiper'
				>
					{social.map((social, index) => (
						<SwiperSlide key={index}>
							<Stack
								paddingInline={isMobile ? 0 : '50px'}
								direction={isMobile ? 'column-reverse' : 'row'}
								w='100%'
								h='100%'
								spacing={isMobile && 5}
							>
								<Stack
									spacing={5}
									color='negro'
									textAlign='left'
									mr={isMobile ? 0 : 10}
									h='100%'
								>
									<Heading as='h2' color='terciario'>
										{social.title}
									</Heading>
									<Text fontSize='lg' textAlign='justify'>
										{social.content}
									</Text>
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
