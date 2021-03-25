const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logs: [],
    };
  },
  methods: {
    resetGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logs = [];
    },
    attackMonster() {
      this.currentRound++;
      let reduce = getRandomValue(5, 12);

      this.monsterHealth -= reduce;
      this.addLogMessage("player", "attack", reduce);
      this.attackPlayer();
    },
    attackPlayer() {
      let reduce = getRandomValue(8, 15);
      this.playerHealth -= reduce;
      this.addLogMessage("monster", "attack", reduce);
    },
    specialAttack() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("player", "heal", healValue);

      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(user, action, value) {
      this.logs.unshift({
        user: user,
        action: action,
        value: value,
      });
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value < 0) {
        //player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value < 0) {
        //monster lost
        this.winner = "player";
      }
    },
  },
});

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

app.mount("#game");
