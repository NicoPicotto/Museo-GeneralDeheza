import { Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Container from "../Atoms/Container";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [isMobile] = useMediaQuery("(max-width: 1100px)");

    return (
        <Stack bgColor='terciario'>
            <Container alignSelf='center'>
                <Stack
                    justify='space-between'
                    direction={isMobile ? "column" : "row"}
                    align='center'
                >
                    <Text color='blanco' fontSize='sm'>
                        Museo General Deheza - {currentYear}
                    </Text>
                    <Text color='blanco' fontSize='sm'>
                        Todos los derechos reservados.
                    </Text>
                </Stack>
            </Container>
        </Stack>
    );
};

export default Footer;
