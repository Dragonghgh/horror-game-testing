const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: { debug: false }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);
let player;
let cursors;

function preload() {
  this.load.image('player', 'assets/player.png'); // add your pixel player
  this.load.image('tiles', 'assets/tileset.png'); // placeholder tiles
}

function create() {
  // Add player sprite
  player = this.physics.add.sprite(400, 300, 'player');
  player.setCollideWorldBounds(true);

  // Keyboard input
  cursors = this.input.keyboard.addKeys({
    up: 'W',
    down: 'S',
    left: 'A',
    right: 'D',
    interact: 'E'
  });
}

function update() {
  player.setVelocity(0);

  if (cursors.left.isDown) player.setVelocityX(-150);
  if (cursors.right.isDown) player.setVelocityX(150);
  if (cursors.up.isDown) player.setVelocityY(-150);
  if (cursors.down.isDown) player.setVelocityY(150);

  // Interact key
  if (Phaser.Input.Keyboard.JustDown(cursors.interact)) {
    console.log("Interacted!");
  }
}
