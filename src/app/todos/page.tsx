'use client';
import { useRouter } from 'next/navigation';
import CardLayout from '@/components/CardLayout';
import { useEffect, useState } from 'react';

export const metadata = {
  title: 'Todo App | Todo',
  description: 'Todo Page',
};

const Todos = () => {
  const router = useRouter();
  const [todos, setTodos] = useState([]);

  const handleDelete = async (id: number) => {
    await fetch(`/api/todos?id=${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        console.log(res);
        router.refresh();
      })
      .catch((err) => {
        console.log('something error:' + err);
      });
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/api/todos', { next: { revalidate: 0 } });
      const json = await res.json();
      setTodos(json?.get || []);
    };

    getData();
  }, [todos]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {todos.map((todo: any, index: number) => {
        return (
          <CardLayout
            key={index}
            title={todo.todos}
            date={todo.date}
            time={todo.time}
            description={todo.description}
            handler={() => {
              handleDelete(todo.id);
            }}
          />
        );
      })}
    </section>
  );
};

export default Todos;
