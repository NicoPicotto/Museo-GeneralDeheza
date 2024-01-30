/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Stack, Image, Tag } from '@chakra-ui/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './linea.css';

// import required modules
import { Mousewheel, Navigation } from 'swiper/modules';

const SwiperExhibiciones = ({ fotos }) => {
	return (
		<Stack pb={5}>
			<Swiper
				direction={'horizontal'}
				slidesPerView={1}
				spaceBetween={0}
				grabCursor={true}
				mousewheel={true}
				modules={[Mousewheel, Navigation]}
				className='mySwiper'
				navigation={true}
			>
				{fotos.map((data, index) => (
					<SwiperSlide key={index}>
						<Stack align='center' shadow='md' h='80vh' position='relative'>
							<Image src={data.img} />
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
