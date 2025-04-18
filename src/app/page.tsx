'use client';

import { useEffect, useState } from 'react';
import axios from '@/utils/axios';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);
	const [title, setTitle] = useState('');

	useEffect(() => {
		axios
			.get('/todos')
			.then((res) => setTodos(res.data))
			.catch((err) => {
				console.error(
					'Error fetching todos:',
					err.response?.data || err.message
				);
			});
	}, []);

  console.log(todos)

	// const addTodo = async () => {
	// 	const res = await axios.post('/todos', { title });
	// 	setTodos([...todos, res.data]);
	// 	setTitle('');
	// };

  return (
		<main>
			<div className="p-4">
				<h1 className="text-2xl font-bold">Todo List</h1>
				<div className="my-4 flex gap-2">
					<input
						className="border p-2"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Add a todo"
					/>
					{/* <button
						onClick={addTodo}
						className="bg-blue-500 text-white px-4 py-2"
					>
						Add
					</button> */}
				</div>
				<ul>
					{todos.map((todo) => (
						<li key={todo.id} className="my-2">
							✅ {todo.title}
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
