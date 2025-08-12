interface HelloProps {
	name: string;
	age: number;
}

function Hello({ name, age }: HelloProps) {
	return (
		<div className="p-6 border border-pink-200 m-4 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg">
			<h2 className="text-2xl font-bold text-pink-600 mb-3">
				こんにちは、{name}さん！
			</h2>
			<p className="text-gray-700 mb-2 text-lg">年齢：{age}歳</p>
			<p className="text-purple-500 font-medium">Next.js楽しい</p>
		</div>
	);
}

export default Hello;
