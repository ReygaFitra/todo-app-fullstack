import { prisma } from '@/lib/prisma';
import { Data } from '@/types/dataTypes';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const get = await prisma.todos.findMany();
  return NextResponse.json({ get });
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { todos, date, time, description } = await req.json();
  try {
    await prisma.todos.create({
      data: {
        todos,
        date,
        time,
        description,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log('something error:', error);
    return NextResponse.json({ success: false });
  }
};

export const DELETE = async (req: NextRequest, id: number) => {
  try {
    await prisma.todos.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log('something error:', error);
    return NextResponse.json({ success: false });
  }
};

export const UPDATE = async (req: NextRequest, data: Data, id: number) => {
  try {
    await prisma.todos.update({
      where: {
        id: id,
      },
      data: {
        todos: data.todos,
        date: data.date,
        time: data.time,
        description: data.description,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log('something error:', error);
    return NextResponse.json({ success: false });
  }
};
