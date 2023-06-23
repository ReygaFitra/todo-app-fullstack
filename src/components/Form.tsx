import { Button, Card, CardBody, Container, Divider, FormControl, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Form = () => {
  const [todos, setTodos] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setIsLoading(true);
    await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todos: formData.get('todo'),
        description: formData.get('description'),
        date: formData.get('date'),
        time: formData.get('time'),
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('something error:' + err);
      });
    setIsLoading(false);
    router.push('/todos');
  };

  return (
    <Container mt={4}>
      <FormControl as="form" onSubmit={handleSubmit}>
        <Card>
          <CardBody>
            <FormLabel mt={'2'}>Add Todo</FormLabel>
            <Input id="todoInput" variant={'filled'} type="text" name="todo" value={todos} onChange={(e) => setTodos(e.target.value)} placeholder="What do you want to do...." size="sm" required />
            <FormHelperText>Add your todo</FormHelperText>
            <Divider mt={2} />
            <FormLabel mt={'2'}>Add Todo's Description</FormLabel>
            <Textarea id="descriptionInput" variant={'filled'} name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description...." size="sm" required />
            <Divider mt={2} />
            <FormLabel mt={'2'}>Date</FormLabel>
            <Input type="date" name="date" variant={'filled'} value={date} onChange={(e) => setDate(e.target.value)} placeholder="Select date" size="sm" required />
            <FormHelperText>Select date for your todo</FormHelperText>
            <Divider mt={2} />
            <FormLabel mt={'2'}>Time</FormLabel>
            <Input type="time" name="time" variant={'filled'} value={time} onChange={(e) => setTime(e.target.value)} placeholder="Select time" size="sm" required />
            <FormHelperText>Select time for your todo</FormHelperText>
            <Divider mt={2} />
            <Button my={'3'} variant={'outline'} type="submit" isLoading={isLoading} loadingText="Submitting" spinnerPlacement="end">
              Submit
            </Button>
          </CardBody>
        </Card>
      </FormControl>
    </Container>
  );
};

export default Form;
