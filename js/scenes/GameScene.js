import Helper from '../classes/Helper.js'

export default class GameScene extends Phaser.Scene
{
	constructor(GameScene)
	{	
		super(GameScene)
		this.mapWidth = 4800
		this.mapHeight = 4800
	}


	create()
	{

	    this.add.bitmapText(100, 100, 'VikingSquad', '100')

	} // create()


	preUpdate (time, delta)
    {
        super.preUpdate(time, delta)
    }



	update(time, delta)
	{



	}// update()

}// GameScene()