import { Button, Divider, FormControl, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from '@chakra-ui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  //   title: string;
  //   date: string;
  //   time: string;
  //   description: string;
}

const UpdateLayout = (props: ModalProps) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size={'lg'} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Todo's</ModalHeader>
        <Divider />
        <Divider />
        <ModalCloseButton />
        <ModalBody>
          <FormControl as={'form'}>
            <FormLabel mt={'2'}>Update Todo</FormLabel>
            <Input id="todoInput" variant={'filled'} type="text" name="todo" placeholder="What do you want to do...." size="sm" required />
            <FormHelperText>Update your todo</FormHelperText>
            <Divider mt={2} />
            <FormLabel mt={'2'}>Update Todo's Description</FormLabel>
            <Textarea id="descriptionInput" variant={'filled'} name="description" placeholder="Description...." size="sm" required />
            <Divider mt={2} />
            <FormLabel mt={'2'}>Update Date</FormLabel>
            <Input type="date" name="date" variant={'filled'} placeholder="Select date" size="sm" required />
            <FormHelperText>Select date for your todo</FormHelperText>
            <Divider mt={2} />
            <FormLabel mt={'2'}>Update Time</FormLabel>
            <Input type="time" name="time" variant={'filled'} placeholder="Select time" size="sm" required />
            <FormHelperText>Select time for your todo</FormHelperText>
            <Divider mt={2} />
            <Button my={'3'} variant={'outline'} type="submit" size="sm">
              Submit
            </Button>
          </FormControl>
        </ModalBody>
        <Divider />
        <ModalFooter display="flex" gap={2}>
          <Button variant="outline" onClick={props.onClose} size="sm" rounded="sm">
            Save
          </Button>
          <Button variant="outline" onClick={props.onClose} size="sm" rounded="sm">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateLayout;
