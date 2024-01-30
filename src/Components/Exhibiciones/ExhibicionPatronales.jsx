/* eslint-disable react/no-unknown-property */
import {
	Stack,
	Grid,
	GridItem,
	useMediaQuery,
	Heading,
	Text,
	Image,
	Divider,
} from '@chakra-ui/react';
import items from './PatronalesVideoList';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiper-historia.css';

// import required modules
import { Mousewheel, Navigation } from 'swiper/modules';
import data from './PatronalesSwiperList';
import audios from './PatronalesAudioList';
import AudioCard from './AudioPlayer';
import SwiperExhibiciones from './SwiperExhibiciones';
import fotos from './PatronalesFotosList';

const ExhibicionPatronales = () => {
	const [isMobile] = useMediaQuery('(max-width: 1100px)');

	return (
		<Stack marginTop='-50px' spacing={5}>
			<Grid templateColumns='repeat(2, 6fr)' gap={6}>
				{items.map((item, index) => (
					<GridItem
						key={index}
						bgColor='white'
						shadow='md'
						overflow='hidden'
						borderRadius={5}
					>
						<Stack h='100%' p={5} align='flex-start' gap={3}>
							<iframe
								width='100%'
								height='400'
								src={item.url}
								title='YouTube video player'
								frameborder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowfullscreen
							></iframe>
						</Stack>
					</GridItem>
				))}
			</Grid>
			<Divider borderColor='cuarto' marginBlock='2em' />
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
										<Text
											fontSize={
												data.title === 'Juegos populares' ? '15px' : 'lg'
											}
										>
											{data.content}
										</Text>
									</Stack>
									<Image src={data.image} />
								</Stack>
							</SwiperSlide>
						))}
					</Swiper>
				</Stack>
			</Stack>
			<Divider borderColor='cuarto' marginBlock='2em' />
			<Heading size='md' color='primario' mb='1em' textAlign='center'>
				Distintos vecinos nos relatan sus experiencias sobre los festejos
				patronales ¡disfruta lo que tienen para contarnos!
			</Heading>
			<Grid templateColumns='repeat(2, 6fr)' gap={6} paddingInline='50px'>
				{audios.map((item, index) => (
					<GridItem
						key={index}
						bgColor='white'
						shadow='md'
						overflow='hidden'
						borderRadius={5}
					>
						<AudioCard src={item.file} description={item.description} />
					</GridItem>
				))}
			</Grid>
			<Divider borderColor='cuarto' marginBlock='2em' />
			<Heading size='md' color='primario' mb='1em' textAlign='center'>
				El 15 de Agosto de 2023, nos acompañaron los integrantes del grupo de
				teatro Deja vú dándole vida a los juegos que se encontraban en
				exposición. Con el objetivo de rememorar los anteriores festejos
				patronales, se encontraban los famosos “Caballitos”, “La Ruleta” y “La
				Chica y La Grande”.
			</Heading>
			<Stack>
				<SwiperExhibiciones fotos={fotos} />
			</Stack>
		</Stack>
	);
};

export default ExhibicionPatronales;
