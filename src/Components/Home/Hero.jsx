import {
   Stack,
   Heading,
   Button,
   Box,
   Link,
   useMediaQuery,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import heroImg from "/assets/Home/hero.jpg";
import Container from "../Atoms/Container";

const Hero = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack
         align='center'
         backgroundImage={heroImg}
         bgPos='center'
         backgroundSize='cover'
         paddingTop='5em'
         height='100vh'
      >
         <Stack
            position='absolute'
            height='100%'
            top={0}
            w={isMobile ? "100%" : "50%"}
            left={0}
            bgColor='terciario'
            mixBlendMode='multiply'
         />
         <Container
            h='100%'
            justify='center'
            paddingInline={isMobile ? 5 : 0}
            paddingBlock={isMobile ? 5 : 0}
         >
            <Stack
               maxW={!isMobile && "70ch"}
               position='relative'
               h='100%'
               justify='center'
            >
               <Stack p={10}>
                  <Heading
                     color='blanco'
                     size='2xl'
                     textAlign={isMobile && "center"}
                     lineHeight='1.2'
                     textShadow='2px 2px 5px #4C5249'
                     marginBottom={5}
                     zIndex={5}
                  >
                     Bienvenidos al Museo de General Deheza
                  </Heading>
                  <Stack direction={isMobile ? "column" : "row"}>
                     <Button
                        position='relative'
                        overflow='hidden'
                        bgColor='blanco'
                        color='terciario'
                        cursor='pointer'
                        width={isMobile ? "100%" : "40%"}
                        shadow='md'
                        _hover={{ bgColor: "secundario" }}
                     >
                        <Link as={ReachLink} to='/coleccion'>
                           <Stack
                              spacing={0}
                              position='absolute'
                              top='0'
                              left='0'
                              right='0'
                              height='200%'
                              transition='transform 0.3s'
                              _hover={{ transform: "translateY(-50%)" }}
                           >
                              {/* Original Text */}
                              <Box
                                 height='100%'
                                 display='flex'
                                 alignItems='center'
                                 justifyContent='center'
                              >
                                 Conocé más
                              </Box>
                              <Box
                                 height='100%'
                                 display='flex'
                                 alignItems='center'
                                 justifyContent='center'
                                 color='primario'
                              >
                                 Explorá ahora
                              </Box>
                           </Stack>
                        </Link>
                     </Button>
                     <Button
                        position='relative'
                        overflow='hidden'
                        bgColor='transparent'
                        borderColor='blanco'
                        borderWidth={1}
                        color='blanco'
                        width={isMobile ? "100%" : "40%"}
                        shadow='md'
                        fontWeight='normal'
                        _hover={{
                           bgColor: "secundario",
                           borderColor: "transparent",
                        }}
                     >
                        <Link as={ReachLink} to='/visita'>
                           <Stack
                              spacing={0}
                              position='absolute'
                              top='0'
                              left='0'
                              right='0'
                              height='200%'
                              transition='transform 0.3s'
                              _hover={{ transform: "translateY(-50%)" }}
                           >
                              {/* Original Text */}
                              <Box
                                 height='100%'
                                 display='flex'
                                 alignItems='center'
                                 justifyContent='center'
                              >
                                 Quiero hacer una visita
                              </Box>
                              <Box
                                 height='100%'
                                 display='flex'
                                 alignItems='center'
                                 justifyContent='center'
                                 color='primario'
                              >
                                 Mirá nuestros datos
                              </Box>
                           </Stack>
                        </Link>
                     </Button>
                  </Stack>
                  <Stack direction={isMobile ? "column" : "row"}>
                     <Button
                        position='relative'
                        overflow='hidden'
                        bgColor='transparent'
                        borderColor='blanco'
                        borderWidth={1}
                        color='blanco'
                        width={isMobile ? "100%" : "81.5%"}
                        shadow='md'
                        fontWeight='normal'
                        _hover={{
                           bgColor: "secundario",
                           borderColor: "transparent",
                        }}
                     >
                        <Link as={ReachLink} to='/dia-industria'>
                           <Stack
                              spacing={0}
                              position='absolute'
                              top='0'
                              left='0'
                              right='0'
                              height='200%'
                              transition='transform 0.3s'
                              _hover={{ transform: "translateY(-50%)" }}
                           >
                              {/* Original Text */}
                              <Box
                                 height='100%'
                                 display='flex'
                                 alignItems='center'
                                 justifyContent='center'
                              >
                                 Línea de tiempo de nuestras industrias
                              </Box>
                              <Box
                                 height='100%'
                                 display='flex'
                                 alignItems='center'
                                 justifyContent='center'
                                 color='primario'
                              >
                                 Con más de 50 años de trayectoria 🏭
                              </Box>
                           </Stack>
                        </Link>
                     </Button>
                  </Stack>
               </Stack>
            </Stack>
         </Container>
      </Stack>
   );
};

export default Hero;
