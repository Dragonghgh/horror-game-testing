function preload() {
  this.load.image('player', 'assets/player.png');
  this.load.image('tiles', 'assets/tileset.png');
  this.load.tilemapTiledJSON('map', 'assets/map.json'); // load map
}

let map;
let layer;

function create() {
  map = this.make.tilemap({ key: 'map', tileWidth: 32, tileHeight: 32 });
  const tileset = map.addTilesetImage('tiles');

  layer = map.createLayer('Ground', tileset, 0, 0);

  // Make walls solid
  layer.setCollision([2]); // tile index 1 for walls (Phaser starts counting at 0)
  
  player = this.physics.add.sprite(400, 300, 'player');
  player.setCollideWorldBounds(true);

  this.physics.add.collider(player, layer);

  cursors = this.input.keyboard.addKeys({
    up: 'W', down: 'S', left: 'A', right: 'D', interact: 'E'
  });
}
