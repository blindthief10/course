var form = document.querySelector('form');
var ageInput = document.querySelector('input:first-of-type');
var retirementInput = document.querySelector('#second');
var salaryInput = document.querySelector('#third');
var taxInput = document.querySelector('#last');

function calculateRetirementMoney(currentAge, retirementAge, money, tax) {
  var yearsRemaining = retirementAge - currentAge;
  var calculateNettoPerMonth = money - (money * tax/100);
  const months = 12;
  return yearsRemaining * calculateNettoPerMonth * months;

}

form.addEventListener('submit', function(ev) {
  var ageInputVal = parseInt(ageInput.value);
  var retirementAgeVal = parseInt(retirementInput.value);
  var salaryInputVal = parseInt(salaryInput.value);
  var taxInputVal = parseInt(taxInput.value);

  ev.preventDefault();
  var myMoney = calculateRetirementMoney(ageInputVal, retirementAgeVal, salaryInputVal, taxInputVal);

  var paragraph = document.createElement('P');

  paragraph.innerHTML = `The total amount of money that you are going
  to earn till retirement is <span>${myMoney}</span>`;

  document.body.appendChild(paragraph);

  ageInput.value = '';
  retirementInput.value = '';
  salaryInput.value = '';
  taxInput.value = '';
});
