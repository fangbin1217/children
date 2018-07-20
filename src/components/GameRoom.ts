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
		this.sprcon.height = egret.MainContext.instance.stage.stageHeight*1.2/10;
		this.addChild( this.sprcon );

		//back button 
		this.goBack = this.createBitmapByName('icons7_json.backward');	        
        this.goBack.touchEnabled = true; //设置可以进行触摸
		this.goBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
		this.goBack.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
		this.goBack.x = 0;
		this.goBack.y = 0;
		let w = egret.MainContext.instance.stage.stageHeight*1.2/10;
		let h = egret.MainContext.instance.stage.stageHeight*1.2/10;
		this.goBack.width = w;
		this.goBack.height = h;
        this.sprcon.addChild(this.goBack);

		let smallBig = new SmallBig(0,0,w,h);
		smallBig.setPosition(this.goBack);
    }

	private onTouchSmall(e: egret.TouchEvent):void {
		GameRoom.Shared().getThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
		let target = e.$currentTarget;
		let smallBig = new SmallBig(0,0,egret.MainContext.instance.stage.stageHeight*1.2/10, egret.MainContext.instance.stage.stageHeight*1.2/10);
		let target2 = smallBig.toSmaller(target, 0.8);
        GameRoom.Shared().getThis().sprcon.addChild(target2);
	}

	private onTouchBackIndex(e: egret.TouchEvent):void {
		GameRoom.Shared().getThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
		let target = e.$currentTarget;
		let smallBig = new SmallBig(0,0,egret.MainContext.instance.stage.stageHeight*1.2/10, egret.MainContext.instance.stage.stageHeight*1.2/10);
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