import React, { useState, useMemo } from 'react';
import { Card } from 'components';
import { Box, Button, Flex, Heading, Stack } from '@chakra-ui/react';

const CounterPage: React.FC = () => {
  const [count, setCount] = useState(0);
  const isButtonDisabled = useMemo(() => {
    return count <= 0 ? true : false;
  }, [count]);
  return (
    <Card>
      <Box>
        <Heading textAlign='center'>Counter</Heading>
        <Flex alignItems='center' justifyContent='center' my={4}>
          <Heading>{count}</Heading>
        </Flex>
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={4}>
          <Button width='200px' disabled={isButtonDisabled} onClick={() => setCount((count) => (count -= 1))}>
            -
          </Button>
          <Button width='200px' onClick={() => setCount((count) => (count += 1))}>
            +
          </Button>
        </Stack>
      </Box>
    </Card>
  );
};

export default CounterPage;
