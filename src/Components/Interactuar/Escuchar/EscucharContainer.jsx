import { Stack, useMediaQuery, Grid, GridItem, Text } from "@chakra-ui/react";
import items from "./EscucharList";
import AudioCard from "./AudioPlayer";

const EscucharContainer = () => {
  const [isMobile] = useMediaQuery("(max-width: 1100px)");

  return (
    <Stack paddingTop='25px'>
      <Text pb={10} fontSize='lg' as="b" textAlign='justify'>
        Un puñado de vivencias.
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
            <AudioCard src={item.file} title={item.titulo} autor={item.autor} />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default EscucharContainer;
