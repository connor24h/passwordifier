generate = document.getElementById('generate');
htown = document.getElementById('htown');
street = document.getElementById('street');
nname = document.getElementById('nname');
submit = document.getElementById('submit');
result = document.querySelector('.result');
pass = document.getElementById('pass');
another = document.getElementById('another');
clear = document.getElementById('clear');

const replace_spaces = (main_string, character) => {
  let ret_val = '';
  for (let i = 0; i < main_string.length; i += 1) {
    c = main_string[i];
    if (c === ' ') {
      ret_val += character;
    }
    else {
      ret_val += c;
    }
  }
  return ret_val;
};

const gen_pass = (values) => {
  let ret_values = [];
  //1: removing spaces, turning to lowercase, and concatenating everything
  let ret_val = '';
  values.forEach((val) => {
    val = val.toLowerCase();
    val = replace_spaces(val, '');
    ret_val += val;
  });
  ret_values.push(ret_val);
  //2: replacing spaces with #, keeping case as it as, and concatenating everything
  ret_val = '';
  values.forEach((val) => {
    val = replace_spaces(val, '#');
    ret_val += val;
  });
  ret_values.push(ret_val);
  //3: removing spaces, keeping case as it as, and concatenating in reverse order
  ret_val = '';
  for (let i = values.length - 1; i >= 0; i -= 1) {
    val = replace_spaces(values[i], '');
    ret_val += val;
  }
  ret_values.push(ret_val);
  //4: replacing first character of every word with a $, changing to lower case, and concatenating in reverse order
  ret_val = '';
  for (let i = values.length - 1; i >= 0; i -= 1) {
    val = values[i];
    val = replace_spaces(values[i], '');
    val = val.toLowerCase();
    // val[0] = '$';
    ret_val += '$' + val.slice(1);
  }
  ret_values.push(ret_val);
  //5: 
  //6
  //7
  //8
  //9
  //10
  return ret_values;
};

const get_random = (len) => {
  return Math.floor(Math.random() * len);
}

const main = () => {
  var values = [];
  var passwords = [];

  submit.addEventListener('click', () => {
    values = [htown.value, street.value, nname.value];
    passwords = gen_pass(values);
    result.style.display = "block";
    pass.innerHTML = passwords[get_random(passwords.length)];
  });
  
  another.addEventListener('click', () => {
    pass.innerHTML = passwords[get_random(passwords.length)];
  });
};

main();

clear.addEventListener('click', () => {
  result.style.display = "none";
  htown.value = '';
  street.value = '';
  nname.value = '';
  main();
});