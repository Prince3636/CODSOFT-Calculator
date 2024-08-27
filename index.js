let number = document.querySelectorAll('#number');
let screen = document.querySelector('.screen');
let symbol = document.querySelectorAll('#symbol');
screen.value = '';
let num = '';
let value = 0;

number.forEach(function (item) {
  item.addEventListener('click', function (e) {
    if (screen.value === '' && e.target.innerText === '.') {
      alert('Write a number first');
      return;
    }
    if (e.target.innerText === '.' && num.includes('.')) {
      alert('The number includes more decimal dots!');
      screen.value = '';
      num = '';
      return;
    }
    else {
      if (a.length === 1) {
        setinitialise();
      }
      num = num + e.target.innerText;
      screen.value = num;
      value = parseFloat(num);
      console.log(value);
    }
  })
});

let ans = 0;
let a = [];
let y;
symbol.forEach(function (item) {
  item.addEventListener('click', function (e) {
    if (screen.value === '') {
      alert('Write a number');
      return;
    }
    else {
      screen.value = e.target.innerText;
      if (e.target.innerText === 'AC') {
        screen.value = '';
        num = '';
        a = [];
        ans = 0;
        value = 0;
      }

      else if (e.target.innerText === 'DEL') {
        if (num === '') {
          a = [];
          ans = 0;
          value = 0;
        }
        else {
          num = num.substring(0, num.length - 1);
          screen.value = num;
          value = parseFloat(num);
        }
      }
      else {
        y = e.target.innerText;
        if (a.length === 0 && y === '=') {
          setinitialise();
        }
        if (a.length === 1 && y === '=') {
          alert('Type Wisely');
          setinitialise();
        }
        if (a.length === 1) {
          a.push(y);
          return;
        }
        else {
          a.push(value);
          console.log(a);
        }
        num = '';
        if (a[1] === '+' || a[1] === '-' || a[1] === 'x' || a[1] === '/') {
          setdata(y);
        }
        else {
          switch (y) {
            case '+':
              a.push(y);
              break;
            case '-':
              a.push(y);
              break;
            case 'x':
              a.push(y);
              break;
            case '/':
              a.push(y);
              break;
          }
        }
      }
    }
  })
});

function setdata(y) {
  switch (a[1]) {
    case '+':
      ans = a[0] + a[2];
      break;
    case '-':
      ans = a[0] - a[2];
      break;
    case 'x':
      ans = a[0] * a[2];
      break;
    case '/':
      ans = a[0] / a[2];
      break;
  }
  a = [];
  a.push(ans);
  screen.value = ans;
  if (y !== '=') {
    a.push(y);
  }
  console.log(ans);

}
function setinitialise(){
  screen.value = '';
        num = '';
        a = [];
        ans = 0;
        value = 0;
        return;
}