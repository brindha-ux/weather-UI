async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = '8c450f64080ce2d65c2b6170590e749e';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("description").textContent = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("weatherCard").style.display = "block";
  } catch (error) {
    alert("Error fetching weather!");
    console.error(error);
  }
}
