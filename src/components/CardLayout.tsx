'use client';
import { Box, Button, Card, CardBody, CardHeader, CloseButton, Container, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import { Edit, FolderOpen, Calendar, Timer } from 'lucide-react';

interface CardProps {
  title: string;
  date: string;
  time: string;
  description: string;
}
const CardLayout = (props: CardProps) => {
  const truncatedDescription = props.description.length > 28 ? props.description.slice(0, 28) + '...' : props.description;
  return (
    <Container my={4} w={'400px'} h={'200px'}>
      <Card w={'full'}>
        <CardHeader py={3} display={'flex'} justifyContent={'space-between'}>
          <Heading size="md">{props.title}</Heading>
          <CloseButton size="sm" />
        </CardHeader>
        <CardBody>
          <Divider />
          <Stack>
            <Box>
              <Heading size="sm" py={2} textTransform="uppercase" display="flex" alignItems="center" gap={1}>
                <Calendar size={'15px'} />
                {props.date}
              </Heading>
              <Heading size="xs" textTransform="uppercase" display="flex" alignItems="center" gap={1}>
                <Timer size={'15px'} />
                {props.time}
              </Heading>
              <Text pt="2" fontSize="sm">
                {truncatedDescription}
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
