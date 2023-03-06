
const API_KEYS=`d8aae2363e9a8de20ffd5ddf257bb277`;

const weatherData=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}`;
    fetch(url)
    .then (res=>res.json())
    .then (data=>console.log(data))
}
weatherData();


