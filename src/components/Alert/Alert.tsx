import { Box, AlertIcon, Alert as ChakraAlert } from '@chakra-ui/react';
import React from 'react';

type Props = {
  isShowing: boolean;
  text: string | undefined;
};

const Alert: React.FC<Props> = ({ isShowing, text }: Props) => {
  return isShowing ? (
    <Box my={4}>
      <ChakraAlert status='error'>
        <AlertIcon />
        {text}
      </ChakraAlert>
    </Box>
  ) : (
    <></>
  );
};

export default Alert;
