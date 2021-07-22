import { Box, BoxProps, StylesProvider, useMultiStyleConfig } from '@chakra-ui/react';
import React from 'react';

type Props = BoxProps & {
  children: React.ReactNode;
};
const Card: React.FC<Props> = ({ children, ...props }: Props) => {
  const styles = useMultiStyleConfig('Card', {});
  return (
    <Box __css={styles} {...props}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
};

export default Card;
