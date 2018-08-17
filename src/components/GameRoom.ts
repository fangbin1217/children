class GameRoom extends eui.Component implements  eui.UIComponent {

    private static shared:GameRoom;

	public static Shared() {
        if(GameRoom.shared == null) {
            GameRoom.shared = new GameRoom();
        }
        return GameRoom.shared;
    }

	private constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	public bg:any;

	public sprcon:any;

	public sprcon2:any;

	public sprcon3:any;

	public sprcon4:any;

	public sprcon5:any;

	public goBack:any;

	 createView(): void {
		//set background image
        this.bg = this.createBitmapByName("bgGame_jpg");
		this.bg.width = egret.MainContext.instance.stage.stageWidth;
        this.bg.height = egret.MainContext.instance.stage.stageHeight;
        this.addChild(this.bg);

		//sprcon
		this.sprcon = new egret.Sprite();
		this.sprcon.x = 0;
		this.sprcon.y = 0;
		this.sprcon.width = egret.MainContext.instance.stage.stageWidth;
		this.sprcon.height = egret.MainContext.instance.stage.stageHeight*1/5;
		this.addChild( this.sprcon );

		let shp:egret.Shape = new egret.Shape();
        shp.graphics.lineStyle( 1, 0xffffff );
        shp.graphics.moveTo( 0,egret.MainContext.instance.stage.stageHeight*1/5 );
        shp.graphics.lineTo( egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight*1/5 );
        shp.graphics.endFill();
        this.addChild( shp );

		this.createOne();

		//sprcon2
		this.sprcon2 = new egret.Sprite();
		this.sprcon2.x = 0;
		this.sprcon2.y = egret.MainContext.instance.stage.stageHeight*1/5
		this.sprcon2.width = egret.MainContext.instance.stage.stageWidth/8;
		this.sprcon2.height = egret.MainContext.instance.stage.stageHeight*3/5;
		this.addChild( this.sprcon2 );

		//sprcon3
		this.sprcon3 = new egret.Sprite();
		this.sprcon3.x = egret.MainContext.instance.stage.stageWidth*1/4;
		this.sprcon3.y = egret.MainContext.instance.stage.stageHeight*1/5
		this.sprcon3.width = egret.MainContext.instance.stage.stageWidth*3/4;
		this.sprcon3.height = egret.MainContext.instance.stage.stageHeight*3/5;
		this.addChild( this.sprcon3 );

		//sprcon4
		this.sprcon4 = new egret.Sprite();
		this.sprcon4.x = egret.MainContext.instance.stage.stageWidth*7/8;
		this.sprcon4.y = egret.MainContext.instance.stage.stageHeight*1/5
		this.sprcon4.width = egret.MainContext.instance.stage.stageWidth/8;
		this.sprcon4.height = egret.MainContext.instance.stage.stageHeight*3/5;
		this.addChild( this.sprcon4 );

		this.createTwo();

		let shp3:egret.Shape = new egret.Shape();
        shp3.graphics.lineStyle( 1, 0xffffff );
        shp3.graphics.moveTo( egret.MainContext.instance.stage.stageWidth/8,egret.MainContext.instance.stage.stageHeight/5 );
        shp3.graphics.lineTo( egret.MainContext.instance.stage.stageWidth/8, egret.MainContext.instance.stage.stageHeight*4/5 );
        shp3.graphics.endFill();
        this.addChild( shp3 );

		let shp4:egret.Shape = new egret.Shape();
        shp4.graphics.lineStyle( 1, 0xffffff );
        shp4.graphics.moveTo( egret.MainContext.instance.stage.stageWidth*7/8,egret.MainContext.instance.stage.stageHeight/5 );
        shp4.graphics.lineTo( egret.MainContext.instance.stage.stageWidth*7/8, egret.MainContext.instance.stage.stageHeight*4/5 );
        shp4.graphics.endFill();
        this.addChild( shp4 );

		

		//sprcon5
		this.sprcon5 = new egret.Sprite();
		this.sprcon5.x = 0;
		this.sprcon5.y = egret.MainContext.instance.stage.stageHeight*4/5
		this.sprcon5.width = egret.MainContext.instance.stage.stageWidth;
		this.sprcon5.height = egret.MainContext.instance.stage.stageHeight/5;
		this.addChild( this.sprcon5 );

		let shp2:egret.Shape = new egret.Shape();
        shp2.graphics.lineStyle( 1, 0xffffff );
        shp2.graphics.moveTo( 0,egret.MainContext.instance.stage.stageHeight*4/5 );
        shp2.graphics.lineTo( egret.MainContext.instance.stage.stageWidth, egret.MainContext.instance.stage.stageHeight*4/5 );
        shp2.graphics.endFill();
        this.addChild( shp2 );

		
    }

	private defaultImg = 'icons9_json.sitDown';

	private createOne():void {
		//back button 
		this.goBack = this.createBitmapByName(Config.imageJsonPre+'backward');	        
        this.goBack.touchEnabled = true; //设置可以进行触摸
		this.goBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
		this.goBack.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
		this.goBack.x = 0;
		this.goBack.y = 0;
		let w = 60;
		let h = 60;
		this.goBack.width = w;
		this.goBack.height = h;
        this.sprcon.addChild(this.goBack);

		let smallBig = new SmallBig(0,0,w,h);
		smallBig.setPosition(this.goBack);


		
		//leftTop
		let leftTop = this.createBitmapByName(Config.imageJsonPre+'seat5');	        
        leftTop.x = egret.MainContext.instance.stage.stageWidth/7;
		leftTop.y = 0;
		leftTop.width = 64;
		leftTop.height = 64;
        this.sprcon.addChild(leftTop);

		//centerTop
		let centerTop = this.createBitmapByName(Config.imageJsonPre+'seat4');	        
        centerTop.x = egret.MainContext.instance.stage.stageWidth*3/7;
		centerTop.y = 0;
		centerTop.width = 64;
		centerTop.height = 64;
        this.sprcon.addChild(centerTop);

		//rightTop
		let rightTop = this.createBitmapByName(Config.imageJsonPre+'seat3');	        
        rightTop.x = egret.MainContext.instance.stage.stageWidth*5/7;
		rightTop.y = 0;
		rightTop.width = 64;
		rightTop.height = 64;
        this.sprcon.addChild(rightTop);


	}

	private createTwo():void {
		//myLeft
		let myLeft = this.createBitmapByName(Config.imageJsonPre+'seat6');	        
        myLeft.x = 0;
		myLeft.y = 0;
		myLeft.width = 64;
		myLeft.height = 64;
        this.sprcon2.addChild(myLeft);

		//myRight
		let myRight = this.createBitmapByName(Config.imageJsonPre+'seat2');	        
        myRight.x = 0;
		myRight.y = 0;
		myRight.width = 64;
		myRight.height = 64;
        this.sprcon4.addChild(myRight);
	}

	private onTouchSmall(e: egret.TouchEvent):void {
		GameRoom.Shared().getThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
		let target = e.$currentTarget;
		let smallBig = new SmallBig(0,0,60, 60);
		let target2 = smallBig.toSmaller(target, 0.8);
        GameRoom.Shared().getThis().sprcon.addChild(target2);
	}

	private onTouchBackIndex(e: egret.TouchEvent):void {
		GameRoom.Shared().getThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
		let target = e.$currentTarget;
		let smallBig = new SmallBig(0,0,60, 60);
		let target2 = smallBig.toRecover(target);
	
        GameRoom.Shared().getThis().sprcon.addChild(target2);


		Index.Shared().getIndexThis().removeChildren();
		
		Index.Shared().getIndexThis().createView();
	}


	getThis():any {
		return this;
	}


	/**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}