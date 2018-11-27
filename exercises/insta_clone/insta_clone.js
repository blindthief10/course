let fetchItem = document.querySelectorAll(`li`)[1];
let picturesContainer = document.querySelector('#container');

fetchItem.addEventListener('click', ev => {
  fetch('quotes.json')
    .then(data => data.json())
    .then(imageObjects => {
      for (let picture of imageObjects) {
        let section = document.createElement('SECTION');
        let title = document.createElement('H4');
        let image = document.createElement('IMG');
        let description = document.createElement('P');
        title.innerText = picture.title;
        image.src = picture.address;
        description.innerText = picture.description;
        section.appendChild(image);
        section.appendChild(title);
        section.appendChild(description);
        picturesContainer.appendChild(section);
        section.addEventListener('click', ev => {
          let blackLayer = document.createElement('HEADER');
          let closeSpan = document.createElement('SPAN');
          let bigImage = document.createElement('IMG');
          closeSpan.innerText = 'X';
          bigImage.src = picture.address;
          blackLayer.appendChild(closeSpan);
          blackLayer.appendChild(bigImage);
          document.body.appendChild(blackLayer);
          closeSpan.addEventListener('click', ev => {
            document.body.removeChild(ev.target.parentElement);
          })
        })
      }

    })
    .catch(err => {
      console.error(err);
    })
})
