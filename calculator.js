var tambah = document.querySelector('.tambah'),
    kurang = document.querySelector('.kurang'),
    kali = document.querySelector('.kali'),
    bagi = document.querySelector('.bagi'),
    operators = [tambah, kurang, kali, bagi];

var nums = [];

var operator = '',
    operatorPressed = false;

var jumlah = document.querySelector('.submit'),
    hapusButton = document.querySelector('.hapus');

var hasil = document.querySelector('.hasil');

var value1 = '',
    value2 = '';

for(var i = 0; i < 10; i++) {
  nums[i] = document.querySelector('.num' + i);
  nums[i].addEventListener('click', function(){
    if (operatorPressed == false) {
    	value1 = value1 + this.innerHTML;
    	hasil.innerHTML = value1;
    }
    else if (operatorPressed) {
      value2 = value2 + this.innerHTML;
 			hasil.innerHTML = value1 + operator + value2;
    }
  });
}

for(var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function(){
    if(value1 == '') {
      return
    }
    else {
      if(this.innerHTML == '×') {
        operator = '*';
      }
      else if(this.innerHTML == '÷') {
        operator = '/';
      }
      else {
        operator = this.innerHTML;
      }
      operatorPressed = true;
      hasil.innerHTML = hasil.innerHTML +  operator;
    }
  })
}

jumlah.addEventListener('click', function(){
  if(value2 == '') {
    return
  }
  else {
    hasil.innerHTML = eval(parseInt(value1) + operator + parseInt(value2));
    console.log(value1, operator, value2);
    value1 = hasil.innerHTML;
  	value2 = '';
  	operator = '';
  	operatorPressed = false;
  }
});

hapusButton.addEventListener('click', function() {
  value1 = '';
  value2 = '';
  operator = '';
  operatorPressed = false;
  hasil.innerHTML = '';
});











