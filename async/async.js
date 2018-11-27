const btn = document.querySelector('button');
const form = document.querySelector('form');

const colorTemps = [
  {highestTemp: 40, color: 'red'},
  {highestTemp: 35, color: 'orange'},
  {highestTemp: 30, color: 'yellow'},
  {highestTemp: 20, color: 'deepskyblue'},
  {highestTemp: 10, color: 'purple'},
  {highestTemp: 0, color: 'grey'},
  {highestTemp: -100, color: 'white'}
];

console.log();

const authToken = '16d4785f9c10724266053adb3c29dcfd';

let inputField = document.querySelector('input');
let divContainer = document.querySelector('#container');

let getWeatherForCity = ev => {
  ev.preventDefault();
  let city = inputField.value;
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${authToken}`;
  fetch(weatherUrl)
    .then(res => res.json())
    .then(weatherData => {
      console.log(weatherData);
      let section = document.createElement('SECTION');
      let heading = document.createElement('H3');
      let tempParagraph = document.createElement('P');
      let desc = document.createElement('SPAN');
      let littleImage = document.createElement('IMG');
      let footer = document.createElement('FOOTER');
      let tempInCelsius = Math.round(weatherData.main.temp - 273);
      let color = colorTemps.find(temp => tempInCelsius > temp.highestTemp).color;
      heading.innerText = weatherData.name;
      tempParagraph.innerHTML = `<b>${tempInCelsius}</b> <sup>O</sup>C`;
      desc.innerText = weatherData.weather[0].description;
      littleImage.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      section.appendChild(heading);
      section.appendChild(tempParagraph);
      footer.appendChild(desc);
      footer.appendChild(littleImage);
      section.appendChild(footer);
      section.style.background = color;
      divContainer.appendChild(section);
      inputField.value = '';
      inputField.focus();
    })
    .catch(errorMsg => {
      console.error(errorMsg);
    })
}

form.addEventListener('submit', getWeatherForCity);
