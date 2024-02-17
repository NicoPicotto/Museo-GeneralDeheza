/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Stack, Image, Tag, useMediaQuery } from '@chakra-ui/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './linea.css';

// import required modules
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';

const SwiperExhibiciones = ({ fotos }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');
	return (
		<Stack pb={5}>
			<Swiper
				direction={'horizontal'}
				slidesPerView={1}
				spaceBetween={0}
				grabCursor={true}
				mousewheel={true}
				modules={[Mousewheel, Navigation, Pagination]}
				className='mySwiper'
				pagination={isMobile ? true : false}
				navigation={isMobile ? false : true}
			>
				{fotos.map((data, index) => (
					<SwiperSlide key={index}>
						<Stack
							align='center'
							shadow='md'
							h={isMobile ? 'fit-content' : '80vh'}
							position='relative'
						>
							<Image
								src={data.img}
								h={isMobile && '300px'}
								maxH={isMobile && '300px'}
							/>
							<Tag
								bgColor='secundario'
								textTransform='uppercase'
								display={data.text ? 'flex' : 'none'}
								position='absolute'
								bottom={0}
								left={0}
								m={2}
							>
								{data.text}
							</Tag>
						</Stack>
					</SwiperSlide>
				))}
			</Swiper>
		</Stack>
	);
};

export default SwiperExhibiciones;
