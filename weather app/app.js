const ApiKey = `52eb57fc470888684a4173b56dbc5594`

const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`
    const response = await fetch(url);
    // console.log (response)
    const data = await response.json()
    // console.log(data)
    return showData(data)
}

const showData = (data) => {



    console.log(data)
    

    weather.innerHTML=`
    <div class="heading" id="weather">
    <h4>weather in city</h4>
    <h3>${data.main.temp}<span>&#176;</span>C</h3>

    
</div>
     <div class="infor" id="weather" >
    
        <img class="info" src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
          <h1>${data.weather[0].main}</h1>
    
</div>
<div class="other" id="weather">
    <h5> humidity:${data.main.humidity}
        <br>wind speed:${data.wind.speed}
    </h5>
    
    
</div>
    `
}

   
form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
