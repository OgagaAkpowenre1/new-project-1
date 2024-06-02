import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
	const [search, setSearch] = useState("");
 const [loading, setLoading] = useState(false);
 const [weatherData, setWeatherData]= useState(null);

 async function fetchWeatherData(param){
  setLoading(true)
  try {
   const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=c554dfbaeb084608b1dcd2a606796592`
		);
  const data = await response.json()
  if(data){
   console.log(data);
			console.log("it worked");
   setWeatherData(data);
   setLoading(false);
  }
  } catch (e) {
   setLoading(false);
   console.log(e);
  }
 }

 function getCurrentDate(){
  return new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    day : 'numeric',
    month : 'long',
    year: 'numeric'
  })
 }

  function handleSearch(){
   fetchWeatherData(search)
 }

 useEffect(() => {
  fetchWeatherData('Lagos');
 }, [])

	return (
		<div>
			<Search
				search={search}
				setSearch={setSearch}
				handleSearch={handleSearch}
			/>
			{loading ? (
				<div className="loading">Loading...</div>
			) : (
				<div>
					<div className="city-name">
						<h2>
							{weatherData?.name}, <span>{weatherData?.sys?.country}</span>
						</h2>
					</div>

					<div className="date">
						<span>{getCurrentDate()}</span>
					</div>

					<div className="temp">{weatherData?.main?.temp}</div>
					<p className="description">
						{weatherData && weatherData.weather && weatherData.weather[0]
							? weatherData.weather[0].description
							: ""}
					</p>

					<div className="weather-info">
						<div className="column">
							<div>
								<p className="wind">{weatherData?.wind?.speed}</p>
								<p>Wind Speed</p>
							</div>
						</div>

						<div className="column">
							<div>
								<p className="humidity">{weatherData?.main?.humidity}</p>
								<p>Humidity</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
