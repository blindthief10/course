const authToken = '16d4785f9c10724266053adb3c29dcfd';
const city = 'Damascus';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${authToken}`;

let getWeather = async url => {
  try {
    let res =  await fetch(url);
    let data = await res.json();
    console.log(data);
  } catch(error) {
    console.warn(error);
  }


}


getWeather(weatherUrl);
console.log('after');
