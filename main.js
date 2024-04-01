let pw = document.getElementById('password');
let confirmPw = document.getElementById('confirm-password');
let confirmMsg = document.getElementById('confirm-msg');
let input = document.querySelectorAll('input');
let submitBtn = document.querySelector('button[type="submit"');
let lowercasePattern = /[a-z]/;
let uppercasePattern = /[A-Z]/;
let numberPattern = /\d/;
let symbolPattern = /[\W_]/;
let minlength = document.querySelector('li.minlength');
let upcsLetter = document.querySelector('li.upcs-l');
let lwcsLetter = document.querySelector('li.lwcs-l');
let numbers = document.querySelector('li.num');
let symbols = document.querySelector("li.sym");


pw.addEventListener('keyup', function(){
    if(pw.value.length >= 8) minlength.textContent = '';
    pw.value.match(uppercasePattern) ? upcsLetter.style.display = 'none' : upcsLetter.style.display = 'inline-block';
    pw.value.match(lowercasePattern) ? lwcsLetter.style.display = 'none' : lwcsLetter.style.display = 'inline-block';
    pw.value.match(numberPattern) ? numbers.style.display = 'none' : numbers.style.display = 'inline-block';
    pw.value.match(symbolPattern) ? symbols.style.display = 'none' : symbols.style.display = 'inline-block';
})

confirmPw.addEventListener('keyup', function (){
    if (confirmPw.value !== pw.value) {
      confirmMsg.style.display = 'inline-block';  
      confirmMsg.textContent = `Password doesn't match`;
      confirmPw.setAttribute('id', 'invalid-conf-pw');
    } else {
      confirmMsg.textContent = '';
      confirmPw.removeAttribute('id', 'invalid-conf-pw');
    }
})

submitBtn.addEventListener('click', function(event){
    if (confirmPw.value !== pw.value){
        event.preventDefault();
    }
})

window.addEventListener('keyup', function(event){
    if (confirmPw.value !== pw.value && event.key === 'Enter'){
        event.preventDefault();
    }
})

