import { Heading } from '@chakra-ui/react';
import { Card } from 'components';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Card>
      <Heading as='h3' fontSize='20px'>
        Welcome to Digital Doors Software Solutions Inc.
      </Heading>
    </Card>
  );
};

export default HomePage;
