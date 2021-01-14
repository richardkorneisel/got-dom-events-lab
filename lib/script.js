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

let nameList = document.querySelectorAll(".more-info");

for (let i=0; i<nameList.length; i++) {
  let button = document.querySelectorAll('.more-info')[i];
  button.addEventListener('click', buttonClick);
}

let htmlName;
function buttonClick(event) {
  console.log(event.target.parentElement.firstElementChild.innerText);
  htmlName = event.target.parentElement.firstElementChild.innerText;
  //console.log(htmlName)
  for (let i=0; i<characters.length; i++) {
    if (characters[i].name === htmlName) {
      //console.log(characters[i].name);
      alert(characters[i].bio);
      //document.body.main.bio.append(characters[i].bio);
      
    }
  }
}

/*document.body.onload = addElement

function addElement () {
  let newDiv = document.createElement('div');
  let newContent = document.createTextNode("Hello");
  newDiv.appendChild(newContent);
  let button = document.getElementById("more-info");
  document.body.insert(newDiv, button);
}
console.log(newDiv);
//console.log(characters)
*/
