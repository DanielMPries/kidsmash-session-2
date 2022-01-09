import 'phaser';
import { BootScene, CreditsScene, MainMenu } from './scenes';

window.addEventListener('load', function() {
  var game = new Phaser.Game({
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    backgroundColor: "#242424",
    roundPixels: true,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 },
        debug: false
      }
    },
    render: {
      antialias: true,
      pixelArt: false,
      roundPixels: true
    }
  })

  // TODO: New scenes go here...
  game.scene.add('main-menu', MainMenu, false);
  game.scene.add('credits', CreditsScene, false);
  game.scene.add('boot', BootScene, true);
});