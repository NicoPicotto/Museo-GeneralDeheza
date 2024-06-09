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
} from "@chakra-ui/react";
import items from "./PatronalesVideoList";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-historia.css";

// import required modules
import { Mousewheel, Navigation } from "swiper/modules";
import data from "./PatronalesSwiperList";
import audios from "./PatronalesAudioList";
import AudioCard from "./AudioPlayer";
import SwiperExhibiciones from "./SwiperExhibiciones";
import fotos from "./PatronalesFotosList";

const ExhibicionPatronales = () => {
    const [isMobile] = useMediaQuery("(max-width: 1100px)");

    return (
        <Stack marginTop='-50px' spacing={5} zIndex={5}>
            <Grid
                templateColumns={isMobile ? "repeat(1fr)" : "repeat(2, 6fr)"}
                gap={6}
            >
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
                <Stack h={isMobile ? "fit-content" : "500px"}>
                    <Swiper
                        direction={"horizontal"}
                        slidesPerView={1}
                        spaceBetween={30}
                        grabCursor={true}
                        mousewheel={true}
                        navigation={true}
                        modules={[Mousewheel, Navigation]}
                        className='mySwiper'
                    >
                        {data.map((data, index) => (
                            <SwiperSlide key={index}>
                                <Stack
                                    paddingInline={isMobile ? 0 : "50px"}
                                    direction={
                                        isMobile ? "column-reverse" : "row"
                                    }
                                    w='100%'
                                    h='100%'
                                >
                                    <Stack
                                        spacing={5}
                                        color='negro'
                                        mr={isMobile ? 0 : 10}
                                        h='100%'
                                        textAlign='justify'
                                    >
                                        <Heading
                                            as='h2'
                                            size='lg'
                                            color='terciario'
                                        >
                                            {data.title}
                                        </Heading>
                                        <Text
                                            fontSize={
                                                data.title ===
                                                    "Juegos populares" &&
                                                !isMobile
                                                    ? "15px"
                                                    : "lg"
                                            }
                                            overflowY={isMobile && "scroll"}
                                            maxH={isMobile && "300px"}
                                        >
                                            {data.content}
                                        </Text>
                                    </Stack>
                                    <Image
                                        src={data.image}
                                        maxH={isMobile && "300px"}
                                        objectFit='cover'
                                    />
                                </Stack>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Stack>
            </Stack>
            <Divider borderColor='cuarto' marginBlock='2em' />
            <Heading size='md' color='primario' mb='1em' textAlign='center'>
                Distintos vecinos nos relatan sus experiencias sobre los
                Festejos Patronales ¡disfruta lo que tienen para contarnos!
            </Heading>
            <Grid
                templateColumns={isMobile ? "repeat(1fr)" : "repeat(2, 6fr)"}
                gap={6}
                paddingInline={isMobile ? 0 : "50px"}
            >
                {audios.map((item, index) => (
                    <GridItem
                        key={index}
                        bgColor='white'
                        shadow='md'
                        overflow='hidden'
                        borderRadius={5}
                    >
                        <AudioCard
                            src={item.file}
                            description={item.description}
                        />
                    </GridItem>
                ))}
            </Grid>
            <Divider borderColor='cuarto' marginBlock='2em' />
            <Text fontSize='lg' color='primario' mb='1em' textAlign='center'>
                El 15 de Agosto de 2023, nos acompañaron los integrantes del
                grupo de teatro Deja Vú, dándole vida a los juegos que se
                encontraban en exposición. Con el objetivo de rememorar los
                anteriores Festejos Patronales, se encontraban los famosos
                “Caballitos”, “La Ruleta” y “La Chica y La Grande”.
            </Text>
            <Stack>
                <SwiperExhibiciones fotos={fotos} />
            </Stack>
        </Stack>
    );
};

export default ExhibicionPatronales;
