import Button from '../Objects/Button.js'
export default class TitleScene extends Phaser.Scene
{

	constructor()
	{
		super("TitleScene");
	}


	create()
	{
		
		///////////////////
		// Add Background


		let titleText = this.add.bitmapText(150, -1170, 'VikingSquad', gameConfig.title)
		

		///////////////
		// Add Buttons
		// These are positioned outside of game because we animate them in with a tween.
		let startText = new Button(this, -1150, 250, 'Start Game', 'small', 'GameScene')
		let instructionText = new Button(this, -1150, 310, 'Instructions', 'small',  'InstructionScene')
		let optionText = new Button(this, -1150, 340, 'Options', 'small',  'OptionsScene')
		let creditsText = new Button(this, -1150, 380, 'Credits', 'small',  'CreditScene')


	    ////////////////////////
	    // Animate Buttons Once
	    // We do a simple sideways animation to bring our buttons in.
	    //tweens.targets is our objects to animate
	    let timeline = this.tweens.timeline({
	        ease: 'Power2',
	        duration: 1000,
	        tweens: [{
	            targets: titleText,
	            x: 150,
	            y: 170,
	            offset: 100
	        },
	        {
	            targets: startText,
	            x: 150,
	            offset: 200
	        },
	        {
	            targets: instructionText,
	            x: 150,
	            offset: 400
	        },
	        {
	            targets: optionText,
	            x: 150,
	            offset: 500
	        },
	        {
	            targets: creditsText,
	            x: 150,
	            offset: 600
	        }]

	    });


	    /////////////
		// Add Audio
		this.model = this.sys.game.globals.model
	    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
	      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true })
	      this.bgMusic.play()
	      this.model.bgMusicPlaying = true
	      this.sys.game.globals.bgMusic = this.bgMusic
	    }

	} // create()
}