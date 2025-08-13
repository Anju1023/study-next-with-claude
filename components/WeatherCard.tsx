import { useEffect, useState } from 'react';

function WeatherCard() {
	const [weather, setWeather] = useState<string>('☀️');
	const [temp, setTemp] = useState<number>(22);
	const [city, setCity] = useState<string>('東京');
	const [inputCity, setInputCity] = useState<string>('');

	useEffect(() => {
		console.log('WeatherCardが表示されました〜');

		fetchWeather('Tokyo');
	}, []);

	const changeSunny = () => {
		setWeather('☀️');
		setTemp(25);
	};

	const changeRainy = () => {
		setWeather('🌧️');
		setTemp(18);
	};

	const changeSnowy = () => {
		setWeather('❄️');
		setTemp(2);
	};

	// 曇りに変える
	const changeCloudy = () => {
		setWeather('☁️');
		setTemp(20);
	};

	// 都市名を入力
	const changeCity = () => {
		if (inputCity.trim() === '') {
			alert('都市名を入力してねえ');
			return;
		}
		fetchWeather(inputCity);
		setCity(inputCity);
		setInputCity('');
	};

	const fetchWeather = (cityName: string) => {
		console.log(`${cityName}の転機を取得中...`);

		fetch(`https://wttr.in/${cityName}?format=j1`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('天気データが取得できませんでした');
				}
				return response.json();
			})
			.then((data) => {
				console.log(`${cityName}の天気データが来た！`, data);

				const currentWeather = data.current_condition[0];
				const temp = currentWeather.temp_C;
				const desc = currentWeather.weatherDesc[0].value;

				alert(`${cityName}の現在の天気: ${desc}、気温: ${temp}℃`);

				setTemp(parseInt(temp));

				const lowerDesc = desc.toLowerCase();

				if (lowerDesc.includes('sunny') || lowerDesc.includes('Clear')) {
					setWeather('☀️');
				} else if (lowerDesc.includes('rain') || lowerDesc.includes('shower')) {
					setWeather('🌧️');
				} else if (
					lowerDesc.includes('partly cloudy') ||
					lowerDesc.includes('partly cloud')
				) {
					setWeather('⛅');
				} else if (
					lowerDesc.includes('cloudy') ||
					lowerDesc.includes('cloud') ||
					lowerDesc.includes('overcast')
				) {
					setWeather('☁️');
				} else if (
					lowerDesc.includes('snow') ||
					lowerDesc.includes('blizzard')
				) {
					setWeather('❄️');
				} else if (lowerDesc.includes('fog') || lowerDesc.includes('mist')) {
					setWeather('🌫️');
				} else {
					setWeather('🌤️');
				}
			})
			.catch((error) => {
				console.log(`${cityName}の天気データの取得に失敗しました`);
			});
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
				<h4 className="text-lg font-bold text-purple-800 mb-2">📍 {city}</h4>
				<div className="text-5xl mb-2">{weather}</div>
				<div className="text-4xl font-bold text-blue-600 mb-2">{temp}℃</div>
				<div className="text-lg text-gray-700 mb-4">晴れ</div>

				<div>
					<button
						onClick={changeSunny}
						className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg text-sm"
					>
						☀️ 晴れ
					</button>
					<button
						onClick={changeCloudy}
						className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm"
					>
						☁️ 曇り
					</button>
					<button
						onClick={changeSunny}
						className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm"
					>
						🌧️ 雨
					</button>
					<button
						onClick={changeSunny}
						className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 rounded-lg text-sm"
					>
						❄️ 雪
					</button>
				</div>
			</div>
		</div>
	);
}
export default WeatherCard;
