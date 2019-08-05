const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

// establishes an array listing players
const listOfPlayers = []
// list of players on blue team
const blueTeam = []
// list of players on red team
const redTeam = []

class Person {
  constructor(id, name, age, skillSet, placeBorn) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
  }
}

class Player {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}

class BlueTeammate extends Player {
  constructor(teamColor, mascot, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.teamColor = teamColor;
    this.mascot = mascot;
  }
}

class RedTeammate extends Player {
  constructor(teamColor, mascot, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.teamColor = teamColor;
    this.mascot = mascot;
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

// ! THIS FUNCTION IS NOT WORKING !
// this function goes through player and person arrays and takes out any duplicates from person array since that means they were chosen to play
const deletePerson = (id, arrOfPeople, listOfPlayers) => {
  // looping through -- 10 is arbitrary number and can be changed to match number of people + players + blueTeam + redTeam
  for (i = 0; i <= 10; i++) {
    if (arrOfPeople[i].id == listOfPlayers[i].id) {
      arrOfPeople[i].id = null;
    }
  }
}

const makePlayer = (id) => {
  // console.log(`li ${id} was clicked!`);
  const player = arrOfPeople.filter (person => {
    return person.id === id;
  })[0];

  listOfPlayers.push(player);

  console.log(listOfPlayers);

  const playerElement = document.getElementById('players');
  listOfPlayers.map(player => {
    const playerList = document.createElement("li")
    const redButton = document.createElement('button');
    const blueButton = document.createElement('button');
    
    redButton.innerHTML = "Choose Red Team";
    redButton.addEventListener('click', function () {makeRed(player.id)})
    playerList.appendChild(redButton)
    // playerList.appendChild(document.createTextNode(player.name + " - " + player.skillSet))
    playerElement.append(playerList)
    
    blueButton.innerHTML = "Choose Blue Team";
    blueButton.addEventListener('click', function () {makeBlue(player.id)})
    playerList.appendChild(blueButton)
    playerList.appendChild(document.createTextNode("   " + player.name + " - " + player.skillSet))
    playerElement.append(playerList)
  })

  deletePerson();
  resetMakePlayer();
}

// ! THIS FUNCTION IS NOT WORKING !
const resetMakePlayer = () => {
  if (listOfPlayers !== []) {
    listOfPlayers = [];
  }
}

// const makeRed = (id) => {
//   const redPlayer = listOfPlayers.filter (person => {
//     return player.id === id;
//   })[0];

//   redTeam.push(redPlayer);

//   console.log(redTeam);

//   const redElement = document.getElementById('red');
//   listOfPlayers.map(player => {
//     const redList = document.createElement("li");
    
//     redElement.append(redList)
//   })
// }

// const makeBlue = (id) => {
//   const bluePlayer = listOfPlayers.filter (person => {
//     return player.id === id;
//   })[0];

//   blueTeam.push(bluePlayer);

//   console.log(blueTeam);

//   const blueElement = document.getElementById('blue');
//   listOfPlayers.map(player => {
//     const blueList = document.createElement("li");
    
//     blueElement.append(blueList)
//   })
// }

// add tests