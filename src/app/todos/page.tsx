'use client';

import CardLayout from '@/components/CardLayout';

export const metadata = {
  title: 'Todo App | Todo',
  description: 'Todo Page',
};

const Todos = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <CardLayout />
      <CardLayout />
      <CardLayout />
      <CardLayout />
      <CardLayout />
      <CardLayout />
    </section>
  );
};

export default Todos;
