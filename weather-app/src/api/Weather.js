
import axios from 'axios';


const baseURL = "http://api.openweathermap.org/";
const apiKey = "5d580e44ba6e4c6f717d103b0ed5a4f1";


//function getWeatherByCity(city) {
//  axios.get(baseURL+'data/2.5/weather?appid='+apiKey+'q='+city).then((res)=>{
//  })  
//}

function getWeatherByCoords(lat, long) {
  axios.get(baseURL + 'data/2.5/weather?APPID=' + apiKey + '&lat=' + lat + '&lon=' + long + '&units=Imperial').then((res) => {
    console.log(res);
    return res;
  })
}

export default getWeatherByCoords;

