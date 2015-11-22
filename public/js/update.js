var update = function(){

// Control the creator
  // game.physics.arcade.collide(creator,layer);
  game.physics.arcade.collide(destroyer,layer);
  game.physics.arcade.collide(hero,layer);

  // game.physics.arcade.collide(creator, destroyer);
  // game.physics.arcade.collide(creator, hero);
  // game.physics.arcade.collide(destroyer, hero);

  if(cursors.left.isDown) {
     creator.moveLeft();
   } else if (cursors.right.isDown) {
     creator.moveRight();
   } else if (cursors.up.isDown) {
     creator.moveUp();
   } else if (cursors.down.isDown) {
     creator.moveDown();
   } else {
      creator.stop();
    }

  platformX = layer.getTileX(creator.x);
  platformY = layer.getTileY(creator.y);
  console.log("platformX " + platformX + "platformY" + platformY);
  impassableTile = map.getTile(37, 12);
  layer.map.putTile(impassableTile, platformX, platformY);

  console.log("platformX === ", platformX);

  // Control the destroyer
  if(abutton.isDown) {
     destroyer.moveLeft();
   } else if (dbutton.isDown) {
     destroyer.moveRight();
   } else if (wbutton.isDown) {
     destroyer.moveUp();
   } else if (sbutton.isDown) {
     destroyer.moveDown();
   } else {
     destroyer.stop();
  }
  //ELSE UP, DOWN, STOP
};
