import { Stack } from "@chakra-ui/react";

const Container = ({ children, ...props }) => (
  <Stack
    maxWidth="1920px"
    width="100%"
    mx="auto"
    {...props}
  >
    {children}
  </Stack>
);

export default Container;
