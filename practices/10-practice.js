// Task 1
class Player {
  constructor(nickName, score) {
    this.nickName = nickName;
    this.score = score;
  }
  getInfo() {
    return `${this.nickName}'s score is ${this.score}.`;
  }
  attack(otherPlayer) {
    this.score++;
    otherPlayer.score--;
    console.log(`${this.nickName} attacked ${otherPlayer.nickName}.`);
  }
  damage() {
    this.score--;
    console.log(`${this.nickName} received damage.`);
  }
}

// Task 2

class SuperPlayer extends Player {
  constructor(nickName, score) {
    super(nickName, score);
  }

  superAttack(otherPlayer) {
    this.score += 2;
    otherPlayer.score -= 2;
  }
}

// Task 3

class HeroPlayer extends Player {
  constructor(nickName, score) {
    super(nickName, score);
  }

  heal(otherPlayer) {
    otherPlayer.score += 1;
  }
}

// Task 4

const player1 = new Player("Player 1", 5);
const player2 = new Player("Player 2", 5);
const superPlayer = new SuperPlayer("Super Player", 3);
const heroPlayer = new HeroPlayer("Hero Player", 10);

// Task 5

// attack for player1 over player2
player1.attack(player2);
console.log(player1.getInfo());
console.log(player2.getInfo());

// attack for player1 over superPlayer
player1.attack(superPlayer);
console.log(player1.getInfo());
console.log(superPlayer.getInfo());

// superAttack superPlayer over player2, player1, and heroPlayer
superPlayer.superAttack(player2);
superPlayer.superAttack(player1);
superPlayer.superAttack(heroPlayer);
console.log(superPlayer.getInfo());
console.log(player2.getInfo());
console.log(player1.getInfo());
console.log(heroPlayer.getInfo());

// heal heroPlayer over player1 and player2
heroPlayer.heal(player1);
heroPlayer.heal(player2);
console.log(player1.getInfo());
console.log(player2.getInfo());

// attack for player1, player2, and heroPlayer over superPlayer
player1.attack(superPlayer);
player2.attack(superPlayer);
heroPlayer.attack(superPlayer);
console.log(superPlayer.getInfo());
console.log(player1.getInfo());
console.log(player2.getInfo());
console.log(heroPlayer.getInfo());

// damage for player1 and player2
player1.damage();
player2.damage();
console.log(player1.getInfo());
console.log(player2.getInfo());

// Task 6

console.log(player1.getInfo());
console.log(player2.getInfo());
console.log(superPlayer.getInfo());
console.log(heroPlayer.getInfo());
