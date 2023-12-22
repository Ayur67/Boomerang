// Враг.

class Enemy {
  constructor(position) {
    this.generateSkin();
    this.position = position;
  }

  generateSkin() {
    const skins = [
      "👾",
      "💀",
      "👹",
      "👻",
      "👽",
      "👿",
      "💩",
      "🤡",
      "🤺",
      "🧛",
      "🧟",
      "🎃",
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 2;
  }

  die() {
    this.position = "🤡";
    console.log("Enemy is dead!");
    process.exit();
  }
}

module.exports = Enemy;
