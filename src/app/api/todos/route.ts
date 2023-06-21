import { prisma } from '@/lib/prisma';
import { Data } from '@/types/dataTypes';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const get = await prisma.todos.findMany();
  return NextResponse.json({ get });
};

export const POST = async (req: NextRequest) => {
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

export const DELETE = async (req: NextRequest) => {
  const url = new URL(req.url).searchParams;
  const id = Number(url.get('id')) || 0;
  try {
    await prisma.todos.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ success: 200 });
  } catch (error) {
    console.log('something error:', error);
    return NextResponse.json({ success: 500 });
  }
};

export const UPDATE = async (req: NextRequest) => {
  const { todos, date, time, description, id } = await req.json();
  try {
    await prisma.todos.update({
      where: {
        id,
      },
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
