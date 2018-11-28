const images = ['home', 'athens', 'bahnhof', 'syvota'];

let fetchImages = async collection => {
  for (image of collection) {
    let picture = await fetch(`../../images/${image}.jpg`);
    let newImage = document.createElement('IMG');
    newImage.src = picture.url;
    document.body.appendChild(newImage);
  }
}

fetchImages(images);
