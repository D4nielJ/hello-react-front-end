import { Flex, Button, Text, VStack, Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { entities, loading, error } = useSelector((state) => state.greeting);
  const greeting = entities[0];

  useEffect(() => {
    if (entities.length === 0 && loading === 'idle') {
      dispatch(fetchGreeting());
    }
  }, [dispatch, entities, loading]);
  <Box>
    <VStack
      bgColor='gray.900'
      p={10}
      minWidth={{ base: 0, md: 'container.md' }}
      spacing={8}
    >
      <Text color='gray.400'>{greeting}</Text>
      <Button
        onClick={() => {
          dispatch(fetchGreeting());
        }}
      >
        New
      </Button>
    </VStack>
  </Box>;
  return (
    <Flex
      position='relative'
      h='100vh'
      w='100%'
      bgImage="url('/assets/images/sea.jpg')"
      bgPosition='center 80%'
      bgRepeat='no-repeat'
      justify='center'
      alignItems='center'
    >
      <Box
        position='absolute'
        bgColor='black'
        minWidth='100%'
        minHeight='100vh'
        opacity='80%'
      />
      <VStack
        position='relative'
        bgColor='gray.700'
        bgGradient='linear-gradient(to bottom, #0f2027, #203a43, #2c5364)'
        px={10}
        py={20}
        w={{ base: '100%', md: 'container.md' }}
        minH={80}
        spacing={12}
        rounded={12}
      >
        <Button
          bgColor='gray.900'
          color='gray.400'
          _hover={{ bgColor: 'gray.800' }}
          _active={{ bgColor: 'gray.600' }}
          onClick={() => {
            dispatch(fetchGreeting());
          }}
        >
          New
        </Button>
        <Text
          color='gray.400'
          fontWeight='bold'
          fontSize='xl'
          textAlign='center'
        >
          {greeting}
        </Text>
      </VStack>
    </Flex>
  );
};

export default Greeting;
