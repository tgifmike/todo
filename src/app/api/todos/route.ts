import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
	try {
const todos = await prisma.Todo.findMany();
	return NextResponse.json(todos);
	} catch (error) {
		 console.error('[GET /api/todos]', error);
			return NextResponse.json(
				{ error: 'Internal Server Error' },
				{ status: 500 }
			);
	 }
	
}

export async function POST(req: Request) {
	const body = await req.json();
	const todo = await prisma.todo.create({
		data: {
			title: body.title,
		},
	});
	return NextResponse.json(todo);
}
