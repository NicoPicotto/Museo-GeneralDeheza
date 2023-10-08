import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Heading, Stack, Text } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.css';
import SwiperStack from './SwiperStack';

const Timeline = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			slidesPerView={3}
			grabCursor
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			className='swiper-wrapper'
		>
			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1893' text='Fundación Colonia La Agrícola' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1900' text='Estafeta Postal - Correo' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1905' text='Estación Ferrocarril' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1913' text='Teléfono' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1923' text='Usina De Luz Y Fuerza Motriz' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1924' text='Registro Civil' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1926' text='Juzgado De Paz' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='1940'
					text='Sala De Primeros Auxilios - Hospital Vecinal'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1947' text='Taller De Tejeduría Angel Racca' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1948' text='Barrio Municipal' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1948' text='Hogar De Ancianos' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1986' text='Casa De La Cultura' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1988' text='A.F.I.P. - Resguardo Aduanero' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1988' text='Junta Nacional De Granos' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='2000' text='Fundación Multiplicar' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='2000' text='Oficina Legislativa' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='2003' text='Oficina Senasa' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='2004' text='Asociación Empresarial' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='2009' text='Aduana' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='2009' text='Aduana Cordoba Sur' />
			</SwiperSlide>
		</Swiper>
	);
};

export default Timeline;
