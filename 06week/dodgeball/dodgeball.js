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

// class Teams {
//   constructor(color) {
//     if (color == 'red') {
//       this.name = 'red'
//     } else {
//       this.name = 'blue'
//     }
//   }
// }

// const redTurn = new Teams('red');
// const blueTurn = new Teams('blue');

// let playerTurn = red;

// const switchPlayer = () => {
//   if (playerTurn == redTurn) {
//     playerTurn = blueTurn;
//   } else {
//     playerTurn = redTurn;
//   }
// }

// document.write(`It's ${playerTurn}'s turn to select a player.`)

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

const makePlayer = (id) => {
  // console.log(`li ${id} was clicked!`);
  const player = arrOfPeople.filter (person => {
    return person.id === id;
  })[0];

  listOfPlayers.push(player);

  console.log(listOfPlayers);

  listOfPlayers.map(player => {
    const playerElement = document.createElement('div');
    const redButton = document.createElement('button');
    const blueButton = document.createElement('button');
    redButton.innerHTML = "Choose Red Team";
    blueButton.innerHTML = "Choose Blue Team";
  })
}

makePlayer();

// convert person to player
// make player into object
// 
