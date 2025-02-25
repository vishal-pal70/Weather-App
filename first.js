
document.getElementById('search-btn').addEventListener('click', ()=>{
    
    const place = document.getElementById('city-input').value;


    function updateTemp(data){
       const result = document.getElementById('temperature');
       result.innerHTML = `${data.current.temp_c}°C`;
       const humidity = document.getElementById('humidity');
       humidity.innerHTML = `${data.current.humidity} % Humidity`
       const wind = document.getElementById('wind-speed');
       wind.innerHTML = `${data.current.wind_kph} km/h Wind Speed`
       const city = document.getElementById('city-name');
       city.innerHTML = `${data.location.name}`
    }



    const pro = fetch(`http://api.weatherapi.com/v1/current.json?key=aadcb463b2444d9db28135403250202&q=${place}&aqi=yes`)

    pro
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        updateTemp(data)
    })

    


})