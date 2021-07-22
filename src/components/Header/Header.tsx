import { Box, Button, Container, Stack } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import { ROUTES } from 'shared/constants/ROUTES';
import { useFirebaseAuth } from 'shared/hooks/useFirebaseAuth';
import { auth } from 'shared/config/firebase';

const Header: React.FC = () => {
  const { push } = useHistory();
  const { user } = useFirebaseAuth();
  const handleLogout = async () => {
    await auth.signOut();
    return push(ROUTES.ROOT);
  };
  return (
    <Box bgColor='blackAlpha.800' py={4}>
      <Container maxW='container.xl'>
        <Stack direction='row' spacing={8}>
          {user ? (
            <>
              <Button as={Link} to={ROUTES.HOME} colorScheme='orange'>
                Home
              </Button>
              <Button onClick={handleLogout} colorScheme='orange'>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button as={Link} to={ROUTES.LOGIN} colorScheme='orange'>
                Login
              </Button>
              <Button as={Link} to={ROUTES.REGISTER} colorScheme='orange'>
                Register
              </Button>
            </>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
