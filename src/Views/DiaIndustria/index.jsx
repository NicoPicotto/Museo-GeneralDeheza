import { Stack, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Container from "../../Components/Atoms/Container";
import events from "../../Components/DiaIndustria/DatosLineaIndustria";
import LineaIndustria from "../../Components/DiaIndustria/LineaIndustria";

const DiaIndustriaView = () => {
   const [isMobile] = useMediaQuery("(max-width: 1100px)");

   return (
      <Stack justify='center' bgColor='negro' minH='100vh'>
         <Container mt='6em' alignSelf='center'>
            <Stack
               maxW='1420px'
               h='100%'
               align='center'
               paddingInline={5}
               paddingBottom='1rem'
               w='100%'
               pt={isMobile && "6.5em"}
               position='relative'
               mt="-2rem"
            >
               <Heading size='xl' color='blanco' textShadow='md' zIndex={10}>
                  Industrias con 50 Años de Trayectoria
               </Heading>
               <Text
                  maxW='90ch'
                  fontSize='lg'
                  color='blanco'
                  textShadow='sm'
                  textAlign='center'
                  zIndex={10}
                  css={{ textWrap: "pretty" }}
               >
                  General Deheza tuvo sus pioneros, esas personas visionarias
                  que permitieron fundar las primeras industrias forjando así
                  los pilares fundamentales en el desarrollo continuo de nuestra
                  ciudad. En esta línea de tiempo, reconocemos a aquellas
                  industrias que con su esfuerzo y dedicación han marcado un
                  hito en nuestra historia, cumpliendo más de 50 años de
                  trayectoria.
               </Text>
            </Stack>
            <LineaIndustria events={events} />
         </Container>
      </Stack>
   );
};

export default DiaIndustriaView;
