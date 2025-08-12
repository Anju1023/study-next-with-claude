import { useEffect, useState } from 'react';

function WeatherCard() {
	const [weather, setWeather] = useState<string>('☀️');
	const [temp, setTemp] = useState<number>(22);
	const [city, setCity] = useState<string>('東京');
	const [inputCity, setInputCity] = useState<string>('');

	useEffect(() => {
		console.log('WeatherCardが表示されました〜');
		alert('useEffectが動いたよ〜');
	}, []);

	// 曇りに変える
	const changeWeather = () => {
		setWeather('☁️');
		setTemp(18);
	};

	// 都市名を入力
	const changeCity = () => {
		if (inputCity.trim() === '') {
			alert('都市名を入力してねえ');
			return;
		}
		setCity(inputCity);
		setInputCity('');
	};

	return (
		<div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg m-4 max-w-md">
			<h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">
				天気予報 ☁️
			</h3>

			<div>
				<input
					type="text"
					value={inputCity}
					onChange={(e) => setInputCity(e.target.value)}
					placeholder="都市名を入力してね"
					className="flex-1 px-3 py-2 border border-purple-200 rounded-lg"
				/>
				<button
					onClick={changeCity}
					className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 ml-2 rounded-lg"
				>
					変更
				</button>
			</div>

			<div className="bg-white/50 rounded-lg p-4 text-center">
				<h4 className="text-lg font-bold text-purple-800 mb-2">{city}</h4>
				<div className="text-5xl mb-2">{weather}</div>
				<div className="text-4xl font-bold text-blue-600 mb-2">{temp}℃</div>
				<div className="text-lg text-gray-700 mb-4">晴れ</div>
				<button
					onClick={changeWeather}
					className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
				>
					曇りにして！！
				</button>
			</div>
		</div>
	);
}
export default WeatherCard;
