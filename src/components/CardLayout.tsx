'use client';
import { Box, Button, Card, CardBody, CardHeader, CloseButton, Container, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import { Edit, FolderOpen } from 'lucide-react';
const CardLayout = () => {
  return (
    <Container my={4} w={'400px'} h={'200px'}>
      <Card w={'full'}>
        <CardHeader py={3} display={'flex'} justifyContent={'space-between'}>
          <Heading size="md">Todo List Title</Heading>
          <CloseButton size="sm" />
        </CardHeader>
        <CardBody>
          <Divider />
          <Stack>
            <Box>
              <Heading size="sm" py={2} textTransform="uppercase">
                Todo List Date
              </Heading>
              <Heading size="xs" textTransform="uppercase">
                Todo List Time
              </Heading>
              <Text pt="2" fontSize="sm">
                Todo List Description
              </Text>
              <Box mt={1} display={'flex'} gap={2} justifyContent={'end'}>
                <Button variant={'outline'} size={'sm'} rounded={'sm'} leftIcon={<Edit size={'20px'} />}>
                  Edit
                </Button>
                <Button variant={'outline'} size={'sm'} rounded={'sm'} leftIcon={<FolderOpen size={'20px'} />}>
                  Detail
                </Button>
              </Box>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CardLayout;
