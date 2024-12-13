const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const conversion = num => {
  const index = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const myResult = [];

  index.forEach(function (arr) {
    while (num >= arr[1]) {
      myResult.push(arr[0]);
      num -= arr[1];
    }
  });

  return myResult.join('');
};

const validate = (str, int) => {
  let errorTxt = '';

  if (!str || str.match(/[e.]/g)) {
    errorTxt = 'Please enter a valid number!';
  } else if (int < 1) {
    errorTxt = 'Please enter a number greater than or equal to 1!';
  } else if (int > 3999) {
    errorTxt = 'Please enter a number less than or equal to 3999!';
  } else {
    return true;
  }

  output.innerText = errorTxt;
  output.classList.add('alert');

  return false;
};

const clearOutput = () => {
  output.innerText = '';
  output.classList.remove('alert');
};

form.addEventListener('submit', e => {
  e.preventDefault();
  doUpdate();
});

convertButton.addEventListener('click', () => {
  doUpdate();
});

const doUpdate = () => {
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr, 10);

  output.classList.remove('hidden');

  clearOutput();

  if (validate(numStr, int)) {
    output.innerText = conversion(int);
  }
};
