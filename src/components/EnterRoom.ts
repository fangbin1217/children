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
	 createView(): void {
		//banner 2
		this.sprcon = new egret.Sprite();
		this.addChild( this.sprcon );

		let topMask = new egret.Shape();
		topMask.name = "indexTopBanner2";
		let matrix:egret.Matrix = new egret.Matrix();
		matrix.createGradientBox(egret.MainContext.instance.stage.stageWidth*3/4, egret.MainContext.instance.stage.stageHeight*1.2/10);
        topMask.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xF1F1F1, 0xF1F1F1], [0.2, 0], [0, 255], matrix);

        topMask.graphics.drawRoundRect(0, 0, egret.MainContext.instance.stage.stageWidth*3/4, egret.MainContext.instance.stage.stageHeight*1.2/10, 20, 20);
        topMask.graphics.endFill();
        topMask.x = 0;
        topMask.y = -egret.MainContext.instance.stage.stageHeight*1.2/10;
        this.sprcon.addChild(topMask);
		//back to index 
		this.goBack = this.createBitmapByName('icons4_json.backward');	        
        this.goBack.touchEnabled = true; //设置可以进行触摸
		this.goBack.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBackIndex, this);
		this.goBack.alpha = 0.8;
		this.goBack.x = 10;
		this.goBack.y = -egret.MainContext.instance.stage.stageHeight*1.2/10;
        //goBack.width = this.stageW * 2.8/10;
        //goBack.height = this.stageH * 2.5/10;
        this.sprcon.addChild(this.goBack);
		
		let tw = egret.Tween.get( topMask );
        tw.to( {x:0,y:0}, 700,egret.Ease.sineOut );
		let tw2 = egret.Tween.get( this.goBack );
        tw2.to( {x:0,y:0}, 700,egret.Ease.sineOut );
    }

	private onTouchBackIndex():void {
		this.goBack.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBackIndex, this);
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