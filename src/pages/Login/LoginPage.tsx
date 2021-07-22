import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Spinner, Stack } from '@chakra-ui/react';
import { Card, Form } from 'components';
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'shared/hooks/useForm';
import { auth } from 'shared/config/firebase';
import Alert from 'components/Alert';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';

const LoginPage: React.FC = () => {
  const { push } = useHistory();
  const [values, handleChange] = useForm({
    email: '',
    password: ''
  });
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = values;
    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      return push(ROUTES.HOME);
    }
  }, [user, push]);

  return (
    <Card>
      <Flex direction='column' alignItems='center'>
        {loading && <Spinner size='lg' marginBottom={4} />}
        <Heading>Login Page</Heading>
      </Flex>
      <Box width='100%'>
        {error && <Alert isShowing={!!error} text={error?.message} />}
        <Form onSubmit={onSubmit}>
          <Stack direction='column' spacing={8}>
            <FormControl id='email-address' isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                type='email'
                placeholder='Email Address'
                name='email'
                value={values.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                placeholder='Password'
                name='password'
                value={values.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button colorScheme='twitter' type='submit' disabled={loading}>
              Login
            </Button>
          </Stack>
        </Form>
      </Box>
    </Card>
  );
};

export default LoginPage;
