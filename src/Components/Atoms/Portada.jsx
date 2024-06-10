/* eslint-disable react/prop-types */
import { Stack, Heading, Text, useMediaQuery } from "@chakra-ui/react";

const Portada = ({ title, img, text, bgSize, bgPos }) => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");
   return (
      <Stack
         bgSize={bgSize ? bgSize : "cover"}
         h={isMobile ? "fit-content" : "500px"}
         bgImage={
            !isMobile &&
            `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 80%), url(${img})`
         }
         bgPos={bgPos ? bgPos : "bottom"}
         align='center'
         bgAttachment='fixed'
         bgColor='terciario'
      >
         <Stack
            maxW='1420px'
            h='100%'
            paddingInline={5}
            justify='flex-end'
            paddingBottom='60px'
            w='100%'
            pt={isMobile && "6.5em"}
            position='relative'
         >
            <Heading size='3xl' color='white' textShadow='md' zIndex={10}>
               {title}
            </Heading>
            <Text
               maxW='70ch'
               fontSize='lg'
               color='white'
               textShadow='sm'
               textAlign='justify'
               zIndex={10}
               css={{ textWrap: "pretty" }}
            >
               {text}
            </Text>
            <Stack
               position='absolute'
               height='100%'
               display={isMobile ? "flex" : "none"}
               top={0}
               w='100%'
               left={0}
               bgColor='terciario'
               mixBlendMode='multiply'
               zIndex={1}
            />
         </Stack>
      </Stack>
   );
};

export default Portada;
