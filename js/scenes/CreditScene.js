import Button from '../Objects/Button.js'
export default class CreditScene extends Phaser.Scene
{
	constructor() 
	{
		super('CreditScene')
	}

	create() 
	{
		//////////////////
		// Add Background

		///////////////
		// Add Content
		let text =
			`Made With Phaser.js!! 
			ffff`

		this.creditsText = this.add.bitmapText(150, 300, 'VikingSquad', text)
		this.creditsText.setScale(0.6)


		///////////////
		// Add Buttons
		let startText = new Button(this, 150, gameConfig.height - 50, 'Start', 'small', 'GameScene')
		let titleText = new Button(this, 230, gameConfig.height - 50, 'Home', 'small',  'TitleScene')
		
	}

}