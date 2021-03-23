function age() {
  let birthYear = prompt('What year were you born?');
  let ageInHours = (2020 - birthYear) * 365 * 24;
  let h1 = document.createElement('h1');
  let textAnswer = document.createTextNode('You are ' + ageInHours + ' days old!');
  h1.setAttribute('id', 'age');
  h1.appendChild(textAnswer);
  document.getElementById('container-result').appendChild(h1);
}

function reset() {
  document.getElementById('age').remove();
}