import { useState } from 'react';

type Todo = {
	id: number;
	text: string;
};

// 関数
export default function TodoList() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [inputText, setInputText] = useState<string>('');

	// これはアロー関数
	const addTodo = () => {
		if (inputText.trim() === '') {
			alert('何か入力してね～');
			return;
		}

		const newTodo: Todo = {
			id: Date.now(),
			text: inputText,
		};

		setTodos([...todos, newTodo]);
		setInputText('');
	};

	// 削除機能
	const deleteTodo = (deleteId: number) => {
		const newTodos = todos.filter((todo) => todo.id !== deleteId);
		setTodos(newTodos);
	};

	return (
		<div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6  border border-pink-200 rounded-lg">
			<h2 className="text-xl text-purple-700 font-bold mb-4">
				Todo管理(入力付き)
			</h2>

			<div className="mb-4 flex gap-2">
				<input
					type="text"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
					placeholder="新しいタスクを入力してねえ～"
					className="flex-1 px-3 py-2 border rounded"
				/>

				<button
					onClick={addTodo}
					className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
				>
					追加
				</button>
			</div>

			<div className="mb-4 text-sm">
				<p>入力中の文字: 「{inputText}」</p>
				<p>Todo数: {todos.length}個</p>
			</div>

			<div>
				<h3 className="font-bold mb-2">Todo一覧:</h3>
				{todos.map((todo) => (
					<div
						key={todo.id}
						className="bg-white p-2 mb-1 rounded border flex justify-between items-center"
					>
						<span>{todo.text}</span>
						<button
							onClick={() => deleteTodo(todo.id)}
							className="text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded text-sm font-bold"
						>
							×
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
