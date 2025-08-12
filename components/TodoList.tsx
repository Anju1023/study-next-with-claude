import { useState } from 'react';

type Todo = {
	id: number;
	text: string;
};

export default function TodoList() {
	const [todos, setTodos] = useState<Todo[]>([]);

	return (
		<div className="bg-blue-50 p-6 rounded-lg">
			<h2 className="text-xl font-bold mb-4">Todo管理(useState版)</h2>

			<div className="mb-4">
				<p>現在のtodo配列:</p>
				<pre className="bg-gray-100 p-2 rounded text-sm">
					{JSON.stringify(todos, null, 2)}
				</pre>
				<p>配列の長さ: {todos.length}個</p>
			</div>

			<button
				onClick={() => {
					const newTodo: Todo = {
						id: Date.now(),
						text: '手動で追加されたタスク',
					};

					setTodos([...todos, newTodo]);
				}}
				className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
			>
				テスト用: Todoを1個追加
			</button>
		</div>
	);
}
