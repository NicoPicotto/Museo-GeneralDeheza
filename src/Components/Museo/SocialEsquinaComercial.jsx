import React from 'react';
import { Stack, Heading, Text, Image, useMediaQuery } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Navigation } from 'swiper/modules';

const SocialEsquinaComercial = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	const imgs = [
		'assets/LoSocial/ramos1.jpg',
		'assets/LoSocial/ramos2.jpg',
		'assets/LoSocial/ramos3.jpg',
		'assets/LoSocial/ramos4.jpg',
		'assets/LoSocial/ramos5.jpg',
		'assets/LoSocial/ramos6.jpg',
		'assets/LoSocial/ramos7.jpg',
	];

	return (
		<Stack align='flex-start' direction='row' spacing={5}>
			<Stack spacing={5} color='negro' w='50%' textAlign='left'>
				<Heading as='h2' color='secundario'>
					Ramos Generales
				</Heading>
				<Text>
					<Text as='b'>Introducción:</Text> en lo social intentamos imitar a los
					antiguos ramos generales bla bla bla
				</Text>
				<Text>
					¿Qué eran los Ramos Generales? Hoy se los suele recordar bajo el
					apelativo de “almacenes”, pero los comercios de ramos generales
					llegaron a ser mucho más que simples sitios destinados a la provisión
					de mercaderías.
				</Text>
				<Text>
					No sólo se dedicaban a la venta de bebidas, alimentos y tabacos, sino
					también a los productos textiles de la indumentaria campestre
					(alpargatas, botas, boinas, bombachas) y a los de limpieza, bazar y
					ferretería, entre muchos otros. Completaba el cuadro la distribución
					zonal de ciertas marcas de cervezas, vinos, soda o gaseosas, así como
					el despacho de combustibles y acopio de cereales. En cierta forma,
					podríamos decir que no eran nada específico, pero mucho en general.
				</Text>
			</Stack>
			<Stack w='50%'>
				<Swiper
					direction={'horizontal'}
					slidesPerView={1}
					spaceBetween={30}
					mousewheel={true}
					navigation={isMobile ? false : true}
					modules={[Mousewheel, Navigation]}
					className='mySwiper'
				>
					{imgs.map((img, index) => (
						<SwiperSlide align-items='center'>
							<Image key={index} src={img} />
						</SwiperSlide>
					))}
				</Swiper>
			</Stack>
		</Stack>
	);
};

export default SocialEsquinaComercial;