let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxguesses = 4;

function novoJogo() {
   window.location.reload()
};

function init() {
   computerNumber = Math.floor(Math.random() * 100) + 1
};

function compareNumbers() {
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers

   if (attempts < maxguesses) {

      if (userNumber > computerNumber) {
         document.getElementById('textOutput').innerHTML = 'Seu número é muito ALTO'
         document.getElementById('inputBox').value = ''
         attempts++
         document.getElementById('attempts').innerHTML = attempts
      }
      else if (userNumber < computerNumber) {
         document.getElementById('textOutput').innerHTML = 'Seu número é muito BAIXO'
         document.getElementById('inputBox').value = ''
         attempts++
         document.getElementById('attempts').innerHTML = attempts
      }
      else {
         document.getElementById('textOutput').innerHTML = 'PARABÉNS VOCÊ ACERTOU !'
         attempts++
         document.getElementById('attempts').innerHTML = attempts
         document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
      }
   }
   else {
      document.getElementById('textOutput').innerHTML = 'VOCÊ PERDEU ! O número era ' + computerNumber
      document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
   }
};

