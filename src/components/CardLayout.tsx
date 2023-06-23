'use client';
import { Box, Button, Card, CardBody, CardHeader, CloseButton, Container, Divider, Heading, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { Edit, FolderOpen, Calendar, Timer } from 'lucide-react';
import ModalLayout from './ModalLayout';
import { useEffect, useState } from 'react';
import UpdateLayout from './UpdateLayout';

interface CardProps {
  handler: any;
  title: string;
  date: string;
  time: string;
  description: string;
}
const CardLayout = (props: CardProps) => {
  const truncatedDescription = props.description.length > 28 ? props.description.slice(0, 28) + '...' : props.description;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todos, setTodos] = useState([]);
  const [actionName, setActionName] = useState('');

  const getData = async () => {
    const res = await fetch('http://localhost:3000/api/todos', { next: { revalidate: 0 } });
    const json = await res.json();
    setTodos(json?.get || []);
  };

  useEffect(() => {
    getData();
  }, [todos]);

  const handleButtonClick = (name: string) => {
    setActionName(name);
    onOpen();
  };
  return (
    <>
      <Container my={4} w={'400px'} h={'200px'}>
        <Card w={'full'}>
          <CardHeader py={3} display={'flex'} justifyContent={'space-between'}>
            <Heading size="md">{props.title}</Heading>
            <CloseButton as={'button'} size="sm" onClick={props.handler} />
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
                  <Button onClick={() => handleButtonClick('edit')} name="edit" variant={'outline'} size={'sm'} rounded={'sm'} leftIcon={<Edit size={'20px'} />}>
                    Edit
                  </Button>
                  <Button onClick={() => handleButtonClick('detail')} name="detail" variant={'outline'} size={'sm'} rounded={'sm'} leftIcon={<FolderOpen size={'20px'} />}>
                    Detail
                  </Button>
                </Box>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Container>
      {actionName === 'edit' && <UpdateLayout isOpen={isOpen} onClose={onClose} />}
      {actionName === 'detail' &&
        todos.map((todo: any, index: number) => {
          return <ModalLayout isOpen={isOpen} onClose={onClose} key={index} title={todo.todos} date={todo.date} time={todo.time} description={todo.description} />;
        })}
    </>
  );
};

export default CardLayout;
