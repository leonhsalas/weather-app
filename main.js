
const apiKey = "adcd29fe6b837bf7e07e35f4e77fe5a4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=adcd29fe6b837bf7e07e35f4e77fe5a4&units=metric&q=bangalore";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}}`);
    var data = await response.json();

    console.log(data);
}


checkWeather();