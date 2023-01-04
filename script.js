let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.getElementById('main-title').innerHTML = "Car Race";


  // Part 2
  document.body.style.backgroundColor = '#ff9980';


  // Part 3
  let favorite = document.querySelectorAll('#favorite-things li');
  favorite[favorite.length-1].remove();


  // Part 4
  let special = document.querySelectorAll('.special-title');
  //special.style.fontSize = '12rem';
  for(let i of special){
    i.style.fontSize = '2rem';
  }
  


  // Part 5
  let past = document.querySelectorAll('#past-races li');
  for(let i in past){
    if(past[i].innerHTML=='Chicago'){
      past[i].remove();
    }
  }




  // Part 6
  let pastRace = document.getElementById('past-races');
  let li = document.createElement('li');
  li.innerHTML = 'North Carolina';
  pastRace.appendChild(li);
  

  


  // Part 7

  let div = document.createElement('div');
  let mainDiv = document.querySelector('.main');
  div.classList.add('blog-post');
  div.classList.add('purple');
  mainDiv.appendChild(div);

  let h1 = document.createElement('h1');
  h1.innerHTML = 'North Carolina';
  div.appendChild(h1);

  let p = document.createElement('p');
  p.innerHTML = 'We Love North carolina';
  div.appendChild(p);


  // Part 8
  let quote = document.getElementById('quote-title');
  quote.addEventListener('click',function (){
    randomQuote();
  })


  // Part 9
  let blog = document.querySelectorAll('.blog-post');
  for(let i of blog){
    i.addEventListener('mouseout',function (){
      i.classList.toggle('purple');
      i.classList.toggle('red');
    })
    i.addEventListener('mouseenter',function (){
      i.classList.toggle('purple');
      i.classList.toggle('red');
    })
  }





});
