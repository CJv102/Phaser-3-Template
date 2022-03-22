const gameConfig = 
{
	type: Phaser.AUTO,
	autoCenter: true,
	
	backgroundColor: "#000000",
	width: 900,
	height: 600,
	scale: {
	  autoCenter: Phaser.Scale.CENTER_BOTH
	},

	title: "Phaser Template",
	version: "0.9a",
	url: "\nhttps://github.com/CJv102",
	banner: {
		text: '#ffffff',
		background: [
			'#734547',
			'#bb5d0d',
			'#053A25',
			'#F7A012',
			'#A80110'
		],
		// hidePhaser: true,
	},

	physics: {
		default: 'arcade',
			arcade: {
			debug: true,
			debugShowVelocity: true,
			gravity: { y: 0 }
		},
		// matter: {
		//     debug: true,
		//     debugShowVelocity: true,
		//     gravity: { y: 0 }
		// }
	},
	
	// roundPixels: true,
	// scene: [
	//   BootScene, PreloadScene,TitleScene, OptionsScene, InstructionScene, 
	//   CreditScene, GameScene, EndScene
	// ]
}



const otherConfig = {
	gameVal1: true
}