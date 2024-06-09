import React, { useState } from "react";
import {
  Stack,
  Heading,
  useMediaQuery,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Grid,
  GridItem,
  Button,
  Divider,
} from "@chakra-ui/react";
import items from "./LeerList";
import { BiSolidUser, BiSolidPurchaseTag } from "react-icons/bi";

const LeerContainer = () => {
  const [isMobile] = useMediaQuery("(max-width: 1100px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleOpenModal = (piece) => {
    setSelectedPiece(piece);
    onOpen();
  };

  return (
    <Stack paddingTop='25px'>
      <Text pb={2} fontSize='lg' textAlign='justify'>
        Para volver en el tiempo, a través de nuestra página nos pareció
        oportuno poder conocer el aporte realizado por Docentes y Alumnos de la
        Escuela “Martín Güemes” en el año 1987, dedicado a General Deheza y su
        gente.
      </Text>
      <Text pb={2} fontSize='lg' textAlign='justify'>
        Así como cada persona tiene su historia, también un pueblo tiene la
        suya... y no hay mejor punto de partida que el testimonio de los
        verdaderos hacedores de esa historia. Porque fueron ellos, nativos e
        inmigrantes, los dos barros que se conjugaron para escribir la historia
        de nuestra comunidad.
      </Text>
      <Text pb={10} fontSize='lg' textAlign='justify'>
        Estos relatos se realizaron en el año 1987 y son publicados en 2024,
        puede que quienes hablan en presente, en la actualidad ya no nos
        acompañen físicamente; pero agradecemos inmensamente su legado a ellos y
        a sus familias.
      </Text>
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
              <Heading size='md' color='primario' textAlign='left'>
                {item.titulo}
              </Heading>

              <Divider borderColor='cuarto' />
              <Stack>
                <Text
                  textAlign='left'
                  lineHeight={1.2}
                  fontSize={isMobile ? "lg" : "md"}
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    WebkitLineClamp: 5,
                  }}
                >
                  {item.contenido}
                </Text>
              </Stack>
              <Button
                bgColor='primario'
                mt={3}
                color='fondo'
                width={isMobile ? "100%" : "fit-content"}
                _hover={{ bgColor: "terciario" }}
                onClick={() => handleOpenModal(item)}
              >
                Leer más
              </Button>
            </Stack>
          </GridItem>
        ))}
      </Grid>

      {selectedPiece && (
        <Modal isOpen={isOpen} onClose={onClose} size={isMobile && "full"}>
          <ModalOverlay backdropFilter='blur(5px)' />
          <ModalContent p={3} maxW={!isMobile && "800px"} h='auto'>
            <ModalCloseButton />
            <ModalBody paddingBlock={5}>
              <Stack>
                <Heading size='md'>{selectedPiece.titulo}</Heading>
                <Text as='b' color='terciario' mb={2}>
                  {selectedPiece.autor}
                </Text>
                <Divider borderColor='cuarto' />
                <Text
                  textAlign='justify'
                  whiteSpace='pre-line'
                  fontSize={isMobile ? "lg" : "md"}
                >
                  {selectedPiece.contenido}
                </Text>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Stack>
  );
};

export default LeerContainer;
