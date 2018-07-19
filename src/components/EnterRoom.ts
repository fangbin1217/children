class EnterRoom extends eui.Component implements  eui.UIComponent {

    private static shared:EnterRoom;

	public static Shared() {
        if(EnterRoom.shared == null) {
            EnterRoom.shared = new EnterRoom();
        }
        return EnterRoom.shared;
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
	public sprcon:any;
	private topMask:any;
	public goBack:any;
	private smallBig:any;

	 createView(): void {
		//sprcon
		this.sprcon = new egret.Sprite();
		this.sprcon.x = 0;
		this.sprcon.y = -egret.MainContext.instance.stage.stageHeight*1.2/10;
		this.addChild( this.sprcon );
		//banner bg
		let topMask = new egret.Shape();
		topMask.name = "indexTopBanner2";
		let matrix:egret.Matrix = new egret.Matrix();
		matrix.createGradientBox(egret.MainContext.instance.stage.stageWidth*3/4, egret.MainContext.instance.stage.stageHeight*1.2/10);
        topMask.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xF1F1F1, 0xF1F1F1], [0.2, 0], [0, 255], matrix);
        topMask.graphics.drawRoundRect(0, 0, egret.MainContext.instance.stage.stageWidth*3/4, egret.MainContext.instance.stage.stageHeight*1.2/10, 20, 20);
        topMask.graphics.endFill();
        this.sprcon.addChild(topMask);
		//back button 
		this.goBack = this.createBitmapByName('icons7_json.backward');	        
        this.goBack.touchEnabled = true; //设置可以进行触摸
		this.goBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
		this.goBack.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
		this.goBack.width = egret.MainContext.instance.stage.stageHeight*1.2/10;
		this.goBack.height = egret.MainContext.instance.stage.stageHeight*1.2/10;
        this.sprcon.addChild(this.goBack);
		//banner effect
		let tw = egret.Tween.get( this.sprcon );
		tw.to( {x:0,y:0}, 700,egret.Ease.sineOut ).call(this.goBackCall);
    }

	private goBackCall():void{
		EnterRoom.Shared().getEnterRoomThis().smallBig = new SmallBig(0,0,egret.MainContext.instance.stage.stageHeight*1.2/10,egret.MainContext.instance.stage.stageHeight*1.2/10);
		EnterRoom.Shared().getEnterRoomThis().smallBig.setPosition(EnterRoom.Shared().getEnterRoomThis().goBack);
		/*
		EnterRoom.Shared().getEnterRoomThis().goBack.x = -egret.MainContext.instance.stage.stageHeight*1.2/20;
		EnterRoom.Shared().getEnterRoomThis().goBack.y = -egret.MainContext.instance.stage.stageHeight*1.2/20;
		EnterRoom.Shared().getEnterRoomThis().goBack.anchorOffsetX = -egret.MainContext.instance.stage.stageHeight*1.2/20;
		EnterRoom.Shared().getEnterRoomThis().goBack.anchorOffsetY = -egret.MainContext.instance.stage.stageHeight*1.2/20;
		*/
	}


	private onTouchSmall(e: egret.TouchEvent):void {
		EnterRoom.Shared().getEnterRoomThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchSmall, this);
		let target = e.$currentTarget;
		let smallBig = new SmallBig(0,0,egret.MainContext.instance.stage.stageHeight*1.2/10, egret.MainContext.instance.stage.stageHeight*1.2/10);
		let target2 = smallBig.toSmaller(target, 0.8);
		/*
		target.scaleX = 0.8;
        target.scaleY = 0.8;
		target.x = -egret.MainContext.instance.stage.stageHeight*1.2/20+egret.MainContext.instance.stage.stageHeight*1.2*0.2/10;
		target.y = -egret.MainContext.instance.stage.stageHeight*1.2/20+egret.MainContext.instance.stage.stageHeight*1.2*0.2/10;
		*/
        EnterRoom.Shared().getEnterRoomThis().sprcon.addChild(target2);
	}

	private onTouchBackIndex(e: egret.TouchEvent):void {
		EnterRoom.Shared().getEnterRoomThis().goBack.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchBackIndex, this);
		let target = e.$currentTarget;
		let smallBig = new SmallBig(0,0,egret.MainContext.instance.stage.stageHeight*1.2/10, egret.MainContext.instance.stage.stageHeight*1.2/10);
		let target2 = smallBig.toRecover(target);
		/*
		target.scaleX = 1;
        target.scaleY = 1;
		target.x = -egret.MainContext.instance.stage.stageHeight*1.2/20;
		target.y = -egret.MainContext.instance.stage.stageHeight*1.2/20;
		*/
        EnterRoom.Shared().getEnterRoomThis().sprcon.addChild(target2);

		//index
		let a = IndexTopBanner.Shared();
		a.createView();
		Index.Shared().getIndexThis().addChild(a);
		//this.parent.addChild(a);
		let b = IndexCenterButton.Shared();
		b.createView();
		Index.Shared().getIndexThis().addChild(b);
		//this.removeChild(this.sprcon);
		EnterRoom.Shared().getEnterRoomThis().removeChild(this.sprcon);
		Index.Shared().getIndexThis().removeChild(this);
		
	}

	getEnterRoomThis():any {
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