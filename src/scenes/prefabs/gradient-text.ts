import { Colors } from "./colors";

/**
 * Extends the Text class to apply a multi-gradient blended style
 */
export class GradientText extends Phaser.GameObjects.Text {
  constructor(
    scene: Phaser.Scene, 
    x: number, 
    y: number,  
    text: string | string[],
    style: Phaser.Types.GameObjects.Text.TextStyle) {
    
    super(scene, x, y, text, style);

    this.setOrigin(0.5);
    this.setStroke(Colors.PaleMagenta, 7);
    this.setShadow(0, 3);

    const gradient = this.context.createLinearGradient(0, 0, 0, this.height);
    gradient.addColorStop(.3, Colors.LightSkyBlue);
    gradient.addColorStop(.5, Colors.White);
    gradient.addColorStop(.6, Colors.NightRider);
    gradient.addColorStop(.8, Colors.FreeSpeechMagenta);
    gradient.addColorStop(.95, Colors.White);
    
    this.setFill(gradient);
    this.scene.add.existing(this);
  }
}