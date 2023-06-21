import { Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { Calendar, Timer } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  time: string;
  description: string;
}

const ModalLayout = (props: ModalProps) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalHeader display="flex" alignItems="center" gap={1}>
          <Calendar size={'25px'} />
          {props.date}
        </ModalHeader>
        <ModalHeader display="flex" alignItems="center" gap={1}>
          <Timer size={'25px'} />
          {props.time}
        </ModalHeader>
        <Divider />
        <ModalCloseButton />
        <ModalBody>{props.description}</ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={props.onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalLayout;
