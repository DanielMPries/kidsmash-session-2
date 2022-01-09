/**
 * Applies a "Push" behavior to a Text object
 */

 export class PushableText {
  static apply(gameObject: Phaser.GameObjects.Text, onClick: Function): void {
    gameObject.setInteractive()
    // Push In
    .on(Phaser.Input.Events.POINTER_OVER, () => {
      gameObject.scene.tweens.add({
        targets: gameObject,
        scale: .8,
        ease: Phaser.Math.Easing.Sine.InOut,
        duration: 200
      });
    })
    // Push Out
    .on(Phaser.Input.Events.POINTER_OUT, () => {
      gameObject.scene.tweens.add({
        targets: gameObject,
        scale: 1,
        ease: Phaser.Math.Easing.Sine.InOut,
        duration: 200
      });
    })
    // Click
    .on(Phaser.Input.Events.POINTER_UP, onClick);
  }
}