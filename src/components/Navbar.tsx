import { Button, Divider, Stack } from '@chakra-ui/react';
import { Home, StickyNote } from 'lucide-react';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 shadow-sm z-10 bg-white">
      <div className="flex justify-center">
        <Stack direction="row" h="60px" p={4} display="flex">
          <NextLink href={'/'}>
            <Button variant={'ghost'} size={'sm'} rounded={'sm'} leftIcon={<Home size={'20px'} />}>
              Home
            </Button>
          </NextLink>
          <Divider orientation="vertical" />
          <NextLink href={'/todos'}>
            <Button variant={'ghost'} size={'sm'} rounded={'sm'} leftIcon={<StickyNote size={'20px'} />}>
              Todo List
            </Button>
          </NextLink>
        </Stack>
      </div>
    </nav>
  );
};

export default Navbar;
