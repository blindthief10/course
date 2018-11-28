const images = ['home', 'athens', 'bahnhof', 'syvota'];
const container = document.querySelector('#container');

// let bringImagesTimeout = (elem, time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(elem)
//     }, time)
//   })
// }
//
// let createElements = async collection => {
//   for (image of collection) {
//     let picture = await fetch(`../../images/${image}.jpg`);
//     let newImage = document.createElement('IMG');
//     let imagePause = await bringImagesTimeout(newImage, 200);
//     newImage.src = picture.url;
//     container.appendChild(newImage);
//   }
// }
//
// setTimeout(() => {
//   createElements(images);
// }, 2000)

let fetchImages = collection => {
  let promiseImages = [];
    for (image of collection) {
      let promiseImage = fetch(`../../images/${image}.jpg`)
      promiseImages.push(promiseImage);
    }
  return Promise.all(promiseImages);
}

let printAll = async () => {
  let arraysOfData = await fetchImages(images);
  for (data of arraysOfData) {
    let newImage = document.createElement('IMG');
    newImage.src = data.url;
    container.appendChild(newImage);
  }
}

printAll();
