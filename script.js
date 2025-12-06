async function getWeather(city) {
const apiKey = "YOUR_API_KEY";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const res = await fetch(url);
return res.json();
}
async function searchWeather() {
const city = document.getElementById("city").value;
const data = await getWeather(city);
document.getElementById("result").innerText =
  `${data.name}: ${data.main.temp}°C`;
}
