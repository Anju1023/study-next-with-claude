function WeatherCard() {
	return (
		<div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg m-4 max-w-md">
			<h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">
				天気予報 ☁️
			</h3>

			<div className="bg-white/50 rounded-lg p-4 text-center">
				<h4 className="text-lg font-bold text-purple-800 mb-2">東京</h4>
				<div className="text-5xl mb-2">☀️</div>
				<div className="text-4xl font-bold text-blue-600 mb-2">22℃</div>
				<div className="text-lg text-gray-700">晴れ</div>
			</div>
		</div>
	);
}
export default WeatherCard;
