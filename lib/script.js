var characters = [
  {
    name: "Daenerys Targaryen",
    bio:
      'The youngest child of King Aerys II — also known as the Mad King — Daenerys is known by many titles, including the Mother of Dragons, or Khaleesi (which simply means "queen" in Dothraki).',
    status: "alive"
  },
  {
    name: "Khal Drogo",
    bio:
      'Khal Drogo is the leader of a Dothraki "khalasar" (tribe). He and Daenerys eventually come to care for one another, but the marriage begins under traumatic circumstances.',
    status: "dead"
  },
  {
    name: "Tyrion Lannister",
    bio:
      "Joanna Lannister died in childbirth when Tyrion when born. He's known for his cleverness and sharp tongue, though many derisively call him the Imp or Halfman.",
    status: "alive"
  },
  {
    name: "Sansa Stark",
    bio:
      "Sansa Stark was raised as a highborn lady who would one marry into another great house.",
    status: "alive"
  },
  {
    name: "Arya Stark",
    bio:
      "Arya has no desire to grow up in the confines of ladyship — she prefers swords to sewing.",
    status: "alive"
  },
  {
    name: "Jon Snow",
    bio:
      "Said to be the bastard son of Ned Stark and a mystery woman, Jon is slightly ostracized from the rest of the Stark kids.",
    status: "alive"
  }
];
let n;
let nameList = document.getElementsByClassName("more-info");

for (let i=0; i<nameList.length; i++) {
  let button = document.getElementsByClassName('more-info')[i];
  button.addEventListener('click', buttonClick);
}

let htmlName;
function buttonClick(event) {
  console.log(event.target.parentElement.firstElementChild.innerText);
  htmlName = event.target.parentElement.firstElementChild.innerText;

  for(let i=0; i<characters.length; i++) {
    if(characters[i].name == htmlName) {
      let div = document.createElement('div');
      div.innerText=characters[i].bio
      event.target.parentElement.appendChild(div);  //find location in developer tools
    }
  }  
}
// Requirement 3
let focusInputText;
function focusButtonClick(event){
  event.preventDefault();
  focusInputText=document.querySelector('.input').value;
  console.log(focusInputText);

let divCharacter= document.querySelectorAll('.character');
 for(let i=0;i<divCharacter.length; i++){
   console.log(divCharacter[i].children[0].innerText);
   if(focusInputText != divCharacter[i].children[0].innerText){
      divCharacter[i].remove();

   }
 } 
}
let buttonFocus = document.querySelector('.focus');
buttonFocus.addEventListener('click', focusButtonClick);

// Requirement 4
function buttonStatusClick (event) {
  let htmlName = event.target.parentElement.firstElementChild.innerText;
  for (let i = 0; i < characters.length; i++) {
    if ((characters[i].name) == htmlName) {
      let statusDiv = document.createElement('div');
      statusDiv.style.color='red';
      statusDiv.innerText = characters[i].status;
      event.target.parentElement.appendChild(statusDiv);
    }
  }
}

let statusList = document.getElementsByClassName("alive-or-dead");
for (let i=0; i < statusList.length; i++) {
  let button = document.getElementsByClassName("alive-or-dead")[i];
  button.addEventListener('click', buttonStatusClick);
  console.log('addinglistener')
}


/*
// Character invisibility
document.querySelector("#btnSingleChar").addEventListener("click", () => {
  typedName = document.querySelector("#charName").value;

  // if user typed gibberish return
  let iter = 0;
  document.querySelectorAll(".character").forEach(element => { 
    if(typedName != element.children[0].innerHTML)
        iter++;
  })

  if(iter == document.querySelectorAll(".character").length){
      return;
  }

  document.querySelectorAll(".character").forEach(element => { 
      if(typedName != element.children[0].innerHTML)
        element.remove();
  })
});
*/