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
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [selectedPiece, setSelectedPiece] = useState(null);

   const handleOpenModal = (piece) => {
      setSelectedPiece(piece);
      onOpen();
   };
   return (
      <Stack mt='-10px'>
         <Swiper
            direction={"horizontal"}
            slidesPerView={isMobile ? 1 : 4}
            spaceBetween={0}
            mousewheel={true}
            grabCursor={true}
            navigation={isMobile && true}
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
                     <Heading zIndex={2} color='terciario'>
                        {data.date}
                     </Heading>
                     <Box
                        mt="17px"
                        bgColor='secundario'
                        position='absolute'
                        w='120%'
                        h='10px'
                        mb='10px'
                     />
                     <Stack
                        bgColor='white'
                        shadow='md'
                        p={5}
                        align='center'
                        h={isMobile ? "auto" : "18em"}
                     >
                        <Heading size='md'>{data.title}</Heading>
                        <Text
                           noOfLines={8}
                           overflow='hidden'
                           textOverflow='ellipsis'
                           display='-webkit-box'
                        >
                           {data.content}
                        </Text>
                     </Stack>
                  </Stack>
               </SwiperSlide>
            ))}
         </Swiper>
         {selectedPiece && (
            <Modal isOpen={isOpen} onClose={onClose}>
               <ModalOverlay backdropFilter='blur(5px)' />
               <ModalContent
                  p={3}
                  minW={isMobile ? "90%" : "800px"}
                  h='auto'
                  w={isMobile && "90%"}
               >
                  <ModalCloseButton />
                  <ModalBody paddingBlock={5}>
                     <Stack>
                        <Heading size='md' color='primario'>
                           {selectedPiece.date} - {selectedPiece.title}
                        </Heading>
                        <Divider borderColor='cuarto' />
                        <Text whiteSpace='pre-line' fontSize='lg'>
                           {selectedPiece.content}
                        </Text>
                        <Image src={selectedPiece.image} />
                     </Stack>
                  </ModalBody>
               </ModalContent>
            </Modal>
         )}
      </Stack>
   );
};

export default LineaIndustria;
