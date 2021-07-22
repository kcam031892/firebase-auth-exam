import { Flex } from '@chakra-ui/react';
import Header from 'components/Header';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Flex justifyContent='center' marginTop={16} px={8}>
        {children}
      </Flex>
    </>
  );
};

export default Layout;
