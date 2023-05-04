


let key = 'Your API  Key';


let btn = document.getElementById('btn');
btn.addEventListener('click',getWeather)

function getWeather(){
    let city = document.getElementById('input-box').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`).then(res=>res.json()).then(data =>{
        console.log(data);
        if(data['cod'] == '200'){
            let html = `<div class="col-12 d-flex  weather-content">
                            <div class="col-6 img-box">
                                <img src="./icons/coludy.jpg" alt="">
                            </div>
                            <div class="col-6 d-flex align-items-center justify-content-center flex-column weather-box">
                                <h2>${(data['main']['temp']-273.15).toString().substring(0,2)}</h2>
                                <p>${data['weather'][0]['main']}</p>
                                <p>${data['name']}</p>
                            </div>
                        </div>`
            document.getElementById('error').innerHTML = ''
            document.getElementById('right').innerHTML  = html
        }else{
            document.getElementById('error').innerHTML = data['message'];
            document.getElementById('right').innerHTML = '';
    }});

}


