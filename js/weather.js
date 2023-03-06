
const API_KEYS=`d8aae2363e9a8de20ffd5ddf257bb277`;

const loadTemperature=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}&units=metric`;
    fetch(url)
    .then (res=>res.json())
    .then (data=>displayTemperature(data))
}
const displayTemperature=data=>{
    const temperature=document.getElementById('temperature')
    temperature.innerText=data.main.temp;
    const weather=document.getElementById('weather')
    weather.innerText=data.weather[0].main;
}
document.getElementById('search-btn').addEventListener('click', function(){
    const searchField=document.getElementById('search-field');
    const searchText=searchField.value;
    searchField.value='';
    // set city
    document.getElementById('city-name').innerText=searchText;
    loadTemperature(searchText);
})

loadTemperature('dhaka');


