import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.css';
import SwiperStack from './SwiperStack';

const TimelineInstituciones = () => {
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
				<SwiperStack year='1901' text='Comisión Festejos Patronales' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1902' text='Escuela Primaria “General San Martín”' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1904' text='Sociedad Italiana' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1906' text='Policía' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='1914'
					text='Parroquia Nuestra Señora De La Asunción'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1918' text='Deheza Football Club' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1918' text='Iglesia Evangélica De Los Hermanos' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1936' text='Escuela Rural “Mariano Moreno”' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1941' text='Asociación Tiro Y Gimnasia' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1943' text='Escuela Rural “Conrado Villegas”' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='1948'
					text='Escuela Primaria “Martín Miguel De Güemes”'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1956' text='Club Atlético Acción Juvenil' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1959' text='Cooperativa Eléctrica' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='1959'
					text='Ipet 105 Escuela Técnica “Alfonsina Storni”'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='1962'
					text='Instituto Secundario Comercial “25 De Mayo”'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='1971'
					text='Jardín De Infantes “General San Martín”'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1976' text='Instituto Especial “Amanecer”' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='1977'
					text='Instituto Técnico “Adrián Pascual Urquía”'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1980' text='Escuela Municipal De Deportes' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1981' text='Asociación Bomberos Voluntarios' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1981' text='Asociación De Jubilados Y Pensionados' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='1981'
					text='Escuela Primaria Nocturna Para Adultos “Nelda Ferracini De Roig”'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='1983'
					text='Jardín De Infantes “Martin Miguel De Güemes”'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1984' text='Club De Abuelos' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='1985'
					text='Instituto Primario Privado “General Deheza”'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1985' text='Taller Protegido “Villa Luz” A.P.A.D' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='1989'
					text='Jardín De Infantes Del Instituto Privado'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1994' text='C.A.F.I.J' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='1994' text='Grupo Scout General Deheza' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='2002' text='Ciclo Básico Unificado Rural' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack year='2002' text='Mutual De Las Comunidades' />
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='2003'
					text='Centro De Formación Y Evaluación Técnica'
				/>
			</SwiperSlide>

			<SwiperSlide className='swiper-slide'>
				<SwiperStack
					year='2004'
					text='Centro Educativo “Doctor René Favaloro”'
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default TimelineInstituciones;
