
let firstStudent = 'Meir';

let changeStudent = name => {
  let promisedStudent = new Promise((resolve, reject) => {
    if (name.length === 4) {
      reject('Too short name!');
    }
    resolve(name);
  });

  return promisedStudent;
}

let printAnotherStudent = newStudent => {
  let nameLower = newStudent.toUpperCase();
  firstStudent = nameLower;
  console.log(firstStudent);
}

console.log(firstStudent);

changeStudent('Jens')
  .then(printAnotherStudent)
  .catch(nostradamus => {
    console.warn(nostradamus);
  })

console.log(firstStudent);


// Use the fetch api to brng data

fetch('../images/home.jpg')
  .then(response => {
    console.log(response.url);
    let image = document.createElement('IMG');
    image.src = response.url;
    document.body.appendChild(image);
  })
  .catch(errMessage => {
    let createParagraph = document.createElement('P');
    createParagraph.innerText = `Something went terribly wrong!`;
    document.body.appendChild(createParagraph);
  })


try {
  console.log(whatever);
} catch (error) {
  console.log(error);
}
