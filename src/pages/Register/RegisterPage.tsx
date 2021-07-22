import { Flex, Heading, Stack, FormControl, FormLabel, Input, Button, Box, Spinner } from '@chakra-ui/react';
import { Card, Form } from 'components';
import Alert from 'components/Alert';
import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom';
import { auth } from 'shared/config/firebase';
import { ROUTES } from 'shared/constants/ROUTES';
import { useForm } from 'shared/hooks/useForm';

const RegisterPage: React.FC = () => {
  const { push } = useHistory();
  const [values, handleChange] = useForm({
    email: '',
    password: ''
  });
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = values;
    createUserWithEmailAndPassword(email, password);
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
        <Heading>Register</Heading>
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
              Register
            </Button>
          </Stack>
        </Form>
      </Box>
    </Card>
  );
};

export default RegisterPage;
