import { useMediaQuery } from '@chakra-ui/react';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';

import EventCard from './EventCard';
import './noScroll.css';

const LineaGeneral = ({ events }) => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Swiper
			direction={'horizontal'}
			slidesPerView={1}
			spaceBetween={30}
			mousewheel={true}
			navigation={isMobile ? false : true}
			pagination={{
				clickable: true,
				type: 'progressbar',
			}}
			modules={[Mousewheel, Pagination, Navigation]}
			className='mySwiper'
		>
			{events.map((event, index) => (
				<SwiperSlide>
					<EventCard key={index} event={event} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default LineaGeneral;
