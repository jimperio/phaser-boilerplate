import boot from './boot'

const game = new Phaser.Game(
  720,
  640,
  Phaser.AUTO,
  'game',
  null,
  false,
  false
)

game.state.add('boot', boot)
game.state.start('boot')
