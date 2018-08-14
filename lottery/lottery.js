let Participant = function(name, isSelected)  {
  this.name = name;
  this.isSelected = false;
}

let createStudentsData = () => {
  let names = [
              'Mauro',
              'Eugen',
              'Meir',
              'Mohamad Lahham',
              'Mohammed Wahba',
              'Nour',
              'Ali',
              'Carmine',
              'Murhaf',
              'Sue',
              'Milad',
              'Jens',
              'Daniel',
              'Marcelo'
            ];

            let students = [];
            names.map(person => {
              students.push(new Participant(person));
            })

            return students;
};

let makeSelection = students => {
  if (students.length === 0) {
    return;
  }
  let number = Math.floor(Math.random() * students.length);
  students[number].isSelected = true;
  console.log(`The guy that was selected was ${students[number].name}`);
  let filtered = students.filter(function(person) {
    return person.isSelected === false;
  });

  makeSelection(filtered);

}

let grabButton = function(ev) {
  let btn = document.querySelector('button');
  let studentsData = createStudentsData();
  btn.addEventListener('click', function() {

    makeSelection(studentsData);
  });
}

let createElements = function() {
  let container = document.createElement('DIV');
  let row = document.createElement('DIV');
  container.className = 'container';
  row.className = 'row';

  container.append(row);
  document.body.append(container);

}

document.addEventListener('DOMContentLoaded', createElements);
document.addEventListener('DOMContentLoaded', grabButton);
