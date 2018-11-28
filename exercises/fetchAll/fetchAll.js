const images = ['home', 'athens', 'bahnhof', 'syvota'];
const container = document.querySelector('#container');

let bringImagesTimeout = (elem, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(elem)
    }, time)
  })
}

let createElements = async collection => {
  for (image of collection) {
    let picture = await fetch(`../../images/${image}.jpg`);
    let newImage = document.createElement('IMG');
    let imagePause = await bringImagesTimeout(newImage, 200);
    newImage.src = picture.url;
    container.appendChild(newImage);
  }
}

setTimeout(() => {
  createElements(images);
}, 2000)
