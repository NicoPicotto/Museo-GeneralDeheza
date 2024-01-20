import { Stack, Text, useMediaQuery, Heading, Image } from '@chakra-ui/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper-historia.css';

// import required modules
import { Mousewheel, Navigation } from 'swiper/modules';
import data from '../DatosLineas/DatosLineaIntroduccion.jsx';

const Introduccion = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack marginTop='-50px' spacing={5} paddingInline='50px'>
			<Stack
				
				color='negro'
				bgColor='white'
				paddingInline={8}
				paddingBlock={7}
				borderRadius={5}
				h='fit-content'
				boxShadow='md'
				mb={10}
				textAlign='justify'
			>
				<Heading size='lg' color='primario'>
					Introducción
				</Heading>
				<Text css={{ columnCount: 2, columnGap: '40px' }}>
					La creación del Museo se origina a partir del programa “HERENCIAS”. La
					importancia de la memoria histórico-social permite recuperar el camino
					recorrido, las dificultades enfrentadas y superadas, lo que no pudo
					ser y lo que sí. Hacer memoria es una actividad propiamente humana, y
					se convierte en un hecho “humanitario” porque nos permite ejercer
					nuestra máxima cualidad como seres: la perfectibilidad. El cambio y la
					mejora vienen, necesariamente, del aprendizaje a partir de lo vivido;
					de ahí, la importancia del recupero y la reconstrucción del pasado que
					nos constituye como pueblo. El objetivo del Museo es generar un
					espacio físico en General Deheza donde se pueda resguardar y exhibir
					de manera digital los diferentes proyectos que forman parte del
					Programa Herencias. Que la localidad cuente con un espacio al cual
					recurrir para empaparse del pasado; lograr una interacción entre las
					instituciones y la historia de nuestra ciudad; crear un espacio donde
					se atesore nuestra historia.
				</Text>
			</Stack>
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
						{data.map((data, index) => (
							<SwiperSlide key={index}>
								<Stack paddingInline='50px' direction='row' w='100%' h='100%'>
									<Stack
										spacing={5}
										color='negro'
										mr={10}
										h='100%'
										textAlign='justify'
									>
										<Heading as='h2' size='lg' color='terciario'>
											{data.title}
										</Heading>
										<Text>{data.content}</Text>
									</Stack>
									<Image src={data.image} />
								</Stack>
							</SwiperSlide>
						))}
					</Swiper>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Introduccion;
