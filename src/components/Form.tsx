import { Button, Card, CardBody, Container, Divider, FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react';

const Form = () => {
  return (
    <Container mt={4}>
      <FormControl>
        <Card>
          <CardBody>
            <FormLabel mt={'2'}>Add Todo</FormLabel>
            <Input type="text" name="todo" placeholder="what do you want to do...." size={'sm'} />
            <FormHelperText>Add your todo</FormHelperText>
            <br />
            <Divider />
            <FormLabel mt={'2'}>Add Todo</FormLabel>
            <Input type="date" name="date" placeholder="what do you want to do...." size={'sm'} />
            <FormHelperText>Add your todo</FormHelperText>
            <br />
            <Divider />
            <FormLabel mt={'2'}>Add Todo</FormLabel>
            <Input type="time" name="time" placeholder="what do you want to do...." size={'sm'} />
            <FormHelperText>Add your todo</FormHelperText>
            <br />
            <Divider />
            <Button my={'3'} variant={'outline'} type="submit">
              Submit
            </Button>
          </CardBody>
        </Card>
      </FormControl>
    </Container>
  );
};

export default Form;
