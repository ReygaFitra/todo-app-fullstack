import { Button, Divider, Stack } from '@chakra-ui/react';
import { Home, StickyNote } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 shadow-sm z-10">
      <div className="flex justify-center">
        <Stack direction="row" h="60px" p={4} display="flex">
          <Link href={'/'}>
            <Button variant={'ghost'} size={'sm'} rounded={'sm'} leftIcon={<Home size={'20px'} />}>
              Home
            </Button>
          </Link>
          <Divider orientation="vertical" />
          <Link href={'/todos'}>
            <Button variant={'ghost'} size={'sm'} rounded={'sm'} leftIcon={<StickyNote size={'20px'} />}>
              Todo List
            </Button>
          </Link>
        </Stack>
      </div>
    </nav>
  );
};

export default Navbar;
