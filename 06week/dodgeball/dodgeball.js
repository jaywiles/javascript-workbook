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

class Player extends Person{
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, id, name, age, skillSet, placeBorn) {
    super(id, name, age, skillSet, placeBorn)
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

// ! this function populates the list !
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

// ! this function moves people from person list to player list !
const makePlayer = (id) => {
  // console.log(`li ${id} was clicked!`);
  const player = arrOfPeople.filter (person => {
    return person.id === id;
  })[0];

  // const singlePlayer = new Player (arrOfPeople.filter(player => {
  //   return player.id === id;
  // }))

  // console.log(`singlePlayer: ${singlePlayer}`);

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
    // blueButton.removeEventListener('click', function () {playerList})
    
    blueButton.innerHTML = "Choose Blue Team";
    blueButton.addEventListener('click', function () {makeBlue(player.id)})
    playerList.appendChild(blueButton)
    playerList.appendChild(document.createTextNode(player.name + " - " + player.skillSet))
    playerElement.append(playerList)
    // blueButton.removeEventListener('click', function () {makePlayer(playerList)})

    // ! IF I UNCOMMENT THIS FOR LOOP - IT WILL ONLY PUT ONE PERSON DOWN TO PLAYER LIST, BUT THEN RETURNS UNDEFINED WHEN TRYING TO ADD TO TEAM, SO NOTHING HAPPENS !
    // for (i = 0; i <= arrOfPeople.length; i++) {
    //   if (listOfPlayers[i] == arrOfPeople[i]) {
    //     listOfPlayers.splice(listOfPlayers.length - 1);
    //     }
    //   }
    // }
    
  })
}

// ! this function moves people from player list to red team list ... or at least it's supposed to !
const makeRed = (id) => {
  const redPlayer = listOfPlayers.filter (person => {
    return person.id === id;
  })[0];

  redTeam.push(redPlayer);

  console.log(redTeam);

  const redElement = document.getElementById('red');
  listOfPlayers.map(person => {
    const redList = document.createElement("li");
    
    redList.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    redElement.append(redList)

    // this for loop works to only put one person on each time... but it's always the first person who was picked to play...
    // for (i = 0; i <= listOfPlayers.length; i++) {
    //   if (redList[i] == listOfPlayers[i]) {
    //     listOfPlayers.remove();
    //   }
    // }
  })
}

// ! this function moves people from player list to blue team list ... or at least it's supposed to !
const makeBlue = (id) => {
  const bluePlayer = listOfPlayers.filter (person => {
    return person.id === id;
  })[0];

  blueTeam.push(bluePlayer);

  console.log(blueTeam);

  const blueElement = document.getElementById('blue');
  listOfPlayers.map(person => {
    const blueList = document.createElement("li");
    
    blueList.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    blueElement.append(blueList)

    // this for loop works to only put one person on each time... but it's always the first person who was picked to play...
    // for (i = 0; i <= listOfPlayers.length; i++) {
    //   if (blueList[i] == listOfPlayers[i]) {
    //     listOfPlayers.remove();
    //   }
    // }
  })
}

// add tests