import React from "react";
import { Stack, Heading, Text, Image, useMediaQuery } from "@chakra-ui/react";
import Portada from "../../Components/Atoms/Portada";
import Container from "../../Components/Atoms/Container";
import fondoPortada from "/assets/Portadas/tecnico.webp";
import fotos from "../../Components/Exhibiciones/ItapuList";
import SwiperExhibiciones from "../../Components/Exhibiciones/SwiperExhibiciones";

const ExhibicionTecnico = () => {
    const [isMobile] = useMediaQuery("(max-width: 1100px)");

    return (
        <Stack>
            <Portada
                title='Semana del Arte'
                text='Instituto Técnico Adrián P. Urquía.'
                img={fondoPortada}
            />
            <Container alignSelf='center' zIndex={5}>
                <Stack marginTop='-50px' spacing={5}>
                    <Stack
                        color='negro'
                        bgColor='white'
                        p={5}
                        borderRadius={10}
                        h='fit-content'
                        boxShadow='md'
                        mb={10}
                        textAlign='justify'
                    >
                        <Heading size='sm' color='primario'>
                            Texto Introductorio:{" "}
                        </Heading>
                        <Text
                            css={{
                                columnCount: isMobile ? 1 : 2,
                                columnGap: "40px",
                            }}
                            fontSize='md'
                        >
                            El espacio se puebla del imaginario del futuro
                            trazado por el ancestral dibujo, la línea madre de
                            las artes, se afirma y valora; educación,
                            comunicación y estética conviven y se potencian. La
                            mirada hacia un futuro, tal vez pluscuamperfecto,
                            recorre caminos sinuosos, llenos de contradicciones
                            y desesperanzas aunque brille la luz de cuando en
                            cuando. Conceptualmente, un final ominosamente negro
                            puede ser, contradictoriamente, el comienzo de todo.
                            Una obra resignifica la de al lado o la de enfrente
                            en contraposiciones, diálogos y confrontaciones,
                            visiones esperanzadas conviven con miradas burlonas,
                            complejas destacando la creatividad y la
                            imaginación. Pensar acerca de la educación, o la
                            superación del lienzo blanco, puntos de vista y
                            estéticas, no sólo mostrar, sino buscar diálogos de
                            la metáfora. Encuentro de instituciones que apoyan
                            el cruce entre arte y la población, decisión
                            valiente y riesgosa, expandir el espacio y el
                            tiempo, superar la cosificación del arte,
                            seleccionar obras en ejecución y proceso, valorizar
                            más el camino que la meta. “Lo vanguardista se apoya
                            en la mutación y el cambio, nada es permanente y
                            coexisten varios puntos de vista”.
                        </Text>
                    </Stack>
                    <SwiperExhibiciones fotos={fotos} />
                </Stack>
            </Container>
        </Stack>
    );
};

export default ExhibicionTecnico;
