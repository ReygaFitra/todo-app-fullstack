'use client';

import CardLayout from '@/components/CardLayout';

export const metadata = {
  title: 'Todo App | Todo',
  description: 'Todo Page',
};

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/todos', { next: { revalidate: 0 } });
  const json = await res.json();
  return json;
};

const Todos = async () => {
  const todos = await getData();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {todos?.get?.map((todo: any, index: number) => {
        return <CardLayout key={index} title={todo.todos} date={todo.date} time={todo.time} description={todo.description} />;
      })}
    </section>
  );
};

export default Todos;
