'use client';
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Todo App |',
  description: 'Todo list App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
