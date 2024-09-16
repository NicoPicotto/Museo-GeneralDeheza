/* eslint-disable react/prop-types */
import { useState } from "react";
import {
   Box,
   Text,
   useMediaQuery,
   Stack,
   Heading,
   Image,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalCloseButton,
   ModalBody,
   useDisclosure,
   Divider,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./linea.css";

// import required modules
import { Mousewheel, Navigation } from "swiper/modules";

const LineaIndustria = ({ events }) => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");
   const [isTablet] = useMediaQuery("(max-width: 1200px)");
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [selectedPiece, setSelectedPiece] = useState(null);

   const handleOpenModal = (piece) => {
      setSelectedPiece(piece);
      onOpen();
   };

   //Funciones auxiliares para los assets
   const isImage = (url) => {
      return /\.(jpeg|jpg|gif|png|svg)$/.test(url);
   };

   const isYouTubeLink = (url) => {
      return /youtube\.com|youtu\.be/.test(url);
   };

   const extractYouTubeId = (url) => {
      const regExp =
         /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
   };

   return (
      <Stack mt='3rem'>
         <Swiper
            direction={"horizontal"}
            slidesPerView={isMobile ? 1 : 5}
            spaceBetween={0}
            mousewheel={true}
            grabCursor={true}
            navigation={true}
            modules={[Mousewheel, Navigation]}
            className='mySwiper'
         >
            {events.map((data, index) => (
               <SwiperSlide key={index}>
                  <Stack
                     position='relative'
                     transition='0.2s ease'
                     cursor='pointer'
                     marginBlock={4}
                     onClick={() => handleOpenModal(data)}
                  >
                     <Heading zIndex={2} color='blanco'>
                        {data.date}
                     </Heading>
                     <Box
                        mt='20px'
                        bgColor='primario'
                        position='absolute'
                        w='200%'
                        h='5px'
                        mb='10px'
                     />
                     <Stack
                        //bgColor='white'
                        //shadow='md'

                        transition='0.2s ease'
                        _hover={{ transform: "scale(1.02)" }}
                        paddingInline='2rem'
                        paddingTop='3rem'
                        align='center'
                        gap='1rem'
                        w='100%'
                        borderRadius='full'
                        h='auto'
                     >
                        <Heading
                           mt='-1rem'
                           color='blanco'
                           size={isTablet ? "sm" : "md"}
                        >
                           {data.title}
                        </Heading>
                        {/* <Image
                           src={data.logo}
                           objectFit='contain !important'
                           w='80% !important'
                           h='fit-content !important'
                           minH='50%'
                           objectPosition='center !important'
                        /> */}
                     </Stack>
                  </Stack>
               </SwiperSlide>
            ))}
         </Swiper>
         {selectedPiece && (
            <Modal
               isOpen={isOpen}
               onClose={onClose}
               isCentered
               autoFocus={false}
            >
               <ModalOverlay backdropFilter='blur(5px)' />
               <ModalContent
                  p={3}
                  minW={isMobile ? "90%" : "80dvw"}
                  h='auto'
                  maxH={isMobile ? "auto" : "90dvh"}
                  w={isMobile && "90%"}
               >
                  <ModalCloseButton autoFocus={false} />
                  <ModalBody paddingBlock={5}>
                     <Stack direction={isMobile ? "column" : "row"} gap='1rem'>
                        <Stack
                           w={
                              selectedPiece?.assets?.length > 0 && !isMobile
                                 ? "50%"
                                 : "100%"
                           }
                        >
                           <Heading size='md' color='primario'>
                              {selectedPiece.date} - {selectedPiece.title}
                           </Heading>

                           <Divider borderColor='cuarto' />
                           <Stack
                              maxH='70dvh' // Limitar la altura del contenido de texto
                              overflowY='scroll' // Habilitar scroll cuando el texto sea demasiado largo
                           >
                              <Text whiteSpace='pre-line' fontSize={"md"}>
                                 {selectedPiece.content}
                              </Text>
                           </Stack>
                        </Stack>
                        <Stack
                           w={isMobile ? "100%" : "50%"}
                           display={
                              selectedPiece?.assets?.length > 0
                                 ? "block"
                                 : "none"
                           }
                        >
                           <Swiper
                              direction={"horizontal"}
                              slidesPerView={1}
                              spaceBetween={0}
                              mousewheel={true}
                              grabCursor={true}
                              navigation={true}
                              modules={[Mousewheel, Navigation]}
                              className='mySwiper'
                           >
                              {selectedPiece.assets &&
                                 selectedPiece.assets.map((asset, index) => {
                                    let content;

                                    if (isImage(asset)) {
                                       content = (
                                          <Image
                                             src={asset}
                                             alt={`asset-${index}`}
                                             maxW='100%'
                                             objectFit='contain !important'
                                             h='100%'
                                             objectPosition='center !important'
                                             maxH='70dvh'
                                             borderRadius='md'
                                             pointerEvents='none'
                                          />
                                       );
                                    } else if (isYouTubeLink(asset)) {
                                       const videoId = extractYouTubeId(asset);
                                       content = (
                                          <Box
                                             position='relative'
                                             w='100%'
                                             h='100%' // Mantiene la proporción 16:9
                                          >
                                             <iframe
                                                src={`https://www.youtube.com/embed/${videoId}`}
                                                frameBorder='0'
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowFullScreen
                                                style={{
                                                   position: "absolute",
                                                   top: 0,
                                                   left: 0,
                                                   width: "100%",
                                                   height: "100%",
                                                }}
                                             ></iframe>
                                          </Box>
                                       );
                                    } else {
                                       return null; // Si el asset no es reconocido, no renderiza nada
                                    }

                                    return (
                                       <SwiperSlide key={index}>
                                          {content}
                                       </SwiperSlide>
                                    );
                                 })}
                           </Swiper>
                        </Stack>
                     </Stack>
                  </ModalBody>
               </ModalContent>
            </Modal>
         )}
      </Stack>
   );
};

export default LineaIndustria;
