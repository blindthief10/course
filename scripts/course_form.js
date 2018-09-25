let Student = function(fullName, course, satisfaction) {
  this.fullName = fullName;
  this.course = course;
  this.satisfaction = satisfaction;
  this.interpretFeel = function() {
    if (this.satisfaction > 80) {
      this.mood = 'He/she found the course perfect.';
    } else if (this.satisfaction >= 50) {
      this.mood = 'He/she is content with the course overall.';
    } else {
      this.mood = 'Keeps complaining. Potential refund is coming.';
    }
  }
}

let mauro = new Student('Mauro Cifuentes Navarro', 'PHP course', 45);
let eugen = new Student('Jewgeny Kuhn', 'JS course', 85);
let meir = new Student('Meir Overferst', 'JS course', 62);
let mohLah = new Student('Mohamad Lahham', 'Ruby course', 72);
let mohWah = new Student('Mohammed Wahba', 'Ruby course', 67);
let nour = new Student('Mohammed Nour Mustafa', 'JS course', 59);
let carmine = new Student('Carmine Tambascia', 'JS course', 72);
let ali = new Student('Ali Pudina', 'PHP course', 22);
let jens = new Student('Jens Soltwedel', 'PHP course', 82);
let murhaf = new Student('Murhaf Orfali', 'PHP course', 94);

let studentsTogether = [mauro, eugen, meir, mohLah, mohWah, nour, carmine, ali, jens, murhaf];

for (let student of studentsTogether) {
  student.interpretFeel();
  console.log(student.mood);
}
