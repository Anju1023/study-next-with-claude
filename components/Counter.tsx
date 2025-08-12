import { useState } from 'react';

function Counter() {
	const [count, setCount] = useState<number>(0);
	const [message, setMessage] = useState<string>('まだ押されてないよ！');

	const handleClick = () => {
		const newCount = count + 1;
		setCount(newCount);

		if (newCount === 1) {
			setMessage('1回押されたよ～');
		} else if (newCount === 5) {
			setMessage('5回も押してくれてありがとう～');
		} else if (newCount === 10) {
			setMessage('10回！！すご！！');
		} else {
			setMessage(`${newCount}回押されたよ`);
		}
	};

	const resetCount = () => {
		setCount(0);
		setMessage('リセットされたよ～');
	};

	return (
		<div className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-lg m-4 max-w-md">
			<h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">
				カウンター
			</h3>

			<div className="text-center mb-4">
				<span className="text-4xl font-bold text-pink-600">{count}</span>
			</div>

			<p className="text-gray-700 mb-4 text-center min-h-[24px]">{message}</p>

			<div className="flex gap-3 justify-center">
				<button
					onClick={handleClick}
					className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
				>
					押して！
				</button>
				<button
					onClick={resetCount}
					className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
				>
					リセット
				</button>
			</div>
		</div>
	);
}

export default Counter;
