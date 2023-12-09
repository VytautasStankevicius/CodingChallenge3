let inputText;


document.querySelector('.submitSymbol').onclick = function(){
  inputText = document.querySelector('.inputbox').value;

let myArray = inputText.split(" ");

let swapWords = myArray.map(words => {
  let len = words.length;
  if (len > 1) {
    words = words[len - 1] + words.substring(1, len - 1) + words[0];
  }
  return words;
});

let result = swapWords.join(" ");

document.querySelector('h1').textContent = `${swapWords}`;
}


